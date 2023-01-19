import React from "react";

const About = () => {
  return (
    <div>
      <div className="font-clashBold text-center h-screen flex flex-col justify-center">
        <div className="h-1/2 my-auto">
          <p className="text-7xl text-center">Jackson Michael</p>
          <p className="text-3xl text-center text-red-500 mt-4">Top G</p>
        </div>
      </div>
      <div className="h-[50vh] flex flex-col text-lg gap-2 mx-8">
        <p>
          I am a Web Developer and Artist working on beautiful projects all the
          time, and I am constantly looking for ways to make a million dollars.
        </p>
        <p>
          I've been a part of this industry for over two years and within those
          years, I've worked on many projects and each new project is an
          improvement on the last.
        </p>
        <p>
          My confusion came from I could be great at any thing, so the hard part
          was picking what to be great at. The great is All To Each, not Each To
          All.
        </p>
      </div>
    </div>
  );
};

export default About;
