import { Briefcase, Code, User } from "lucide-react";
export const AboutSection = () => {
  return (
    <>
      <section
        id="about"
        className="container max-w-[1130px] mx-auto mb-[102px] flex flex-col gap-8"
      >
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-purple-500"> Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-sm sm:text-2xl font-semibold">
                Passionate Web Developer & UI Design
              </h3>

              <p className="text-muted-foreground text-sm sm:text-lg text-justify">
                Hello! I'm Arriza, a passionate web developer and UI designer
                with a knack for creating beautiful and functional websites.
                With a strong foundation in both front-end and back-end
                development, I strive to deliver seamless user experiences
                through clean code and innovative design.
              </p>

              <p className="text-muted-foreground text-sm sm:text-lg text-justify">
                When I'm not coding, you can find me exploring the latest design
                trends or experimenting with new technologies to enhance my
                skills. Let's build something amazing together!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a
                  href="#contact"
                  className="px-3 py-2 rounded-full bg-img-black-gradient inset-shadow-sm inset-shadow-white/10 text-white hover:bg-primary/90 transition-colors duration-300"
                >
                  {" "}
                  Get In Touch
                </a>

                <a
                  href="/file/cvmuhammadarrizarisky.pdf"
                  className="px-6 py-2 rounded-full border border-[#414141] text-white hover:bg-primary/10 transition-colors duration-300"
                  download="cvmuhammadarrizarisky.pdf"
                >
                  Download CV
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-12">
              <div className="group category-card w-full h-fit p-[1px] rounded-2xl bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300">
                <div className="bg-img-black-gradient rounded-2xl p-6">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="p-3 rounded-full bg-purple-500/10">
                      <Code className="h-6 w-6 text-purple-500" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg">
                        {" "}
                        Web Development
                      </h4>
                      <p className="text-muted-foreground">
                        Creating responsive websites and web applications with
                        modern frameworks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group category-card w-full h-fit p-[1px] rounded-2xl bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300">
                <div className="bg-img-black-gradient p-6 rounded-2xl">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="p-3 rounded-full bg-purple-500/10">
                      <User className="h-6 w-6 text-purple-500" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg">UI/UX Design</h4>
                      <p className="text-muted-foreground">
                        Designing intuitive user interfaces and seamless user
                        experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
