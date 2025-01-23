import personalData from './data.js';

document.addEventListener('DOMContentLoaded', function() {
    // Populate personal information
    document.getElementById('name-placeholder').textContent = personalData.name;
    document.getElementById('title-placeholder').textContent = personalData.title;
    document.getElementById('footer-name').textContent = personalData.name;
    
    // Set profile image if available
    if (personalData.profileImage) {
        const profileImg = document.querySelector('.profile-img-placeholder');
        profileImg.innerHTML = `<img src="${personalData.profileImage}" alt="Profile photo" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
    }
    
    // Set up contact links
    document.getElementById('linkedin-link').href = `https://${personalData.contact.linkedin}`;
    document.getElementById('email-link').href = `mailto:${personalData.contact.email}`;

    // Populate education section
    const educationContainer = document.getElementById('education-container');
    personalData.education.forEach(edu => {
        const eduElement = createEducationElement(edu);
        educationContainer.appendChild(eduElement);
    });

    // Populate experience section
    const experienceContainer = document.getElementById('experience-container');
    personalData.experience.forEach(exp => {
        const expElement = createExperienceElement(exp);
        experienceContainer.appendChild(expElement);
    });

    // Populate skills section
    const skillsContainer = document.getElementById('skills-container');
    Object.entries(personalData.skills).forEach(([category, skills]) => {
        const skillElement = createSkillsElement(category, skills);
        skillsContainer.appendChild(skillElement);
    });

    // Populate projects section
    const projectsContainer = document.getElementById('projects-container');
    personalData.projects.forEach(project => {
        const projectElement = createProjectElement(project);
        projectsContainer.appendChild(projectElement);
    });

    // Set up form handling
    setupContactForm();
});

function createEducationElement(edu) {
    const div = document.createElement('div');
    div.className = 'education-item';
    div.innerHTML = `
        ${edu.logo ? `<img src="${edu.logo}" alt="${edu.school} logo" class="school-logo">` : ''}
        <h3>${edu.school}</h3>
        <p>${edu.degree}</p>
        <p class="date">${edu.date}</p>
        <p>${edu.location}</p>
        <div class="courses-list">
            ${edu.courses.map(course => `<span class="course-tag">${course}</span>`).join('')}
        </div>
    `;
    return div;
}

function createExperienceElement(exp) {
    const div = document.createElement('div');
    div.className = 'experience-card';
    div.innerHTML = `
        ${exp.logo ? `<img src="${exp.logo}" alt="${exp.company} logo" class="company-logo">` : ''}
        <h3>${exp.company}</h3>
        <h4>${exp.role}</h4>
        <p class="date">${exp.date}</p>
        <p>${exp.location}</p>
        <ul>
            ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
        </ul>
    `;
    return div;
}

function createSkillsElement(category, skills) {
    const div = document.createElement('div');
    div.className = 'skill-category';
    div.innerHTML = `
        <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
        <div class="skill-list">
            ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
    `;
    return div;
}

function createProjectElement(project) {
    const div = document.createElement('div');
    div.className = 'project-card';
    div.innerHTML = `
        ${project.image ? `<div class="project-image"><img src="${project.image}" alt="${project.name}"></div>` : ''}
        <h3>${project.name}</h3>
        ${project.role ? `<h4>${project.role}</h4>` : ''}
        <p class="date">${project.date}</p>
        <ul>
            ${project.details.map(detail => `<li>${detail}</li>`).join('')}
        </ul>
    `;
    return div;
}

function setupContactForm() {
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        // Here you would typically send the form data to a server
        alert('Thanks for your message! I\'ll get back to you soon.');
        this.reset();
    });
}

// Smooth scroll function
function scrollToContact() {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
}

// Navigation highlight on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}); 