const education = [
    {
        degree: "Bachelor of Engineering in Computer Science",
        institution: "Wrocław University of Science and Technology",
        year: "2018 - 2023",
        description: "GPA: 4.0",
        icon: "🎓",
    },
];

const experience = [
    {
        role: "Junior Software Developer",
        company: "getsix Wrocław Sp. z o.o.",
        year: "07/2023 - 07/2024",
        description: [
            "Developed and deployed backend services for an automated VAT compliance system for e-commerce using Azure Functions",
            "Integrated the application with Amazon and BaseLinker APIs, streamlining e-commerce tax compliance",
            "Designed and implemented an automated notification system via Azure Logic Apps",
        ],
        icon: "💼",
    },
    {
        role: "DevOps Intern",
        company: "Kyndryl",
        year: "10/2021 - 02/2022",
        description: [
            "Gained hands-on experience in Linux server administration and Docker containerization.",
            "Conducted research and documentation on Scrum methodologies for internal team process optimization.",
        ],
        icon: "💻",
    },
];

const Education = () => {
    return (
        <section id="education" className="bg-gradient-to-r bg-gray-950 py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12">
                    Education & Experience
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Experience Section */}
                    <div>
                        <h3 className="text-3xl font-semibold text-gray-300 mb-6">Experience</h3>
                        {experience.map((exp, index) => (
                            <div
                                key={index}
                                className="flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6"
                            >
                                <div className="text-4xl mr-6 text-blue-500">{exp.icon}</div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-200">{exp.role}</h4>
                                    <p className="text-gray-300">{exp.company}</p>
                                    <p className="text-gray-300 text-sm italic">{exp.year}</p>
                                    <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                                        {exp.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Education section */}
                    <div>
                        <h3 className="text-3xl font-semibold text-gray-300 mb-6">Education</h3>
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className="flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6"
                            >
                                <div className="text-4xl mr-6 text-blue-500">{edu.icon}</div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-200">{edu.degree}</h4>
                                    <p className="text-gray-300">{edu.institution}</p>
                                    <p className="text-gray-300 text-sm italic">{edu.year}</p>
                                    <p className="text-gray-300 mt-2">{edu.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;