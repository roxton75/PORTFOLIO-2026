"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import styles from "./Work.module.css";

const experiences = [
  {
    number: "01",
    period: "JUL 2026 — OCT 2026",
    role: "React Native Developer",
    company: "Anix AI · Internship",

    points: [
      "Built cross-platform mobile experiences using React Native and Expo.",
      "Integrated REST APIs for application features and data handling.",
      "Contributed to product development and mobile user experiences.",
    ],

    skills: ["React Native", "Expo", "TypeScript", "REST APIs"],
  },
  {
    number: "02",
    period: "JAN 2024 — FEB 2024",
    role: "Game Artist",
    company: "Dnnovate Technologies · Apprenticeship",

    points: [
      "Created 3D assets for interactive game environments.",
      "Designed visual elements focused on game aesthetics.",
      "Contributed to visual storytelling and environment design.",
    ],

    skills: ["3D Assets", "Game Art", "Visual Design", "3D Environments"],
  },
  {
    number: "03",
    period: "JUL 2023 — SEP 2023",
    role: "Android Developer",
    company: "Mountreach Solution · Internship",

    points: [
      "Developed Android applications with a focus on usability.",
      "Worked on clean and intuitive mobile interfaces.",
      "Contributed to functional application experiences.",
    ],

    skills: ["Android Development", "UI Design", "Mobile Apps", "Usability"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Work() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="work" className={styles.work}>
      {/* Main Content Container */}
      <div className={styles.container}>
        {/* Section Heading */}
        <motion.div
          className={styles.sectionHeader}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
        >
          <div className={styles.headingTop}>
            <span className={styles.eyebrow}>EXPERIENCE / 2023 — 2026</span>

            <span className={styles.experienceCount}>
              03 SELECTED EXPERIENCES
            </span>
          </div>

          <div className={styles.headingBottom}>
            <h2 className={styles.heading}>
              Work Experience<span>.</span>
            </h2>

            <p className={styles.headingDescription}>
              A collection of roles, collaborations and experiences that have
              shaped my journey across design and development.
            </p>
          </div>
        </motion.div>

        {/* Experience List */}
        <motion.div
          className={styles.experienceList}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {experiences.map((experience) => (
            <motion.article
              key={experience.number}
              className={styles.experienceCard}
              variants={cardVariants}
            >
              {/* Experience Information */}
              <div className={styles.experienceInfo}>
                <div className={styles.cardMeta}>
                  <span className={styles.cardNumber}>{experience.number}</span>

                  <span className={styles.period}>{experience.period}</span>
                </div>

                <h3 className={styles.role}>{experience.role}</h3>

                <p className={styles.company}>{experience.company}</p>
              </div>

              {/* Experience Description */}
              {/* <div className={styles.experienceDetails}>
                <p className={styles.description}>{experience.description}</p>

                <div className={styles.cardFooter}>
                  <span className={styles.experienceType}>
                    {experience.type}
                  </span>

                  <span className={styles.cardArrow}>
                    <ArrowUpRight size={18} strokeWidth={1.7} />
                  </span>
                </div>
              </div> */}

              {/* Right: Black Information Panel */}
              <div className={styles.experienceDetails}>
                {/* Responsibilities */}
                <div className={styles.responsibilities}>
                  <span className={styles.detailsLabel}>WHAT I WORKED ON</span>

                  <ul className={styles.pointsList}>
                    {experience.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Skills Learned */}
                <div className={styles.skillsSection}>
                  <span className={styles.detailsLabel}>
                    SKILLS & TECHNOLOGIES
                  </span>

                  <div className={styles.skillsList}>
                    {experience.skills.map((skill) => (
                      <span className={styles.skillTag} key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Arrow */}
                <span className={styles.cardArrow}>
                  <ArrowUpRight size={18} strokeWidth={1.7} />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom Section Metadata */}
        <motion.div
          className={styles.sectionFooter}
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
        >
          <span>DESIGN · DEVELOPMENT · TECHNOLOGY</span>
          <span>END OF EXPERIENCE / 03</span>
        </motion.div>
      </div>
    </section>
  );
}
