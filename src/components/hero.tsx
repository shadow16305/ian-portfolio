import { useRef } from "react";
import bomb from "../assets/icons/bomb.svg";
import hero_img from "../assets/images/hero-img.png";
import { motion, useInView } from "motion/react";
import { cn } from "../lib/utils";

export const Hero = () => {
  const text = "Toronto based documentary cinematographer";

  const splittedText = text.split(" ");

  const pullupVariant = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="bg-[url('../src/assets/images/hero-mobile.jpg')] lg:bg-[url('../src/assets/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat pt-72 md:py-44 lg:pt-0 lg:h-screen flex items-end md:items-center relative pb-20 lg:pb-0">
      <div className="w-10/12 3xl:max-w-[1560px] mx-auto text-white z-10 relative flex flex-col items-center md:items-start">
        <div className="flex flex-wrap justify-center md:justify-start max-w-[580px] lg:max-w-[680px] z-10 relative">
          {splittedText.map((current, i) => (
            <motion.h1
              key={i}
              ref={ref}
              variants={pullupVariant}
              initial="initial"
              animate={isInView ? "animate" : ""}
              custom={i}
              className={cn(
                "font-['Syne'] font-bold text-4xl 3xl:text-7xl text-center md:text-start lg:text-[4.4rem] max-w-[900px] leading-[116%] pr-3",
                current === "documentary" && "text-lime-200"
              )}
            >
              {current == "" ? <span>&nbsp;</span> : current}
            </motion.h1>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-['Montserrat'] text-base max-w-[420px] lg:max-w-[465px] mt-4 text-center md:text-start z-10 relative 3xl:text-lg"
        >
          Hey! My name is Ian. Take a look at some of my recent work bellow, and
          call if you'd like to connect or{" "}
          <a href="#contact" className="font-bold">
            fill out this forum.
          </a>
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          href="tel:+16472275559"
          className="font-['Syne'] font-bold text-sm 3xl:text-lg flex items-center mx-auto md:mx-0 gap-x-4 bg-white py-5 px-11 text-black w-fit mt-6 relative group"
        >
          <span className="z-10">+1 (647) 227 - 5559</span>
          <img src={bomb} alt="call phone number" className="z-10" />
          <div className="w-0 h-full bg-lime-200 absolute top-0 left-0 transition-all group-hover:w-full duration-300" />
        </motion.a>
        <div className="absolute md:hidden -top-1/2 -z-10">
          <img src={hero_img} alt="hero image" className="object-cover" />
        </div>
      </div>
      <motion.div
        initial={{ skewX: -3 }}
        whileInView={{ skewX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-[30%] md:left-[45%] lg:top-[20%] lg:left-[40%] w-[390px] lg:w-[660px] lg:h-[400px] xl:w-[780px] xl:h-[500px] 3xl:w-[900px] 3xl:h-[600px] hidden md:block"
      >
        <img
          src={hero_img}
          alt="hero image"
          className="object-cover absolute"
        />
      </motion.div>
    </section>
  );
};
