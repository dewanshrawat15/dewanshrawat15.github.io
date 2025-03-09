import { motion } from "motion/react";

const links: { title: string; path?: string; onClick?: VoidFunction }[] = [
  {
    title: "Experience",
    path: "/experience",
  },
  {
    title: "Projects",
    path: "/projects",
  },
];

export const Header = () => {
  return (
    <div id="header">
      <div className="flex flex-row justify-end gap-x-4 p-5 pr-8">
        {links.map((link, index) => {
          const { title, path, onClick } = link;
          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
                delay: 0.1 * index,
              }}
            >
              <h5
                onClick={() => {
                  if (path) {
                    window.location.href = path;
                  } else {
                    onClick?.();
                  }
                }}
                className="font-poppins text-sm font-semibold cursor-pointer"
              >
                {title}
              </h5>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
