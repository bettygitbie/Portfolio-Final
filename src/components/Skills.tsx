import React from 'react';

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Bootstrap"] },
  { category: "Backend", items: ["Node.js", "Express", "Redux","PostgreSQL", "MongoDB"] },
  { category: "Tools", items: ["GitHub", "VS Code", "Postman", "Figma"] },
  {category: "Web Services", items: ["RESTful APIs", "GraphQL",  "OAuth", "json web tokens"]},
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillSet) => (
            <div key={skillSet.category} className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">{skillSet.category}</h3>
              <ul className="space-y-2">
                {skillSet.items.map((skill) => (
                  <li key={skill} className="text-gray-700">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}