"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaSpotify,
} from "react-icons/fa";

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

const stats = [
  { value: "03", label: "EXPERIENCES" },
  { value: "02", label: "INTERNSHIPS" },
  { value: "04+", label: "YEARS LEARNING" },
  { value: "2027", label: "GRADUATION" },
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
      {/* Main Container */}
      <div className={styles.container}>
        {/* Section Heading */}
        <motion.div
          className={styles.sectionHeading}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
        >
          <h2 className={styles.heading}>
            Work Experience<span>.</span>
          </h2>

          <p className={styles.headingDescription}>
            A collection of roles, collaborations and experiences that have
            shaped my journey across design and development.
          </p>
        </motion.div>

        {/* Main 30:70 Layout */}
        <div className={styles.workLayout}>
          {/* =================================
              LEFT: UNIFIED PROFILE CARD
          ================================= */}

          <motion.aside
            className={styles.profileCard}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
          >
            {/* Profile Image with Inner Padding */}
            <div className={styles.profileImage}>
              <Image
                src="/img/pfp.webp"
                alt="Portrait of rudrx"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 30vw"
                className={styles.profilePhoto}
              />
            </div>

            {/* Profile Identity */}
            <div className={styles.profileIdentity}>
              <h3>Rudraksh K. Ramekar</h3>
              <p>Software Developer & Product Designer </p>
            </div>

            {/* Divider */}
            <div className={styles.profileDivider} />

            {/* Social Links */}
            <div className={styles.socialSection}>
              <span className={styles.profileLabel}>FIND ME ONLINE</span>

              <div className={styles.socialLinks}>
                <a
                  href="https://github.com/roxton75"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className={styles.githubLink}
                >
                  <FaGithub size={17} />
                </a>

                <a
                  href="https://linkedin.com/in/rudrx75"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className={styles.linkedinLink}
                >
                  <FaLinkedin size={17} />
                </a>

                <a
                  href="https://instagram.com/rudrx_75"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className={styles.instagramLink}
                >
                  <FaInstagram size={17} />
                </a>

                <a
                  href="https://open.spotify.com/user/84vsihgp4t0zm8oa0peg65ifa?si=49d27c9b90634984"
                  target="_blank"
                  aria-label="Spotify"
                  className={styles.socialLink}
                >
                  <FaSpotify size={17} />
                </a>

                <a
                  href="mailto:workrudrx75@gmail.com"
                  aria-label="Email"
                  className={styles.emailLink}
                >
                  <FaEnvelope size={16} />
                </a>
              </div>
            </div>
            <div className={styles.profileDivider} />

            {/* Education */}
            <div className={styles.profileInfoGroup}>
              <span className={styles.profileLabel}>EDUCATION</span>

              <div className={styles.educationItem}>
                <span className={styles.educationBullet}>—</span>
                <span className={styles.educationDegree}>
                  Diploma Computer Engineering
                </span>
                <span className={styles.educationMeta}>MSBTE | 2024</span>
              </div>

              <div className={styles.educationItem}>
                <span className={styles.educationBullet}>—</span>
                <span className={styles.educationDegree}>
                  B.E. CSE (Data Science)
                </span>
                <span className={styles.educationMeta}>SGBAU | 2027</span>
              </div>
            </div>

            {/* Stats - Fills Remaining Space */}
            <div className={styles.profileStats}>
              {stats.map((stat) => (
                <div className={styles.statItem} key={stat.label}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.aside>

          {/* =================================
              RIGHT: EXPERIENCE COLUMN
          ================================= */}

          <div className={styles.experienceColumn}>
            <motion.div
              className={styles.experienceList}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {experiences.map((experience) => (
                <motion.article
                  key={experience.number}
                  className={styles.experienceCard}
                  variants={cardVariants}
                >
                  {/* Left: Experience Information */}
                  <div className={styles.experienceInfo}>
                    <div className={styles.cardMeta}>
                      <span className={styles.cardNumber}>
                        {experience.number}
                      </span>

                      <span className={styles.period}>{experience.period}</span>
                    </div>

                    <h3 className={styles.role}>{experience.role}</h3>

                    <p className={styles.company}>{experience.company}</p>
                  </div>

                  {/* Right: Black Information Panel */}
                  <div className={styles.experienceDetails}>
                    {/* Responsibilities */}
                    <div className={styles.responsibilities}>
                      <span className={styles.detailsLabel}>
                        WHAT I WORKED ON
                      </span>

                      <ul className={styles.pointsList}>
                        {experience.points.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills and Technologies */}
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
          </div>
        </div>
      </div>
    </section>
  );
}
