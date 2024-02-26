import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const LastWork = (props) => {
  return (
    <motion.div
      variants={fadeIn("right", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
    >
      {/* text */}
      <div>
        <h2 className="h2 leading-tight text-accent">
          Mon dernier <br />
          travail.
        </h2>
        <p>{props.content}</p>
      </div>
      {/* image */}
      <a href={props.lien} target="_blank" rel="noopener noreferrer">
        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
          <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
          <img
            className="group-hover:scale-125 transition-all duration-500"
            src={props.image}
            alt=""
          />
          <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
            <span className="text-3x1 text-white font-bold text-[35px]">
              {props.name}
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default LastWork;
