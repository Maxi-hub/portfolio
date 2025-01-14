export const Education = () => {

    const education = [
        {
            position: "Frontend-разработчик",
            level: "курсы",
            institutionName: "GeekBrains",
            graduationYear: 2024
        },
        {
            position: "Юрист",
            level: "по специальности `Юриспруденция`, высшее",
            institutionName: "УИИТ (универсальный институт инновационных технологий)",
            graduationYear: 2006
        }
    ]

    return (
        <div className="education">
            <div className="education-box">
                <h1 className="education-title">образование</h1>
                {education.map((item, index) => (
                    <div key={index} className="education-item">
                    <p><span className="degree">{item.position}</span>, {item.level}</p>
                    <p>{item.institutionName}, {item.graduationYear}</p>
                </div>
                ))}
                
            </div>
        </div>
    )
}
