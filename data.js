const personalData = {
    name: "Jason Li",
    title: "Software & Electrical Engineer",
    profileImage: "assets/images/profile.jpg",
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
            logo: "assets/images/cmu-logo.png",
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
            logo: "assets/images/ubc-logo.png",
            courses: ["Machine Learning Models", "Relational Databases"]
        },
        {
            school: "National Taiwan University of Science and Technology",
            degree: "Bachelor of Science in Electrical Engineering",
            location: "Taipei, Taiwan",
            date: "2022",
            logo: "assets/images/ntust-logo.png",
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
            logo: "assets/images/apple-logo.png",
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
            logo: "assets/images/logitech-logo.png",
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
            name: "WatchPoint",
            role: "Team Lead - CMU Hackathon",
            date: "2024",
            image: "assets/images/NOVA-award-pic.jpg",
            github: "https://github.com/Jasonic121/WatchPoint",
            demoVideo: "assets/videos/watchpoint-demo.mp4",
            summary: "Bronze Medal-winning parental monitoring app using AI for detecting harmful digital content, developed at CMU Hackathon.",
            details: [
                "Led a team to develop an AI-powered parental monitoring application that ensures children's online safety",
                "Implemented advanced sentiment analysis for real-time detection of abusive or harmful content",
                "Designed customizable privacy settings and real-time alert system for parents",
                "Won Bronze Medal at CMU Hackathon for innovative approach to digital safety",
                "Built using Python, sentiment analysis, and real-time monitoring technologies"
            ]
        },
        {
            name: "Conversational AI for Wireless Networks",
            role: "Research Assistant - Laboratory for Emerging Wireless Technologies (CMU)",
            date: "Sept. 2024 - Present",
            image: "assets/images/ai-project.jpg",
            github: "https://github.com/Jasonic121/WiLL.git",
            summary: "Lead author of paper accepted at HotMobile 2025, developing AI systems to revolutionize wireless network troubleshooting.",
            details: [
                "Lead author of \"Can we make FCC experts out of LLMs\" accepted at HotMobile 2025 (ACM International Workshop on Mobile Computing Systems and Applications)",
                "Selected as the conference presenter to showcase research findings at HotMobile 2025",
                "Designed a LLM pipeline to address wireless technology issues using in-context learning and RAG",
                "Conducted an extensive review of research papers on state-of-the-art LLM techniques"
            ]
        },
        {
            name: "Web Board Game: Santorini",
            date: "June 2024",
            image: "assets/images/santorini-project.jpg",
            github: "https://github.com/Jasonic121/Santorini",
            summary: "A modern web implementation of Santorini with automated testing and CI/CD pipeline, achieving 95% test coverage.",
            details: [
                "Designed detailed domain models, object diagrams, and sequence diagrams",
                "Automated deployment, continuous integration, and testing pipelines using Maven"
            ]
        },
        {
            name: "Detection and Warning System for Motorcycle Rear Mirrors",
            date: "May 2022",
            image: "assets/images/motorcycle-project.jpg",
            github: "https://github.com/Jasonic121/Motorcycle-Safety",
            summary: "Award-winning safety system using computer vision to enhance motorcycle safety, earning Gold Medal at Y.S. Award.",
            details: [
                "Designed a vehicle detection system integrating Raspberry Pi, Python, and OpenCV",
                "Earned the \"Gold Medal in Software Application\" at the 19th Y.S. Award, MiTAC-Synnex Group"
            ]
        }
    ]
};

export default personalData; 