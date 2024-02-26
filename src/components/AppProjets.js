import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const AppProjets = (props) => {
  return (
    <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mt-10" style={{backgroundColor: "black"}}>
              <video
                className="w-96 h-auto max-h-96"
                src={props.video}
                controls="true"
                muted="true"
                alt=""
              />
            </div>
          </motion.div>
  );
};

export default AppProjets;