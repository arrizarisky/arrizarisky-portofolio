import Cart from "../assets/images/icons/cart.svg";
import Laptop from "../assets/images/icons/laptop.svg";
import Pen from "../assets/images/icons/pen.svg";
import Crown from "../assets/images/icons/crown.svg";

export const CategorySkill = () => {
  const categoryItems = [
    {
      head: "All I Can",
      desc: "Everything in One Place",
      icon: Cart,
    },
    {
      head: "Web Developer",
      desc: "Made a website best performance",
      icon: Laptop,
    },
    { head: "UI Designer", desc: "Build beautiful page", icon: Pen },
  ];

  return (
    <section
      id="Category"
      className="container max-w-[1130px] mx-auto mb-[102px] flex flex-col gap-8"
    >
      <h2 className="font-semibold text-3xl md:text-[32px]">Category</h2>
      <div className="grid grid-cols-1 sm:flex justify-between items-center gap-3.5">
        {categoryItems.map((item, idx) => (
          <a
            key={idx}
            href="#"
            className="group category-card w-full h-fit p-[1px] rounded-2xl bg-img-transparent hover:bg-img-purple-to-orange transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row p-[18px] rounded-2xl w-full bg-img-black-gradient group-active:bg-img-black transition-all duration-300">
              <div className="w-[58px] h-[58px] flex shrink-0 items-center justify-center mb-3">
                <img src={item.icon} alt={`${item.head} icon`} />
              </div>
              <div className="px-[6px] flex flex-col text-left">
                <p className="font-bold text-sm sm:text-lg text-white">{item.head}</p>
                <p className="text-xs sm:text-sm text-belibang-grey">{item.desc}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
