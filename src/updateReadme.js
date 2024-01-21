const fs = require('fs');
const path = require('path');

// Adjust the path to your content.js file
const { education, skills, projects } = require('./pages/Content');

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

    if (skill.readMeIcon) {
        // Check if 'src/assets/imported-icons/' is part of the path
        if (skill.readMeIcon.includes('src/assets/imported-icons/')) {
            console.log("Original Path:", skill.readMeIcon);  // Debugging: Log the original path
            iconPath = skill.readMeIcon.replace('src/assets/imported-icons/', 'assets/');
            console.log("Modified Path:", iconPath);  // Debugging: Log the modified path
        } else {
            // If the path does not contain 'src/assets/imported-icons/', use it as is
            iconPath = skill.readMeIcon;
        }
    } else {
        // Handle the case where readMeIcon is not defined
        return `<code>${skill.name}</code>`;
    }

    return `<code><img title="${skill.name}" height="25" src="${iconPath}"></code>`;
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

    // Replace placeholders in the template
    const updatedContent = templateContent
        .replace('<!-- DYNAMIC_EDUCATION -->', educationContent)
        .replace('<!-- DYNAMIC_SKILLS -->', skillsContent)
        .replace('<!-- DYNAMIC_PROJECTS -->', projectsContent);

    // Write to README.md
    fs.writeFileSync('README.md', updatedContent, 'utf8');
    console.log('README updated successfully.');
}

updateReadme();
