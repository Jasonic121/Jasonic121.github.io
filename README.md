# Personal Portfolio Website

A modern personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- Responsive design
- Smooth animations with Framer Motion
- Interactive UI components
- Contact form
- Project showcase
- Skills, education, and experience sections

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/personal-portfolio.git
cd personal-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update your personal information in the following files:
- `src/pages/index.js` - Update the title and meta description
- `src/components/sections/Hero.jsx` - Update your name and introduction
- `src/components/sections/About.jsx` - Update your about text

### Projects

Update your projects in `src/data/projects.js`.

### Skills, Education, and Experience

Update your information in:
- `src/data/skills.js`
- `src/data/education.js`
- `src/data/experience.js`

### Images

Replace the placeholder images in the `public/images` directory with your own:
- `profile.jpg` - Your profile picture
- `workspace.jpg` - A picture of your workspace
- `projects/*.jpg` - Project screenshots

### Resume

Replace the placeholder `public/resume.pdf` with your own resume.

## Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow:

1. Builds the Next.js site
2. Exports it to static HTML/CSS/JS
3. Deploys to the gh-pages branch
4. Serves it at jasonli-hub.com

## Built With

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/) 