"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

import styles from "./Work.module.css";

const experiences = [
  {
    role: "React Native Developer",
    company: "Anix AI · Internship",
    period: "JUL 2026 — OCT 2026",
    number: "01",
    description:
      "Building cross-platform mobile experiences and contributing to product development.",
  },
  {
    role: "Game Artist",
    company: "Innovate Technologies · Apprenticeship",
    period: "JAN 2024 — FEB 2024",
    number: "02",
    description:
      "Creating 3D assets, visual elements and interactive game environments.",
  },
  {
    role: "Android Developer",
    company: "Mountrach Solution · Internship",
    period: "JUL 2023 — SEP 2023",
    number: "03",
    description:
      "Developing Android applications with a focus on clean interfaces and usability.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Work() {
  const shouldReduceMotion = useReducedMotion();
  const [activeExperience, setActiveExperience] = useState(0);

  const currentExperience = experiences[activeExperience];

  const changeExperience = () => {
    setActiveExperience((current) => (current + 1) % experiences.length);
  };

  return (
    <section id="work" className={styles.work}>
      <div className={styles.backgroundGrid} />

      {/* Profile */}
      <motion.div
        className={styles.profileBlock}
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={shouldReduceMotion ? { duration: 0 } : undefined}
      >
        <div className={styles.profileImage}>
          <Image
            src="/img/pfp.webp"
            alt="Portrait of Rudraksh Ramekar"
            fill
            priority
            sizes="(max-width: 599px) 42vw, 21vw"
            className={styles.profilePhoto}
          />
        </div>

        <div className={styles.profileCaption}>
          <span>RUDRAKSH RAMEKAR</span>
          <span>DESIGN / DEVELOPMENT</span>
        </div>
      </motion.div>

      {/* Experience Intro */}
      <motion.div
        className={`${styles.infoBlock} ${styles.experienceIntro}`}
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className={styles.infoHeading}>EXPERIENCE</span>
        <p>
          Building digital products
          <br />
          through design and
          <br />
          development.
        </p>
        <span className={styles.accentLine} />
      </motion.div>

      {/* Education Intro */}
      <motion.div
        className={`${styles.infoBlock} ${styles.educationIntro}`}
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: shouldReduceMotion ? 0 : 0.12 }}
      >
        <span className={styles.infoHeading}>EDUCATION</span>
        <p>
          B.E. CSE (Data Science)
          <br />
          SGBAU — 2024 — 2027
        </p>
        <span className={styles.accentLine} />
      </motion.div>

      {/* Editorial Label */}
      <motion.div
        className={styles.verticalLabel}
        initial={shouldReduceMotion ? false : { opacity: 0, x: 15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
      >
        <span />
        <p>
          FEATURED
          <br />
          EXPERIENCE
          <br />& EDUCATION
        </p>
      </motion.div>

      {/* Vertical Work Label */}
      <motion.div
        className={styles.sideLabel}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.8,
          delay: shouldReduceMotion ? 0 : 0.2,
        }}
      >
        WORK<span className={styles.workDot}>.</span>
      </motion.div>

      {/* Experience Card */}
      <motion.div
        className={styles.experienceCard}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                duration: 1,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }
        }
      >
        <div className={styles.cardContent}>
          <span className={styles.cardNumber}>
            {currentExperience.number} / 03
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentExperience.number}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
            >
              <h2 className={styles.roleTitle}>{currentExperience.role}</h2>

              <p className={styles.company}>{currentExperience.company}</p>

              <p className={styles.period}>{currentExperience.period}</p>

              <p className={styles.description}>
                {currentExperience.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Experience Navigation */}
        <div className={styles.cardNavigation}>
          <button
            type="button"
            className={styles.nextButton}
            onClick={changeExperience}
            aria-label="Next experience"
          >
            <ArrowRight size={28} strokeWidth={1.6} />
          </button>

          <div className={styles.pagination}>
            {experiences.map((experience, index) => (
              <button
                key={experience.number}
                type="button"
                className={`${styles.paginationDot} ${
                  activeExperience === index ? styles.activeDot : ""
                }`}
                onClick={() => setActiveExperience(index)}
                aria-label={`Show experience ${index + 1}`}
                aria-current={activeExperience === index ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
