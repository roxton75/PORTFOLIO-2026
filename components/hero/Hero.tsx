"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { GithubLogo } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

import LightRays from "@/components/LightRays";
import HeroNavbar from "./HeroNavbar";
import styles from "./Hero.module.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [isResumePreviewOpen, setIsResumePreviewOpen] = useState(false);
  const resumeButtonRef = useRef<HTMLAnchorElement>(null);
  const suppressResumeFocusRef = useRef(false);

  useEffect(() => {
    if (!isResumePreviewOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsResumePreviewOpen(false);
        if (document.activeElement !== resumeButtonRef.current) {
          suppressResumeFocusRef.current = true;
          resumeButtonRef.current?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isResumePreviewOpen]);

  const openResumePreview = () => {
    if (suppressResumeFocusRef.current) {
      suppressResumeFocusRef.current = false;
      return;
    }

    if (window.matchMedia("(hover: hover) and (min-width: 769px)").matches) {
      setIsResumePreviewOpen(true);
    }
  };

  return (
    <>
      {/* Fixed Navigation */}
      <HeroNavbar />

      <section className={styles.hero} id="home" aria-labelledby="hero-title">
        {/* Background Layers */}
        <div className={styles.heroCanvas} />
        <div className={styles.satinPanel} />
        <div className={styles.satinFade} />
        <div className={styles.lightRaysLayer} aria-hidden="true">
          <LightRays
            raysOrigin="top-right"
            raysColor="#f4f1ed"
            raysSpeed={shouldReduceMotion ? 0 : 0.3}
            lightSpread={0.65}
            rayLength={2}
            rayDensity={1}
            intensity={0.8}
            opacity={0.45}
            followMouse={false}
            cursorShadow={true}
            clickPulse={true}
            maxDevicePixelRatio={1.5}
          />
        </div>

        {/* Availability Indicator */}
        <motion.div
          className={styles.availability}
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={
            shouldReduceMotion ? { duration: 0 } : { delay: 1.1, duration: 0.8 }
          }
        >
          <span className={styles.availabilityDot} />
          <span className={styles.availabilityDesktop}>
            AVAILABLE FOR FREELANCE AND PAID OPPRTUNITIES
          </span>
          <span className={styles.availabilityPhone}>
            <Image
              src="/img/avatar.webp"
              alt=""
              width={36}
              height={36}
              className={styles.availabilityAvatar}
            />
            <span className={styles.availabilityDetails}>
              <span className={styles.availabilityName}>rudrx75</span>
              <span className={styles.availabilityRole}>
                <span className={styles.availabilityDot} />
                AVAILABLE FOR WORK
              </span>
            </span>
          </span>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className={styles.heroContent}
          variants={containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className={styles.heroEyebrow}
          >
            <span className={styles.statusDot} />
            <span>INDEPENDENT DESIGNER & DEVELOPER</span>
            <span className={styles.eyebrowYear}>/ 2026</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={shouldReduceMotion ? undefined : itemVariants}>
            <h1 className={styles.heroHeading} id="hero-title">
              {/* Designing {""}
              <span>with</span>
              <br />
              intention */}
              PORTFOLIO
              <span className={styles.headingPeriod}>.</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={shouldReduceMotion ? undefined : itemVariants}
            className={styles.heroDescription}
          >
            I explore the intersection of product design, technology, and
            thoughtful digital experiences — turning complex ideas into
            intuitive products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className={styles.heroActions}
          >
            <div
              className={styles.resumeActionWrap}
              onMouseEnter={openResumePreview}
              onMouseLeave={() => setIsResumePreviewOpen(false)}
              onFocus={openResumePreview}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setIsResumePreviewOpen(false);
                }
              }}
            >
              <a
                ref={resumeButtonRef}
                href="https://drive.google.com/file/d/1Fbz9ZCJEGM30Yr1h4nRGE1uCFqMGJr0X/view?usp=sharing"
                className={`${styles.btnDark} ${styles.btnResume}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-haspopup="dialog"
                aria-expanded={isResumePreviewOpen}
                aria-controls="resume-preview-window"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M26.7075 10.2925L19.7075 3.2925C19.6146 3.19967 19.5042 3.12605 19.3829 3.07586C19.2615 3.02568 19.1314 2.9999 19 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V14C5 14.2652 5.10536 14.5196 5.29289 14.7071C5.48043 14.8946 5.73478 15 6 15C6.26522 15 6.51957 14.8946 6.70711 14.7071C6.89464 14.5196 7 14.2652 7 14V5H18V11C18 11.2652 18.1054 11.5196 18.2929 11.7071C18.4804 11.8946 18.7348 12 19 12H25V27H22C21.7348 27 21.4804 27.1054 21.2929 27.2929C21.1054 27.4804 21 27.7348 21 28C21 28.2652 21.1054 28.5196 21.2929 28.7071C21.4804 28.8946 21.7348 29 22 29H25C25.5304 29 26.0391 28.7893 26.4142 28.4142C26.7893 28.0391 27 27.5304 27 27V11C27.0001 10.8686 26.9743 10.7385 26.9241 10.6172C26.8739 10.4958 26.8003 10.3854 26.7075 10.2925ZM20 6.41375L23.5863 10H20V6.41375Z"
                    fill="currentColor"
                  />
                  <path
                    d="M17.9522 18.0017C18.0834 17.9952 18.2146 18.0147 18.3383 18.059C18.5878 18.1483 18.7917 18.333 18.9052 18.5725C19.0186 18.8121 19.0323 19.0869 18.9433 19.3365L16.4433 26.3365C16.374 26.5308 16.2462 26.699 16.0776 26.8178C15.909 26.9367 15.7077 27.0005 15.5014 27.0005C15.2951 27.0005 15.0938 26.9367 14.9252 26.8178C14.7566 26.699 14.6289 26.5308 14.5595 26.3365L12.0595 19.3365C12.0105 19.2118 11.9871 19.0786 11.9906 18.9446C11.9941 18.8107 12.0244 18.6789 12.0799 18.5569C12.1353 18.435 12.2147 18.3254 12.3133 18.2347C12.4119 18.144 12.5277 18.0741 12.6538 18.029C12.78 17.9839 12.9139 17.9647 13.0476 17.9724C13.1814 17.98 13.3122 18.0145 13.4324 18.0738C13.5525 18.133 13.6596 18.2158 13.7471 18.3171C13.8347 18.4185 13.901 18.5365 13.942 18.664L15.5008 23.0265L17.0595 18.664C17.1037 18.5403 17.1719 18.4265 17.2601 18.3291C17.3483 18.2318 17.4548 18.1527 17.5736 18.0965C17.6923 18.0404 17.821 18.0081 17.9522 18.0017Z"
                    fill="currentColor"
                  />
                  <path
                    d="M8 25C6.8975 25 6 23.875 6 22.5C6 21.125 6.8975 20 8 20C8.24131 20.0054 8.47899 20.0598 8.69861 20.16C8.91822 20.2601 9.11518 20.4039 9.2775 20.5825C9.46174 20.7702 9.71248 20.8777 9.97543 20.8818C10.2384 20.8859 10.4924 20.7863 10.6824 20.6045C10.8724 20.4227 10.9831 20.1733 10.9907 19.9105C10.9982 19.6476 10.9018 19.3924 10.7225 19.2C10.3743 18.8252 9.95323 18.5254 9.48508 18.3191C9.01694 18.1127 8.51159 18.0041 8 18C5.79375 18 4 20.0187 4 22.5C4 24.9812 5.79375 27 8 27C8.51159 26.9959 9.01694 26.8873 9.48508 26.6809C9.95323 26.4746 10.3743 26.1748 10.7225 25.8C10.9018 25.6076 10.9982 25.3524 10.9907 25.0895C10.9831 24.8267 10.8724 24.5773 10.6824 24.3955C10.4924 24.2137 10.2384 24.1141 9.97543 24.1182C9.71248 24.1223 9.46174 24.2298 9.2775 24.4175C9.11518 24.5961 8.91861 24.7399 8.69861 24.84C8.47899 24.9402 8.24131 24.9946 8 25Z"
                    fill="currentColor"
                  />
                </svg>
                View Resume
              </a>

              <AnimatePresence>
                {isResumePreviewOpen && (
                  <motion.div
                    className={styles.resumePreviewBackdrop}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
                  >
                    <motion.section
                      id="resume-preview-window"
                      role="dialog"
                      aria-label="Resume preview"
                      className={styles.resumePreviewWindow}
                      initial={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { opacity: 0, scale: 0.88, y: 28 }
                      }
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { opacity: 0, scale: 0.94, y: 16 }
                      }
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.32,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <header className={styles.resumePreviewTitlebar}>
                        <div
                          className={styles.resumePreviewTrafficLights}
                          aria-hidden="true"
                        >
                          <span />
                          <span />
                          <span />
                        </div>
                        <span>Rudrx — Resume</span>
                        <span aria-hidden="true" />
                      </header>
                      <div className={styles.resumePreviewImage}>
                        <Image
                          src="/img/resume-preview.webp"
                          alt="Preview of Rudrx's resume"
                          width={1000}
                          height={1414}
                          sizes="(max-width: 768px) 0px, 360px"
                        />
                      </div>
                    </motion.section>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="https://github.com/roxton75"
              className={`${styles.btnSecondary} ${styles.btnGithub}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo size={18} weight="regular" />
              GitHub
            </a>
          </motion.div>

          {/* Skills / Metadata */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className={styles.heroBottomMeta}
          >
            <span>PRODUCT DESIGN</span>
            <span>DEVELOPMENT</span>
            <span>CREATIVE TECHNOLOGY</span>
          </motion.div>
        </motion.div>

        {/* Dot Matrix Portrait */}
        <motion.div
          className={styles.heroPortrait}
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.96,
                  x: 30,
                }
          }
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: 1.4,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }
          }
        >
          <Image
            src="/main.webp"
            alt="Monochrome dot matrix portrait"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 65vw"
            className={styles.portraitImage}
          />
        </motion.div>

        {/* Portrait Editorial Marker */}
        <motion.div
          className={styles.portraitMarker}
          initial={shouldReduceMotion ? false : { opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  delay: 1.4,
                  duration: 0.8,
                }
          }
        >
          <span className={styles.markerLine} />
          <span>DESIGN</span>
          <span>ENGINEERING</span>
          <span>EXPERIENCE</span>
        </motion.div>

        {/* Coordinates */}
        <motion.div
          className={styles.heroCoordinates}
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  delay: 1.5,
                  duration: 1,
                }
          }
        >
          <span>21°08&apos;N</span>
          <span>77°04&apos;E</span>
          <div className={styles.coordinateLine} />
        </motion.div>

        {/* Hero Index */}
        <motion.div
          className={styles.heroIndex}
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={shouldReduceMotion ? { duration: 0 } : { delay: 1.7 }}
        >
          <span>01 — 04</span>
          <span>SWISS MATRIX / DESIGN DIRECTION</span>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#work"
          className={styles.heroScroll}
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={shouldReduceMotion ? { duration: 0 } : { delay: 1.8 }}
        >
          <ArrowDown size={14} />
          <span>SCROLL TO EXPLORE</span>
        </motion.a>
      </section>
    </>
  );
}
