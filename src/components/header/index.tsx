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
      <div
        className="flex flex-row justify-between gap-x-4 p-5 pr-8"
        style={{
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <h5
            onClick={() => {
              window.location.href = "/";
            }}
            className="font-poppins text-sm font-semibold cursor-pointer"
          >
            dewansh
          </h5>
        </motion.div>
        <div className="flex flex-row gap-x-2">
          {links.map((link, index) => {
            const { title, path, onClick } = link;
            const isCurrentlyActive = window.location.pathname === path;
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
                  delay: 0.1 * (index + 1),
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
                  className={`font-poppins text-sm font-semibold cursor-pointer ${
                    isCurrentlyActive ? "underline underline-offset-2" : ""
                  }`}
                >
                  {title}
                </h5>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
