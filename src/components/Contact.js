import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="text-gray-400 bg-gray-900 body-font relative">
      <div className="container px-5 py-10 mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-white">
          Get in Touch
        </h1>
        <p className="mb-8 leading-relaxed">
          Whether it's an embedded project or just a conversation — feel free to reach out!
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="mailto:david.tobasura@gmail.com"
            className="inline-flex items-center text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
          >
            Contact Me
          </a>
          <a
            href="https://www.linkedin.com/in/david-tobasura"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg"
          >
            LinkedIn
          </a>
          <a
            href="/CV_DavidTobasura.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}