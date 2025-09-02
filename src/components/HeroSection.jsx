import Phooto from "../assets/images/logos/logo2.png";

export const HeroSection = () => {
  return (
    <>
      <header
        id="hero"
        class="w-full pt-[74px] pb-[34px] bg-[url('assets/images/backgrounds/hero-image.png')] bg-cover bg-no-repeat bg-center relative z-0"
      >
        <div class="container max-w-[1130px] mx-auto flex flex-col items-center justify-center gap-[34px] z-10">
          <div class="relative flex flex-col gap-2 text-center w-fit mt-20 z-10">
            <h1 class="font-semibold sm:text-[60px] text-2xl leading-[130%] z-50">
              Muhammad Arriza Risky
            </h1>
            <p class="text-sm sm:text-lg text-belibang-grey text-justify">
              Programming Enthusiast | Web Developer | UI Designer
            </p>
            <div className="absolute -top-12 -right-3 z-20">
              <img src={Phooto} alt="" className="w-20 h-20" />
            </div>
          </div>
        </div>
        <div class="w-full h-full absolute top-0 bg-gradient-to-b from-belibang-black/70 to-belibang-black z-0"></div>
      </header>
    </>
  );
};
