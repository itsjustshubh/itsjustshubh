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
    const iconName = path.basename(education.image);
    const iconPath = `src/assets/images/education/${iconName}`;

    const formattedDescription = education.description.replace(/\n\n/g, " ");

    return `<details>
<summary><h3><b>${education.degree}</b></h3></summary>
<img src="${iconPath}" alt="${education.institution} Logo" style="width:200px; height:200px;"><br>

- **Institution:** ${education.institution}
- **Period:** ${education.period}
${education.course ? `- **Course:** ${education.course}<br>` : ''}
- **Description:** ${formattedDescription}
</details>`;
}

function formatProject(project) {
    // console.log("Project Image:", path.basename(project.image));
    // const iconName = path.basename(project.image);
    // const iconPath = `src/assets/icons/${iconName}`;
    const formattedDescription = project.description.replace(/\n\n/g, " ");

    return `<details>
<summary><h3><b>${project.name}</b></h3></summary>
<!--<img src="" alt="${project.name} Logo" style="width:200px; height:200px;"><br>-->

${project.languages ? `- **Lenguages:** ${project.languages}<br>` : ''}
- **Timeline:** ${project.timeline}
- **Description:** ${formattedDescription}
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
    return `<a href="${skillLink}" target="_blank" title="${skill.name}" style="margin: 0 10px;"><code><img height="35" src="${iconPath}"></code></a>`;
}

function formatSocialProfiles(profiles) {
    let profilesMarkup = `<p align="center">`;

    profiles.forEach(profile => {
        const iconName = path.basename(profile.icon);
        const iconPath = `src/assets/imported-icons/${iconName}`; // Assuming the extension is .svg

        profilesMarkup += `<a href="${profile.link}" target="_blank" title="${profile.name}" style="margin: 0 10px;">
            <code><img height="35" src="${iconPath}"></code>
        </a>`;
    });

    profilesMarkup += `</p>`;

    return profilesMarkup;
}

function updateReadme() {
    const templatePath = path.join(__dirname, '..', 'templates', 'README', 'readmeTemplate.md');
    if (!fs.existsSync(templatePath)) {
        console.error('Template file not found at:', templatePath);
        return;
    }

    const templateContent = fs.readFileSync(templatePath, 'utf8');

    // Generate dynamic content for each section
    const educationContent = education.map(formatEducation).join('\n');
    const skillsContent = `<p align="center">${skills.map(formatSkill).join(' ')}</p>`;
    const projectsContent = projects.map(formatProject).join('\n');
    const socialProfilesContent = formatSocialProfiles(socialProfiles);

    // Replace placeholders in the template with generated content
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
