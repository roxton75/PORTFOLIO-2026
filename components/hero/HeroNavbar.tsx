"use client";

import { motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  House,
  BriefcaseBusiness,
  Lightbulb,
  Layers3,
  Mail,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import styles from "./HeroNavbar.module.css";

const links = [
  {
    label: "Work",
    href: "#work",
    icon: BriefcaseBusiness,
  },
  {
    label: "Projects",
    href: "#projects",
    icon: Lightbulb,
  },
  {
    label: "MISC",
    href: "#misc",
    icon: Layers3,
  },
];

const homeLink = {
  label: "Home",
  href: "#home",
};

const contactLink = {
  label: "Contact",
  href: "mailto:workrudrx75@gmail.com",
};

const phoneLinks = [
  { label: "HOME", href: "#home" },
  { label: "WORK", href: "#work" },
  { label: "PROJECTS", href: "#projects" },
  { label: "MISC", href: "#misc" },
];

export default function HeroNavbar() {
  const shouldReduceMotion = useReducedMotion();
  const [isPhoneDrawerOpen, setIsPhoneDrawerOpen] = useState(false);
  const [isPhoneDrawerMounted, setIsPhoneDrawerMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [isPastHero, setIsPastHero] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateActiveSection = () => {
      setActiveSection(window.location.hash || "#home");
    };

    updateActiveSection();
    window.addEventListener("hashchange", updateActiveSection);
    return () => window.removeEventListener("hashchange", updateActiveSection);
  }, []);

  useEffect(() => {
    const updateNavbarSurface = () => {
      const hero = document.getElementById("home");
      setIsPastHero(Boolean(hero && hero.getBoundingClientRect().bottom <= 0));
    };

    updateNavbarSurface();
    window.addEventListener("scroll", updateNavbarSurface, { passive: true });
    window.addEventListener("resize", updateNavbarSurface);

    return () => {
      window.removeEventListener("scroll", updateNavbarSurface);
      window.removeEventListener("resize", updateNavbarSurface);
    };
  }, []);

  const closePhoneDrawer = useCallback(() => {
    setIsPhoneDrawerOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  const openPhoneDrawer = useCallback(() => {
    setIsPhoneDrawerMounted(true);
    setIsPhoneDrawerOpen(true);
  }, []);

  useEffect(() => {
    if (!isPhoneDrawerOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePhoneDrawer();
        return;
      }

      if (event.key !== "Tab") return;
      const drawer = document.getElementById("phone-navigation-drawer");
      const focusableElements = drawer?.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      if (!focusableElements?.length) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closePhoneDrawer, isPhoneDrawerOpen]);

  return (
    <>
      {/* Separate Desktop Home Button */}
      <motion.a
        href={homeLink.href}
        className={`${styles.homeButton} ${isPastHero ? styles.scrolled : ""}`}
        aria-label="Home"
        initial={shouldReduceMotion ? false : { opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                duration: 0.8,
                delay: 0.8,
              }
        }
      >
        <House size={16} strokeWidth={1.7} />
        <span>{homeLink.label}</span>
      </motion.a>

      {/* Main Navigation */}
      <motion.nav
        initial={shouldReduceMotion ? false : { opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                duration: 0.8,
                delay: 0.8,
              }
        }
        className={`${styles.heroNav} ${isPastHero ? styles.scrolled : ""}`}
        aria-label="Main navigation"
      >
        {/* Mobile Home */}
        <a
          href={homeLink.href}
          className={`${styles.navItem} ${styles.mobileHome}`}
          aria-label="Home"
        >
          <House size={18} strokeWidth={1.7} />
          <span>Home</span>
        </a>

        {/* Navigation Links */}
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.label}
              href={link.href}
              className={styles.navItem}
              aria-label={link.label}
            >
              <Icon size={16} strokeWidth={1.7} />
              <span>{link.label}</span>
            </a>
          );
        })}

        {/* Contact Link */}
        <a
          href={contactLink.href}
          className={`${styles.navItem} ${styles.navContact}`}
          aria-label={contactLink.label}
        >
          <Mail size={16} strokeWidth={1.7} />
          <span>{contactLink.label}</span>
          <ArrowUpRight
            className={styles.contactArrow}
            size={13}
            strokeWidth={1.7}
          />
        </a>
      </motion.nav>

      <button
        ref={menuButtonRef}
        type="button"
        className={`${styles.phoneMenuButton} ${
          isPastHero ? styles.scrolled : ""
        }`}
        aria-label="Open navigation menu"
        aria-expanded={isPhoneDrawerOpen}
        aria-controls="phone-navigation-drawer"
        onClick={openPhoneDrawer}
      >
        <Menu size={23} strokeWidth={1.7} />
      </button>

      {isPhoneDrawerMounted && (
        <motion.div
          key={
            isPhoneDrawerOpen
              ? "phone-navigation-open"
              : "phone-navigation-closing"
          }
          className={styles.phoneDrawerOverlay}
          initial={{ opacity: isPhoneDrawerOpen ? 0 : 1 }}
          animate={{ opacity: isPhoneDrawerOpen ? 1 : 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
          style={{ pointerEvents: isPhoneDrawerOpen ? "auto" : "none" }}
          onClick={closePhoneDrawer}
        >
          <motion.aside
            id="phone-navigation-drawer"
            className={styles.phoneDrawer}
            role="dialog"
            aria-modal="true"
            aria-label="Phone navigation"
            aria-hidden={!isPhoneDrawerOpen}
            inert={!isPhoneDrawerOpen}
            initial={{ x: isPhoneDrawerOpen ? "100%" : 0 }}
            animate={{ x: isPhoneDrawerOpen ? 0 : "100%" }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
            }
            onAnimationComplete={() => {
              if (!isPhoneDrawerOpen) setIsPhoneDrawerMounted(false);
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.phoneDrawerHeader}>
              <span>MENU</span>
              <button
                ref={closeButtonRef}
                type="button"
                className={styles.phoneDrawerClose}
                aria-label="Close navigation menu"
                onClick={closePhoneDrawer}
              >
                <X size={23} strokeWidth={1.7} color="var(--burgundy)" />
              </button>
            </div>

            <nav
              className={styles.phoneDrawerLinks}
              aria-label="Phone navigation"
            >
              {phoneLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  aria-current={activeSection === link.href ? "page" : undefined}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.35,
                    delay: shouldReduceMotion ? 0 : 0.12 + index * 0.08,
                  }}
                  onClick={closePhoneDrawer}
                >
                  {link.label}
                  <ArrowUpRight size={17} strokeWidth={1.6} />
                </motion.a>
              ))}
            </nav>

            <span className={styles.phoneDrawerSignature}>rudrx75 | 2026</span>
          </motion.aside>
        </motion.div>
      )}
    </>
  );
}
