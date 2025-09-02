import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-accent-foreground py-12 px-4 relative border-t border-belibang-dark-grey mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Arrizarisky. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-belibang-darker-grey hover:bg-belibang-darker-grey/20 text-text-belibang-light-grey transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
