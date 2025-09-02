import React, { useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import Thumbnail from "../assets/images/thumbnails/img1.png";
import Github from "../assets/images/logos/react JS.svg";
import Prev from "../assets/images/icons/circle-arrow-r.svg";
import Next from "../assets/images/icons/circle-arrow-r.svg";

export const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "SaaS Landing Page",
      description: "A beautiful landing page app using React and Tailwind.",
      image: [Thumbnail],
      tags: ["React", "TailwindCSS", "Supabase"],
      demoUrl: "#",
      githubUrl: "github.com/arrizarisky/",
    },
    {
      id: 1,
      title: "SaaS Landing Page",
      description: "A beautiful landing page app using React and Tailwind.",
      image: [Thumbnail],
      tags: ["React", "TailwindCSS", "Supabase"],
      demoUrl: "#",
      githubUrl: "github.com/arrizarisky/",
    },
    {
      id: 1,
      title: "SaaS Landing Page",
      description: "A beautiful landing page app using React and Tailwind.",
      image: [Thumbnail],
      tags: ["React", "TailwindCSS", "Supabase"],
      demoUrl: "#",
      githubUrl: "github.com/arrizarisky/",
    },
    {
      id: 1,
      title: "SaaS Landing Page",
      description: "A beautiful landing page app using React and Tailwind.",
      image: [Thumbnail],
      tags: ["React", "TailwindCSS", "Supabase"],
      demoUrl: "#",
      githubUrl: "github.com/arrizarisky/",
    },
    {
      id: 1,
      title: "SaaS Landing Page",
      description: "A beautiful landing page app using React and Tailwind.",
      image: [Thumbnail],
      tags: ["React", "TailwindCSS", "Supabase"],
      demoUrl: "#",
      githubUrl: "github.com/arrizarisky/",
    },
    {
      id: 1,
      title: "SaaS Landing Page",
      description: "A beautiful landing page app using React and Tailwind.",
      image: [Thumbnail],
      tags: ["React", "TailwindCSS", "Supabase"],
      demoUrl: "#",
      githubUrl: "github.com/arrizarisky/",
    },
  ];

  const carouselRef = useRef(null);
  const flktyRef = useRef(null);

  useEffect(() => {
    flktyRef.current = new Flickity(carouselRef.current, {
      cellAlign: "left",
      contain: true,
      pageDots: false,
      prevNextButtons: false,
    });
  }, []);

  const prev = () => {
    flktyRef.current.previous(true);
  };
  const next = () => {
    flktyRef.current.next(true);
  };

  return (
    <>
      <section
        id="NewProduct"
        class="container max-w-[1130px] mx-auto mb-[102px] flex flex-col gap-8"
      >
        <div className="container max-w-[1130px] mx-auto flex justify-between items-center">
          <h2 class="font-semibold text-[32px]">Projects</h2>
          <div class="flex gap-[14px] items-center">
            <button
              class="btn-prev w-10 h-10 shrink-0 rounded-full overflow-hidden rotate-180"
              onClick={prev}
            >
              <img src={Prev} alt="icon" />
            </button>
            <button
              class="btn-next w-10 h-10 shrink-0 rounded-full overflow-hidden"
              onClick={next}
            >
              <img src={Next} alt="icon" />
            </button>
          </div>
        </div>

        <div className="project-carousel" ref={carouselRef}>
          {projects.map((project, key) => (
            <div
              class="carousel-cell project-card flex flex-col rounded-[18px] bg-[#181818] overflow-hidden mr-3"
              key={key}
            >
              <a
                href={project.demoUrl}
                class="thumbnail w-full h-[180px] flex shrink-0 overflow-hidden relative"
              >
                <img
                  src={project.image}
                  class="w-full h-full object-cover"
                  alt="thumbnail"
                />
              </a>
              <div class="p-[10px_14px_12px] h-full flex flex-col justify-between gap-[14px]">
                <div class="flex flex-col gap-1">
                  <a
                    href="details.html"
                    class="font-semibold line-clamp-2 hover:line-clamp-none"
                  >
                    {project.title}
                  </a>

                  {project.tags.map((tag) => (
                    <p class="flex bg-[#2A2A2A] font-semibold text-xs text-belibang-grey rounded-[4px] p-[4px_6px] w-fit">
                      {tag}
                    </p>
                  ))}
                </div>
                <div class="flex items-center gap-[6px]">
                  <div class="w-6 h-6 flex shrink-0 items-center justify-center rounded-full overflow-hidden">
                    <img
                      src={Github}
                      class="w-full h-full object-cover"
                      alt="logo"
                    />
                  </div>
                  <a
                    href={project.githubUrl}
                    class="font-semibold text-xs text-belibang-grey"
                  >
                    {project.githubUrl}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
