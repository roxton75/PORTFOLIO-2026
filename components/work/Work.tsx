"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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

const AUTOPLAY_MS = 4500;

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

  // --- Mobile-only horizontal auto-swipe carousel ---
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const measure = () => setSlideWidth(el.clientWidth);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isMobile]);

  // Auto-advance only on mobile, paused on interaction / reduced motion.
  useEffect(() => {
    if (!isMobile || shouldReduceMotion || isPaused) return;

    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % experiences.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [isMobile, shouldReduceMotion, isPaused]);

  const goTo = useCallback((index: number) => {
    const count = experiences.length;
    setActiveIndex(((index % count) + count) % count);
  }, []);

  const handleDragEnd = useCallback(
    (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
      const threshold = slideWidth * 0.2;
      const swipedLeft =
        info.offset.x < -threshold || info.velocity.x < -450;
      const swipedRight =
        info.offset.x > threshold || info.velocity.x > 450;

      if (swipedLeft) goTo(activeIndex + 1);
      else if (swipedRight) goTo(activeIndex - 1);
      else goTo(activeIndex); // snap back
    },
    [activeIndex, goTo, slideWidth]
  );

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
                  rel="noreferrer"
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
            <div
              ref={viewportRef}
              className={`${styles.experienceList} ${
                isMobile ? styles.experienceListMobile : ""
              }`}
              onPointerEnter={() => setIsPaused(true)}
              onPointerLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              <motion.div
                className={styles.experienceTrack}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                animate={
                  isMobile
                    ? { x: -activeIndex * slideWidth }
                    : { x: 0 }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 220, damping: 30, mass: 0.9 }
                }
                drag={isMobile ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragEnd={handleDragEnd}
              >
                {experiences.map((experience, index) => (
                  <motion.div
                    key={experience.number}
                    className={styles.slide}
                    animate={{
                      opacity: isMobile && index !== activeIndex ? 0.35 : 1,
                      scale: isMobile && index !== activeIndex ? 0.94 : 1,
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.article
                      className={styles.experienceCard}
                      variants={cardVariants}
                    >
                      {/* Left: Experience Information */}
                      <div className={styles.experienceInfo}>
                        <div className={styles.cardMeta}>
                          <span className={styles.cardNumber}>
                            {experience.number}
                          </span>

                          <span className={styles.period}>
                            {experience.period}
                          </span>
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
                            {experience.points.map((point, pointIndex) => (
                              <li key={pointIndex}>{point}</li>
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
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Mobile carousel dots */}
            {isMobile && (
              <div className={styles.carouselDots} role="tablist">
                {experiences.map((experience, index) => (
                  <button
                    key={experience.number}
                    type="button"
                    role="tab"
                    aria-selected={index === activeIndex}
                    aria-label={`Go to ${experience.role}`}
                    className={`${styles.carouselDot} ${
                      index === activeIndex ? styles.carouselDotActive : ""
                    }`}
                    onClick={() => goTo(index)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
