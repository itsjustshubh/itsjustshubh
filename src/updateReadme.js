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
    let iconPath;
    let skillLink = skill.link || '#'; // Default to '#' if no link is provided

    if (skill.readMeIcon) {
        // Extract the basename (filename) from the path
        const iconName = path.basename(skill.readMeIcon);
        console.log("Icon Path:", iconName);

        // Construct the new path using the required base directory
        iconPath = path.join('src/assets/imported-icons/', iconName);
        console.log("Modified Path:", iconPath);
    } else {
        // Return just the skill name if readMeIcon is not defined
        return `<code>${skill.name}</code>`;
    }

    // Return the skill icon wrapped in an anchor tag with margin for spacing
    return `<a href="${skillLink}" target="_blank" title="${skill.name}" style="margin: 0 10px;"><code><img height="25" src="${iconPath}"></code></a>`;
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

function formatSocialProfile(profile) {
    // Extract the basename (filename) from the icon path, assuming the icon names are stored in profile.icon
    const iconName = path.basename(profile.icon);
        console.log("Icon Path:", iconName);

        // Construct the new path using the required base directory
        iconPath = path.join('src/assets/imported-icons/', iconName);
        console.log("Modified Path:", iconPath);

    return `<code><a href="${profile.link}" target="_blank" title="${profile.name}" style="background-color: ${profile.backgroundColor}; padding: 5px; margin: 0 5px; border-radius: 4px;">
    <img src="${iconPath}" height="30" alt="${profile.name}"><strong style="font-size: 16px;"> ${profile.name}</strong>
  </a></code>`;
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
    const socialProfilesContent = socialProfiles.map(formatSocialProfile).join('');

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
