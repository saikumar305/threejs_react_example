import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import { CustomButton } from "../components";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className=" max-h-8 max-w-md object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden" /> DO IT
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className=" flex flex-col gap-5"
            >
              <p className="font-normal text-gray-600 max-w-md ">
                Unleash your <strong>C.R.E.A.T.I.V.I.T.Y</strong>
              </p>
              <CustomButton
                type="filled"
                title="Customize it"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
