import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm David Tobasura.
          </h1>
          <p className="mb-8 leading-relaxed">
            Electronic Engineer from Universidad Nacional de Colombia. For over five years, I've been working in
            IT support, systems auditing and operations - learning how to solve problems under pressure, thinking about how
            to improve processes and keep things running smoothly. Currently working as Technical Support at Treble.ai.
             <br /><br />
            I've always enjoyed tech, but recently, I've found myself more drawn to code. Now, I'm developing projects
            involving microcontrollers, C programming and real time systems. To sharpen these skills, I'm currently 
            studying a specialization in Embeded Systems at the Universidad de Buenos Aires (UBA).
          <br /><br />
            I consider myself a curious and adaptable person. I'm a quick learner, always eager to grow and take on 
            new challenges. I also enjoy sharing ideas and collaborating with others.
            
            
      
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./profile.jpg"
          />
        </div>
      </div>
    </section>
  );
}
