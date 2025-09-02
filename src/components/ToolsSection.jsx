import ReactIcon from "../assets/images/logos/react JS.svg";
import LaravelIcon from "../assets/images/logos/Laravel.svg";
import GolangIcon from "../assets/images/logos/golang.svg";
import FlutterIcon from "../assets/images/logos/flutter.svg";
import VueIcon from "../assets/images/logos/Vue.svg";
import BlenderIcon from "../assets/images/logos/blender.svg";
import ExcelIcon from "../assets/images/logos/Excel.svg";
import FBIcon from "../assets/images/logos/facebook.svg";

export const ToolsSection = () => {
  const tools = [
    { name: "React", icon: [ReactIcon], desc: "Front End Development" },
    { name: "Laravel", icon: [LaravelIcon], desc: "Back End Development" },
    { name: "Golang", icon: [GolangIcon], desc: "Back End Development" },
    { name: "Flutter", icon: [FlutterIcon], desc: "Mobile Development" },
    { name: "Vue", icon: [VueIcon], desc: "Front End Development" },
    { name: "Blender", icon: [BlenderIcon], desc: "3D Modeling" },
    { name: "Excel", icon: [ExcelIcon], desc: "Data Analysis" },
    { name: "Facebook", icon: [FBIcon], desc: "Scroll ditengah ngoding" },
  ];
  return (
    <>
      <section id="Tool" class="mb-[102px] flex flex-col gap-8">
        <div class="container max-w-[1130px] mx-auto flex justify-between items-center">
          <h2 class="font-semibold text-[32px]">Browse Tools</h2>
        </div>
        <div class="tools-logos w-full overflow-hidden flex flex-col gap-5">
          <div class="group/slider flex flex-nowrap w-max items-center">
            <div class="logo-container animate-[slide_50s_linear_infinite] group-hover/slider:pause-animate flex gap-5 pl-5 items-center flex-nowrap">
              {tools.map((tool) => (
                <a
                  href=""
                  class="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
                >
                  <div class="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                    <div class="w-16 h-16 overflow-hidden flex shrink-0">
                      <img
                        src={tool.icon}
                        class="w-full h-full object-contain"
                        alt="logo"
                      />
                    </div>
                    <div class="flex flex-col justify-center gap-1">
                      <p class="font-bold text-lg">{tool.name}</p>
                      <p class="font-semibold text-xs leading-[170%] text-belibang-grey">
                        {tool.desc}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div class="logo-container animate-[slide_50s_linear_infinite] group-hover/slider:pause-animate flex gap-5 pl-5 items-center flex-nowrap">
              {tools.map((tool) => (
                <a
                  href=""
                  class="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
                >
                  <div class="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                    <div class="w-16 h-16 overflow-hidden flex shrink-0">
                      <img
                        src={tool.icon}
                        class="w-full h-full object-contain"
                        alt="logo"
                      />
                    </div>
                    <div class="flex flex-col justify-center gap-1">
                      <p class="font-bold text-lg">{tool.name}</p>
                      <p class="font-semibold text-xs leading-[170%] text-belibang-grey">
                        {tool.desc}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div class="group/slider flex flex-nowrap w-max items-center">
            <div class="logo-container animate-[slideToR_50s_linear_infinite] group-hover/slider:pause-animate flex gap-5 pl-5 items-center flex-nowrap">
              {tools.map((tool) => (
                <a
                  href=""
                  class="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
                >
                  <div class="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                    <div class="w-16 h-16 overflow-hidden flex shrink-0">
                      <img
                        src={tool.icon}
                        class="w-full h-full object-contain"
                        alt="logo"
                      />
                    </div>
                    <div class="flex flex-col justify-center gap-1">
                      <p class="font-bold text-lg">{tool.name}</p>
                      <p class="font-semibold text-xs leading-[170%] text-belibang-grey">
                        {tool.desc}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div class="logo-container animate-[slideToR_50s_linear_infinite] group-hover/slider:pause-animate flex gap-5 pl-5 items-center flex-nowrap">
              {tools.map((tool) => (
                <a
                  href=""
                  class="group tool-card w-fit h-fit p-[1px] rounded-full bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
                >
                  <div class="w-[300px] h-[100px] rounded-full p-[18px_24px] bg-img-black-gradient group-hover:[background-image:linear-gradient(#181818,#181818)] group-active:bg-img-black transition-all duration-300 flex gap-4 items-center shrink-0">
                    <div class="w-16 h-16 overflow-hidden flex shrink-0">
                      <img
                        src={tool.icon}
                        class="w-full h-full object-contain"
                        alt="logo"
                      />
                    </div>
                    <div class="flex flex-col justify-center gap-1">
                      <p class="font-bold text-lg">{tool.name}</p>
                      <p class="font-semibold text-xs leading-[170%] text-belibang-grey">
                        {tool.desc}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
