import React from "react";
import Project from "./Project";
import Translate from "@docusaurus/Translate";
const Projects = () => {
  const works = [
    {
      stack: ["Covid", "Mobile APP", "APIs"],
      description:
        "This is a Covid Resources app which goals to provide all essentail resources and services regarding COVID-19 at a single place. In this app we have listed the resources of different states of India and people who are in need can simply come and search in their locality and can contact them. Our app covid resources focuses on providing accurate data to the users.",
      title: "Covid Resources",
      github: "https://github.com/Abhi6722/covid_resources",
      url: "https://github.com/Abhi6722/covid_resources/blob/main/App/Covid_Resources.apk",
      image: "img/cr.png",
      index: 0,
    },

    {
      stack: ["Python", "Jupyter", "Restful API"],
      description:
        "The main function of the app is to recommend movies based on our interest. This application provides all the details of the requested movie such as overview, genre, release date, rating, runtime, top cast, reviews, recommended movies, etc.",
      title: "Machine Learning Prediction Model",
      github: "https://github.com/Abhi6722/Predictor",
      url: "https://still-coast-69612.herokuapp.com/",
      image: "img/ml.png",
      index: 1,
    },
    {
      stack: ["Tailwind CSS", "NextJs", "HTML"],
      description:
        "A Google clone built using NextJs and Tailwind CSS. You search for anything by entering the search query in the search bar. There after you can click on the link and visit the website.",
      title: "Toodle",
      github: "https://github.com/Abhi6722/toodle",
      url: "https://toodle-search.netlify.app",
      image: "img/toodle.png",
      index: 2,
    },
    {
      stack: ["GO", "TypeScript", "JavaScript"],
      description:
        "Toodle Meet is a set of Open Source projects which empower users to use and deploy video conferencing platforms with state-of-the-art video quality and features. Using Toodle Meet is straightforward, as it's browser based. Head over to toodlemeet.abhi6722.in and give it a try. It's anonymous, scalable and free to use. All browsers are supported!",
      title: "Toodle Meet",
      github: "https://github.com/Abhi6722/Toodle-Meet",
      url: "https://toodlemeet.abhi6722.in",
      image: "img/toodle-meet.png",
      index: 3,
    },
  ];
  return (
    <div className="projects">
      <h1 className="recent-projects">
        <Translate>Recent Projects</Translate>
      </h1>
      <div className="underline"></div>
      <div className="section-center projects-center">
        {works.map(
          ({ description, stack, title, github, url, image, index }) => (
            <Project
              stack={stack}
              key={index}
              description={description}
              title={title}
              url={url}
              github={github}
              image={image}
              index={index}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
