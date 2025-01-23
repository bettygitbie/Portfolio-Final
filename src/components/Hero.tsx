import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Hi, I'm Betty! <br /> <br />
            Software Engineer
            <br />
            <span className="text-orange-600">Building the Future</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Highly motivated software developer with hands-on experience in both
            front-end and back-end technologies, including JavaScript,
            TypeScript, React, Node.js, Nextjs, Express, Redux state management and databases such as PostgreSQL and
            MongoDB. Gaining expertise in data structures and algorithms.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Let's Connect <ArrowRight size={20} />
          </a>
        </div>
        <div className="relative">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQEzUaUEZ2fTCQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725848522478?e=1742428800&v=beta&t=wQwcLZdAQVGIjJqSXEeD2tlCtcprQ_gekwCIYUZ0N8Y"
            alt="Developer workspace"
            className="rounded-full shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
