const fs = require('fs');
const path = require('path');

// Adjust the path to your content.js file
const { education, skills, projects } = require('./pages/Content');

// Function to generate markdown for each section
function generateMarkdownForEducation(education) {
    return education.map(edu => `### ${edu.degree}\n- **Institution:** ${edu.institution}\n- **Period:** ${edu.period}\n- **Description:** ${edu.description}\n`).join('\n');
}

function generateMarkdownForSkills(skills) {
    return skills.map(skill => `- ${skill.name}`).join('\n');
}

function generateMarkdownForProjects(projects) {
    return projects.map(project => {
        let projectMarkdown = `### ${project.name}\n`;
        projectMarkdown += `![${project.name} Image](${project.image})\n`; // Replace with actual path
        projectMarkdown += `- **Timeline:** ${project.timeline}\n`;
        projectMarkdown += `- **Description:** ${project.description}\n`;

        // Add buttons
        project.buttons.forEach(button => {
            projectMarkdown += `[![${button.buttonText}](https://img.shields.io/badge/-${encodeURIComponent(button.buttonText)}-brightgreen?style=flat&logo=${button.buttonIcon})](${button.buttonLink})\n`;
        });

        return projectMarkdown;
    }).join('\n');
}

function updateReadme() {
    // Define the path to the README template
    const templatePath = path.join(__dirname, '..', 'templates', 'README', 'readmeTemplate.md');

    // Check if the README template exists
    if (!fs.existsSync(templatePath)) {
        console.error('Template file not found at:', templatePath);
        return;
    }

    // Read the README template content
    const templateContent = fs.readFileSync(templatePath, 'utf8');

    // Generate dynamic content
    const educationContent = generateMarkdownForEducation(education);
    const skillsContent = generateMarkdownForSkills(skills);
    const projectsContent = generateMarkdownForProjects(projects);

    // Replace placeholders in the template with dynamic content
    const updatedContent = templateContent
        .replace('<!-- DYNAMIC_EDUCATION -->', educationContent)
        .replace('<!-- DYNAMIC_SKILLS -->', skillsContent)
        .replace('<!-- DYNAMIC_PROJECTS -->', projectsContent);

    // Write the updated content to README.md
    fs.writeFileSync('README.md', updatedContent, 'utf8');
    console.log('README updated successfully.');
}

updateReadme();
