const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Define your data
const data = {
    name: "Shubh Thorat",
    address: "458 Huntington Ave, Boston, MA",
    email: "thorat.shu@northeastern.edu",
    phone: "+1 (617) 283 0499",
    linkedIn: "linkedin.com/in/shubhthorat",
    gitHub: "github.com/itsjustshubh",
    education1: {
        university: "Northeastern University",
        location: "Boston, MA",
        degree: "Bachelor’s Of Science",
        field: "Computer Science (AI)",
        dates: "Sep 2022 - Apr 2026"
    },
    skills: {
        languages: "C, Java, Python, SQL, HTML, CSS, JavaScript",
        tools: "Eclipse, Visual Studio Code, MySQL, Node.js, React.js"
    },
    project1: {
        name: "Edith - AI Calendar App",
        description: "An AI-driven calendar app for personal scheduling and event management."
    }
    // Add more data as needed
};

async function generateResume() {
    // Load TeX template
    let texTemplate = fs.readFileSync(path.join(__dirname, '..', 'templates', 'resume', 'resumeTemplate.tex'), 'utf8');

    // Replace placeholders with actual data
    texTemplate = texTemplate.replace('{{Name}}', data.name)
                             .replace('{{Address}}', data.address)
                             .replace('{{Email}}', data.email)
                             .replace('{{Phone}}', data.phone)
                             .replace('{{LinkedIn}}', data.linkedIn)
                             .replace('{{GitHub}}', data.gitHub)
                             .replace('{{Education1_University}}', data.education1.university)
                             .replace('{{Education1_Location}}', data.education1.location)
                             .replace('{{Education1_Degree}}', data.education1.degree)
                             .replace('{{Education1_Field}}', data.education1.field)
                             .replace('{{Education1_Dates}}', data.education1.dates)
                             .replace('{{Skills_Languages}}', data.skills.languages)
                             .replace('{{Skills_Tools}}', data.skills.tools)
                             .replace('{{Project1_Name}}', data.project1.name)
                             .replace('{{Project1_Description}}', data.project1.description);
    // ... Add more replacements as needed

    // Check if the outputs directory exists, if not, create it
    const outputPath = path.join(__dirname, '..', 'outputs');
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true });
    }

    // Save the TeX file
    const outputFilePath = path.join(outputPath, 'resume.tex');
    fs.writeFileSync(outputFilePath, texTemplate);

    // Compile the TeX file into a PDF using MacTeX
    exec(`pdflatex -output-directory=${outputPath} ${outputFilePath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(stdout);
        console.log('PDF resume generated successfully.');
    });
}

generateResume();
