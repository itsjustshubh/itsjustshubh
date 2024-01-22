const fs = require('fs');
const path = require('path');

// Adjust the path to your content.js file
const { education, skills, projects, socialProfiles } = require('./pages/Content');

// Function to generate markdown for each section with expandable lists
function generateExpandableMarkdown(sectionTitle, items, formatter) {
    const detailsStartTag = `<details><summary>${sectionTitle}</summary>\n`;
    const detailsEndTag = '</details>\n';

    const formattedItems = items.map(formatter).join('\n');

    return detailsStartTag + formattedItems + detailsEndTag;
}

function formatEducation(education) {
    return `<details><summary>${education.degree}</summary>
- **Institution:** ${education.institution}
- **Period:** ${education.period}
- **Description:** ${education.description}
</details>`;
}

function formatSkill(skill) {
    // Initialize variables
    let iconPath;
    let skillLink = skill.link || '#'; // Default to '#' if no link is provided

    // Check if readMeIcon property exists
    if (skill.readMeIcon) {
        // Extract the basename (filename) from the path
        const iconName = path.basename(skill.readMeIcon);

        // Construct the new path using the required base directory
        iconPath = path.join('src/assets/imported-icons/', iconName);
    } else {
        // Handle the case where readMeIcon is not defined by using a placeholder
        // You can replace 'placeholder-icon.svg' with a default icon if you have one
        iconPath = 'src/assets/imported-icons/placeholder-icon.svg';
    }

    // Return the skill icon as an anchor tag
    return `<a href="${skillLink}" target="_blank" title="${skill.name}"><img height="25" src="${iconPath}"></a>`;
}

function formatProject(project) {
    let projectMarkdown = `<details><summary>${project.name}</summary>\n`;
    projectMarkdown += `![${project.name} Image](${project.image})\n`; // Replace with actual path
    projectMarkdown += `- **Timeline:** ${project.timeline}\n`;
    projectMarkdown += `- **Description:** ${project.description}\n`;

    // Add buttons
    project.buttons.forEach(button => {
        projectMarkdown += `[![${button.buttonText}](https://img.shields.io/badge/-${encodeURIComponent(button.buttonText)}-brightgreen?style=flat&logo=${button.buttonIcon})](${button.buttonLink})\n`;
    });
    projectMarkdown += '</details>';

    return projectMarkdown;
}

function formatSocialProfiles(profiles) {
    let profilesMarkup = `<div style="display: flex; align-items: center; justify-content: center; flex-wrap: wrap;">`;

    profiles.forEach(profile => {
        const iconName = path.basename(profile.icon);
        const iconPath = `src/assets/imported-icons/${iconName}`; // Assuming the extension is .svg
        const textColor = profile.color || 'white'; // Use profile's color or default to inherit

        profilesMarkup += `<a href="${profile.link}" target="_blank" title="${profile.name}" style="background-color: ${profile.backgroundColor}; padding: 5px; margin: 5px; border-radius: 4px; display: flex; align-items: center; color: ${textColor};">
            <img src="${iconPath}" height="30" alt="${profile.name}" style="margin-right: 5px;">
            <strong style="font-size: 16px;">${profile.name}</strong>
        </a>`;
    });

    profilesMarkup += `</div>`;

    return profilesMarkup;
}

function updateReadme() {
    const templatePath = path.join(__dirname, '..', 'templates', 'README', 'readmeTemplate.md');
    if (!fs.existsSync(templatePath)) {
        console.error('Template file not found at:', templatePath);
        return;
    }

    const templateContent = fs.readFileSync(templatePath, 'utf8');

    // Generate dynamic content
    const educationContent = generateExpandableMarkdown('Education', education, formatEducation);
    const skillsContent = `<p align="center">${skills.map(formatSkill).join(' ')}</p>`;
    const projectsContent = generateExpandableMarkdown('Projects', projects, formatProject);

    // Map over socialProfiles using formatSocialProfiles function
    const socialProfilesContent = formatSocialProfiles(socialProfiles);

    const updatedContent = templateContent
        .replace('<!-- DYNAMIC_EDUCATION -->', educationContent)
        .replace('<!-- DYNAMIC_SKILLS -->', skillsContent)
        .replace('<!-- DYNAMIC_PROJECTS -->', projectsContent)
        .replace('<!-- DYNAMIC_SOCIAL_PROFILES -->', socialProfilesContent);

    // Write to README.md
    fs.writeFileSync('README.md', updatedContent, 'utf8');
    console.log('README updated successfully.');
}

updateReadme();
