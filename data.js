const personalData = {
    name: "Jason Li",
    title: "Software & Electrical Engineer",
    contact: {
        phone: "+1 (412) 954-8572",
        email: "jasonli5@andrew.cmu.edu",
        linkedin: "www.linkedin.com/in/jasonli121"
    },
    education: [
        {
            school: "Carnegie Mellon University",
            degree: "Master of Science in Electrical and Computer Engineering",
            location: "Pittsburgh, PA",
            date: "Expected May 2025",
            courses: [
                "Principles of Software Construction",
                "Machine Learning",
                "Deep Learning and Pattern Recognition",
                "Building Reliable Distributed Systems",
                "Foundations of Computer Systems",
                "Data Structure"
            ]
        },
        {
            school: "University of British Columbia",
            degree: "Master of Engineering in Electrical and Computer Engineering",
            location: "Vancouver, Canada",
            date: "Sept. 2023 – Dec. 2023",
            courses: ["Machine Learning Models", "Relational Databases"]
        },
        {
            school: "National Taiwan University of Science and Technology",
            degree: "Bachelor of Science in Electrical Engineering",
            location: "Taipei, Taiwan",
            date: "2022",
            courses: [
                "Communication Systems",
                "Data Networks",
                "Digital System Design",
                "Big Data and Programming",
                "Signals and Systems",
                "Applied Renewable Energy with MATLAB",
                "Microcomputer"
            ]
        }
    ],
    experience: [
        {
            company: "Apple",
            role: "Software Engineering Intern",
            location: "Montreal, Canada",
            date: "May 2024 - Aug. 2024",
            achievements: [
                "Committed infrastructure tools to production for the Tap-to-Pay team using Swift and Xcode. Resulted in a 40% boost in operational efficiency and enabling faster development cycles.",
                "Led the development of a production project, delivered the project 2 weeks ahead of schedule and showcased wireless technology innovations to a team of 60 engineers.",
                "Collaborated with 5 cross-functional teams to integrate new features and optimize security function."
            ]
        },
        {
            company: "Logitech",
            role: "Electrical Engineering Intern",
            location: "Hsinchu, Taiwan",
            date: "Feb. 2022 - July 2022",
            achievements: [
                "Engineered new firmware features for Logitech Gaming keyboards, integrated proximity sensor research to enable adaptive user interaction, resulting in a 15% improvement in responsiveness.",
                "Optimized power consumption of prototype keyboards by 20% by creating efficient power management algorithms in embedded software, utilizing low-power mode designs to minimize energy usage."
            ]
        }
    ],
    skills: {
        software: ["Java", "Python", "Swift", "C", "C++", "Objective-C", "MATLAB", "HTML", "JavaScript", "Assembly Code"],
        tools: ["Kubernetes", "Docker", "AWS", "GCP", "PyTorch", "Node.js", "React.js", "SQL", "Git", "Linux", "GitLab CI/CD"],
        competencies: ["Software Development", "iOS Development", "Machine learning", "Large Language Model"]
    },
    projects: [
        {
            name: "Conversational AI for Wireless Networks",
            role: "Research Assistant - Laboratory for Emerging Wireless Technologies (CMU)",
            date: "Sept. 2024 - Present",
            details: [
                "Co-author: \"Can we make FCC experts out of LLMs\" under review for HotMobile 2025",
                "Designed a LLM pipeline to address wireless technology issues using in-context learning and RAG",
                "Conducted an extensive review of research papers on state-of-the-art LLM techniques"
            ]
        },
        {
            name: "Web Board Game: Santorini",
            date: "June 2024",
            details: [
                "Designed detailed domain models, object diagrams, and sequence diagrams",
                "Automated deployment, continuous integration, and testing pipelines using Maven"
            ]
        },
        {
            name: "Detection and Warning System for Motorcycle Rear Mirrors",
            date: "May 2022",
            details: [
                "Designed a vehicle detection system integrating Raspberry Pi, Python, and OpenCV",
                "Earned the \"Gold Medal in Software Application\" at the 19th Y.S. Award, MiTAC-Synnex Group"
            ]
        }
    ]
};

export default personalData; 