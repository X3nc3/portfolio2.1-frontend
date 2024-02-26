import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const projets = (props) => {
  return (
    <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <a href={props.lien} target="_blank" rel="noopener noreferrer">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={props.image}
                alt=""
              />
              <div className="flex-1 flex flex-col  absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50 lg:group-hover:bottom-5">
                <span className="hidden sm:block text-white font-bold text-[35px]">
                  {props.name}
                </span>
                <span className="hidden sm:block text-white text-[13px] lg:text-[16px]">
                  {props.content}
                </span>
              </div>
            </div>
            </a>
          </motion.div>
  );
};

export default projets;