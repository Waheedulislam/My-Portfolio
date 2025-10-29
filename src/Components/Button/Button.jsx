const SkillsButtons = () => {
    const skills = [
        // Frontend
        "#HTML5",
        "#CSS3",
        "#JavaScript",
        "#JavaScript (ES6)",
        "#React.js",
        "#Next.js",
        "#TypeScript",
        "#Redux",
        "#Redux Toolkit",
        "#React Hooks",
        "#React Router DOM",
        "#Tailwind CSS",
        "#Bootstrap",
        "#ShadCN UI",
        "#Ant Design",
        "#Material-UI",

        // Backend
        "#Node.js",
        "#Express.js",
        "#JWT",
        "#DotEnv",
        "#REST APIs",
        "#Firebase",
        "#React Firebase Hooks",

        // Database
        "#MongoDB",
        "#Mongoose",
        "#PostgreSQL",
        "#Prisma ORM",

        // Tools & Deployment
        "#Git",
        "#GitHub",
        "#Postman",
        "#Chrome DevTools",
        "#Figma",
        "#Vercel",
        "#Render",
    ];

    return (
        <div className="flex flex-wrap">
            {skills.map((skill, index) => (
                <button
                    key={index}
                    className="btn btn-outline m-1 rounded-full btn-sm btn-success"
                >
                    {skill}
                </button>
            ))}
        </div>
    );
};

export default SkillsButtons;
