import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import {
  languages,
  frameworks,
  versioncontrols,
  experiences,
} from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-[-30]">
        <h2 className={`${styles.sectionHeadText} mt-[-10]`}>My Skills</h2>
        <p className={styles.sectionSubText}>technical skills</p>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-5">
        {languages.map((technology) => (
          <div className="sm:w-20 sm:h-20 w-8 h-8" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      <motion.div variants={textVariant()} className="mt-10">
        <p className={styles.sectionSubText}>Library / frameworks</p>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-5">
        {frameworks.map((technology) => (
          <div className="sm:w-20 sm:h-20 w-8 h-8" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      <motion.div variants={textVariant()} className="mt-10">
        <p className={styles.sectionSubText}>Version Control</p>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-5">
        {versioncontrols.map((technology) => (
          <div className="sm:w-20 sm:h-20 w-8 h-8" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech);
