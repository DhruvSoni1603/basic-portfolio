import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { EarthCanvas, StarsCanvas } from "./canvas";
import { textVariant, fadeIn, slideIn } from "../utils/motion";
import { log } from "three/webgpu";

const Contact = () => {
  const formRef = useRef();
  const [form, Setform] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setloading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    Setform({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);

    emailjs
      .send(
        "service_cpj9s9u",
        "template_yj6ydf1",
        {
          from_name: form.name,
          to_name: "Dhruv Soni",
          from_email: form.email,
          to_email: "ds.dhruvsoni1603@gmail.com",
          message: form.message,
        },
        "2oKUW3sBzR-t_udb1"
      )
      .then(
        () => {
          setloading(false);
          alert("Thank You. I will get back to you soon.");

          Setform({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setloading(false);
          console.log(error);
          alert("Oops! Something went wrong");
        }
      );
  };

  // Template Id: template_yj6ydf1
  // Service Id: service_cpj9s9u
  // Api Key : 2oKUW3sBzR-t_udb1

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name:</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email:</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message:</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Feel free to Share"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
