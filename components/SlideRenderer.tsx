"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slides } from "@/data/slides";
import NavigationControls from "./NavigationControls";
import ProgressBar from "./ProgressBar";

// Import all slide components
import LogoSlide from "./slides/LogoSlide";
import EtymologySlide from "./slides/EtymologySlide";
import MacalyDescriptionSlide from "./slides/MacalyDescriptionSlide";
import ImageSlide from "./slides/ImageSlide";
import CompetitorsSlide from "./slides/CompetitorsSlide";
import TweetImageSlide from "./slides/TweetImageSlide";
import DifferencesSlide from "./slides/DifferencesSlide";
import MacalyInterfaceSlide from "./slides/MacalyInterfaceSlide";
import iPhoneInterfaceSlide from "./slides/iPhoneInterfaceSlide";
import AmbientAgentSlide from "./slides/AmbientAgentSlide";
import GitHubIssueSlide from "./slides/GitHubIssueSlide";
import GitHubPRSlide from "./slides/GitHubPRSlide";
import LangtailSlide from "./slides/LangtailSlide";
import LangtailInterfaceSlide from "./slides/LangtailInterfaceSlide";
import VennDiagramSlide from "./slides/VennDiagramSlide";
import LaunchAnnouncementSlide from './slides/LaunchAnnouncementSlide';
import PricingSlide from './slides/PricingSlide';
import GeneratedBySlide from "./slides/GeneratedBySlide";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

export default function SlideRenderer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Check for hash in URL on initial render
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const slideIndex = slides.findIndex(slide => `#slide-${slide.id}` === hash);
      if (slideIndex !== -1) {
        setCurrentIndex(slideIndex);
      }
    }
  }, []);

  // Update hash when current slide changes
  useEffect(() => {
    window.location.hash = `slide-${slides[currentIndex].id}`;
  }, [currentIndex]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        goToNextSlide();
      } else if (e.key === "ArrowLeft") {
        goToPrevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  const goToNextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Map component names to actual components
  const slideComponents: Record<string, React.ComponentType> = {
    LogoSlide,
    EtymologySlide,
    MacalyDescriptionSlide,
    ImageSlide,
    CompetitorsSlide,
    TweetImageSlide,
    DifferencesSlide,
    MacalyInterfaceSlide,
    iPhoneInterfaceSlide,
    AmbientAgentSlide,
    GitHubIssueSlide,
    GitHubPRSlide,
    LangtailSlide,
    LangtailInterfaceSlide,
    VennDiagramSlide,
    LaunchAnnouncementSlide,
    PricingSlide,
    GeneratedBySlide,
  };

  const currentSlide = slides[currentIndex];
  const SlideComponent = slideComponents[currentSlide.component];

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0A0A0A] text-white">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {SlideComponent && <SlideComponent />}
        </motion.div>
      </AnimatePresence>

      <NavigationControls
        currentIndex={currentIndex}
        totalSlides={slides.length}
        goToNextSlide={goToNextSlide}
        goToPrevSlide={goToPrevSlide}
        goToSlide={goToSlide}
      />

      <ProgressBar currentIndex={currentIndex} totalSlides={slides.length} />
    </div>
  );
}