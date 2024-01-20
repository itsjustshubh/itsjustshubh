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
    return projects.map(project => `### ${project.name}\n- **Timeline:** ${project.timeline}\n- **Description:** ${project.description}\n`).join('\n');
}

function updateReadme() {
    // Read the existing README content
    const readmeTemplate = fs.readFileSync('README.md', 'utf8');

    // Generate dynamic content
    const educationContent = generateMarkdownForEducation(education);
    const skillsContent = generateMarkdownForSkills(skills);
    const projectsContent = generateMarkdownForProjects(projects);

    // Replace placeholders in the template with dynamic content
    const updatedReadme = readmeTemplate
        .replace('<!-- DYNAMIC_EDUCATION -->', educationContent)
        .replace('<!-- DYNAMIC_SKILLS -->', skillsContent)
        .replace('<!-- DYNAMIC_PROJECTS -->', projectsContent);

    // Write the updated README
    fs.writeFileSync('README.md', updatedReadme, 'utf8');
    console.log('README updated successfully.');
}

updateReadme();
