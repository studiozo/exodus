import React, { useEffect, useRef, useState } from 'react';
import { X, Menu, ArrowLeft } from 'lucide-react';
import Home from './components/Home';
import Philosophy from './components/Philosophy';
import Portfolio from './components/Portfolio';
import Inspo from './components/Inspo';
import Process from './components/Process';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Merch from './components/Merch';
import AiContext from './components/AiContext';
import Villa from './components/Villa';

// --- STYLES (Injected directly to ensure scope isolation and exact match) ---
const styles = `
  /* ============================================
     SACRED GEOMETRY BACKGROUND
     ============================================ */
  .sacred-field {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      overflow: hidden;
      pointer-events: none;
  }
  
  .sacred-field svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 200vmax;
      height: 200vmax;
      will-change: transform;
  }
  
  .sacred-ring {
      fill: none;
      stroke: var(--bone);
      stroke-width: 0.5;
      opacity: 0.03;
      transform-origin: center;
  }
  
  .sacred-ring:nth-child(1) { animation: rotateRing 200s linear infinite; }
  .sacred-ring:nth-child(2) { animation: rotateRing 160s linear infinite reverse; }
  .sacred-ring:nth-child(3) { animation: rotateRing 130s linear infinite; }
  .sacred-ring:nth-child(4) { animation: rotateRing 100s linear infinite reverse; }
  .sacred-ring:nth-child(5) { animation: rotateRing 70s linear infinite; }
  .sacred-ring:nth-child(6) { animation: rotateRing 50s linear infinite reverse; }
  
  @keyframes rotateRing {
      to { transform: rotate(360deg); }
  }
  
  /* Pulsing Core */
  .sacred-core {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      height: 400px;
      z-index: 0;
      pointer-events: none;
  }
  
  .core-ring {
      position: absolute;
      top: 50%;
      left: 50%;
      border: 1px solid var(--bone);
      border-radius: 50%;
      opacity: 0.02;
      animation: corePulse 10s ease-in-out infinite;
  }
  
  .core-ring:nth-child(1) { width: 100%; height: 100%; animation-delay: 0s; }
  .core-ring:nth-child(2) { width: 70%; height: 70%; animation-delay: -2.5s; }
  .core-ring:nth-child(3) { width: 45%; height: 45%; animation-delay: -5s; }
  .core-ring:nth-child(4) { width: 25%; height: 25%; animation-delay: -7.5s; }
  
  @keyframes corePulse {
      0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.02; }
      50% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.06; }
  }
  
  /* Flow Lines */
  .flow-lines {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      pointer-events: none;
  }
  
  .flow-lines svg {
      width: 100%;
      height: 100%;
  }
  
  .flow-path {
      fill: none;
      stroke: var(--bone);
      stroke-width: 2;
      opacity: 0.02;
      stroke-linecap: round;
  }
  
  .flow-path.bold {
      stroke-width: 4;
      opacity: 0.015;
  }
  
  .flow-path:nth-child(1) { stroke-dasharray: 30 100; animation: flowDash 20s linear infinite; }
  .flow-path:nth-child(2) { stroke-dasharray: 50 80; animation: flowDash 25s linear infinite reverse; }
  .flow-path:nth-child(3) { stroke-dasharray: 20 120; animation: flowDash 30s linear infinite; }
  .flow-path:nth-child(4) { stroke-dasharray: 40 90; animation: flowDash 22s linear infinite reverse; }
  
  @keyframes flowDash {
      to { stroke-dashoffset: -1200; }
  }
  
  /* ============================================
     NAVIGATION
     ============================================ */
  header {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1000;
      padding: 2rem 4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.4s ease;
  }
  
  header.scrolled {
      padding: 1.2rem 4rem;
      background: rgba(8, 8, 8, 0.95);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
  }
  
  .logo {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      cursor: pointer;
  }
  
  .logo-main {
      font-family: 'Bodoni Moda', serif;
      font-size: 1.8rem;
      font-weight: 900;
      letter-spacing: 0.25em;
      line-height: 1;
  }
  
  .logo-sub {
      font-size: 0.6rem;
      letter-spacing: 0.35em;
      text-transform: uppercase;
      opacity: 0.5;
      font-weight: 400;
  }
  
  nav {
      display: flex;
      align-items: center;
      gap: 1rem;
  }
  
  .nav-links {
      display: flex;
      gap: 2rem;
      list-style: none;
      margin-right: 3rem;
  }
  
  .nav-links li {
      position: relative;
  }
  
  .nav-links a {
      color: var(--bone);
      text-decoration: none;
      font-family: 'Bodoni Moda', serif;
      font-size: 0.75rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      padding: 0.5rem 0;
      position: relative;
      transition: opacity 0.3s ease;
      cursor: pointer;
  }
  
  .nav-links a.active {
      opacity: 1;
      border-bottom: 1px solid var(--bone);
  }

  .nav-links a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: var(--bone);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .nav-links a:hover {
      opacity: 0.6;
  }
  
  .nav-links a:hover::after {
      transform: scaleX(1);
      transform-origin: left;
  }
  
  /* CTA Button */
  .nav-cta {
      padding: 0.8rem 2rem;
      background: transparent;
      border: 1px solid var(--bone);
      color: var(--bone);
      font-family: 'Bodoni Moda', serif;
      font-size: 0.7rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      text-decoration: none;
      position: relative;
      overflow: hidden;
      transition: color 0.4s ease;
      cursor: pointer;
  }
  
  .nav-cta::before {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--bone);
      transform: translateX(-100%);
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      z-index: -1;
  }
  
  .nav-cta:hover {
      color: var(--void);
  }
  
  .nav-cta:hover::before {
      transform: translateX(0);
  }
  
  /* Mobile Menu Toggle */
  .menu-toggle {
      display: none;
      cursor: pointer;
  }

  /* Return to Home Button */
  .return-home-btn {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 999;
      background: var(--bone);
      color: var(--void);
      border: none;
      padding: 1rem 1.5rem;
      font-family: 'Bodoni Moda', serif;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 0.7rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s ease;
      opacity: 0;
      transform: translateY(20px);
      pointer-events: none;
  }

  .return-home-btn.visible {
      opacity: 1;
      transform: translateY(0);
      pointer-events: all;
  }

  .return-home-btn:hover {
      background: #fff;
      box-shadow: 0 5px 20px rgba(0,0,0,0.5);
  }

  /* ============================================
     HERO & HOME TEASERS
     ============================================ */
  .hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 1;
      text-align: center;
      padding: 2rem;
      padding-top: 8rem;
  }
  
  .hero-symbol {
      width: 200px;
      height: 200px;
      position: relative;
      margin-bottom: 4rem;
  }
  
  .hero-symbol svg {
      width: 100%;
      height: 100%;
      overflow: visible;
  }
  
  .symbol-stroke {
      fill: none;
      stroke: var(--bone);
      stroke-width: 1.5;
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      animation: drawSymbol 2.5s ease forwards;
  }
  
  .symbol-stroke:nth-child(2) { animation-delay: 0.2s; }
  .symbol-stroke:nth-child(3) { animation-delay: 0.4s; }
  .symbol-stroke:nth-child(4) { animation-delay: 0.6s; }
  .symbol-stroke:nth-child(5) { animation-delay: 0.8s; stroke-width: 2; }
  .symbol-stroke:nth-child(6) { animation-delay: 1s; }
  
  @keyframes drawSymbol {
      to { stroke-dashoffset: 0; }
  }
  
  .symbol-dot {
      fill: var(--bone);
      opacity: 0;
      animation: dotAppear 0.6s ease forwards 1.3s;
  }
  
  @keyframes dotAppear {
      0% { opacity: 0; r: 0; }
      50% { opacity: 1; r: 8; }
      100% { opacity: 1; r: 5; }
  }
  
  .hero-title {
      font-family: 'Bodoni Moda', serif;
      font-weight: 900;
      overflow: hidden;
  }
  
  .hero-title .line {
      display: block;
      overflow: hidden;
  }
  
  .hero-title .line span {
      display: block;
      transform: translateY(110%);
      animation: revealText 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  
  .hero-title .line:nth-child(1) span {
      font-size: clamp(4rem, 15vw, 12rem);
      letter-spacing: 0.2em;
      animation-delay: 1.5s;
  }
  
  @keyframes revealText {
      to { transform: translateY(0); }
  }
  
  .hero-subtitle {
      font-family: 'Bodoni Moda', serif;
      font-size: clamp(0.9rem, 2.5vw, 1.3rem);
      letter-spacing: 0.5em;
      text-transform: uppercase;
      margin-top: 2rem;
      opacity: 0;
      font-weight: 400;
      animation: fadeSlide 1s ease forwards 2s;
  }
  
  .hero-tagline {
      font-size: 1.1rem;
      font-style: italic;
      letter-spacing: 0.1em;
      margin-top: 1.5rem;
      opacity: 0;
      animation: fadeSlide 1s ease forwards 2.3s;
  }
  
  @keyframes fadeSlide {
      to { opacity: 0.5; }
  }
  
  .scroll-indicator {
      position: absolute;
      bottom: 4rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      opacity: 0;
      animation: fadeSlide 1s ease forwards 2.5s;
  }
  
  .scroll-text {
      font-size: 0.6rem;
      letter-spacing: 0.4em;
      text-transform: uppercase;
      opacity: 0.4;
  }
  
  .scroll-line {
      width: 1px;
      height: 60px;
      position: relative;
      overflow: hidden;
  }
  
  .scroll-line::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, var(--bone), transparent);
      animation: scrollPulse 2s ease-in-out infinite;
  }
  
  @keyframes scrollPulse {
      0%, 100% { transform: translateY(-100%); }
      50% { transform: translateY(100%); }
  }

  /* Home Teaser Sections */
  .home-teaser {
      padding: 8rem 4rem;
      min-height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  
  .home-teaser.alt-bg {
      background: var(--smoke);
  }

  .teaser-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6rem;
      max-width: 1400px;
      margin: 0 auto;
      align-items: center;
  }

  .teaser-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
  }

  .teaser-image {
      width: 100%;
      aspect-ratio: 4/5;
      background: #111;
      border: 1px solid rgba(242, 237, 230, 0.1);
      position: relative;
      overflow: hidden;
  }
  
  .teaser-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.7;
      transition: opacity 0.5s ease;
  }
  
  .teaser-image:hover img {
      opacity: 1;
  }

  .centered-teaser {
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
  }

   /* New Home Gallery (3 Previews + Thumbnails) */
   .home-gallery-container {
       width: 100%;
       padding: 4rem 0;
       display: flex;
       flex-direction: column;
       gap: 2rem;
   }

   .gallery-main-display {
       display: grid;
       grid-template-columns: repeat(3, 1fr);
       gap: 1px;
       background: rgba(242, 237, 230, 0.1);
       border: 1px solid rgba(242, 237, 230, 0.1);
       aspect-ratio: 16/9;
   }

   .gallery-main-item {
       position: relative;
       overflow: hidden;
       background: #050505;
   }

   .gallery-main-item img {
       width: 100%;
       height: 100%;
       object-fit: cover;
       transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
   }

   .gallery-main-item:hover img {
       transform: scale(1.05);
   }

   .gallery-thumbnails {
       display: flex;
       gap: 10px;
       overflow-x: auto;
       scrollbar-width: none;
       padding: 0 1rem;
   }

   .gallery-thumbnails::-webkit-scrollbar {
       display: none;
   }

   .thumbnail-item {
       flex: 0 0 120px;
       aspect-ratio: 1/1;
       background: #111;
       cursor: pointer;
       opacity: 0.4;
       transition: all 0.3s ease;
       border: 1px solid transparent;
   }

   .thumbnail-item.active, .thumbnail-item:hover {
       opacity: 1;
       border-color: var(--bone);
   }

   .thumbnail-item img {
       width: 100%;
       height: 100%;
       object-fit: cover;
   }

   /* Testimonial slider styles */
   .testimonial-slider {
       position: relative;
       width: 100%;
       aspect-ratio: 4/5;
       overflow: hidden;
       margin-bottom: 2rem;
       background: #111;
   }

   .testimonial-slide {
       position: absolute;
       inset: 0;
       opacity: 0;
       transition: opacity 0.8s ease;
       display: flex;
       align-items: center;
       justify-content: center;
   }

   .testimonial-slide.active {
       opacity: 1;
   }

   .testimonial-slide img {
       width: 100%;
       height: 100%;
       object-fit: cover;
   }

   .slider-nav {
       position: absolute;
       bottom: 1rem;
       left: 50%;
       transform: translateX(-50%);
       display: flex;
       gap: 0.5rem;
       z-index: 10;
   }

   .slider-dot {
       width: 8px;
       height: 8px;
       border-radius: 50%;
       background: rgba(242, 237, 230, 0.2);
       cursor: pointer;
       transition: background 0.3s ease;
   }

   .slider-dot.active {
       background: var(--bone);
   }

   /* Lightbox styles */
   .lightbox-overlay {
       position: fixed;
       inset: 0;
       background: rgba(0, 0, 0, 0.95);
       z-index: 10000;
       display: flex;
       align-items: center;
       justify-content: center;
       cursor: zoom-out;
       backdrop-filter: blur(10px);
       animation: fadeIn 0.3s ease;
   }

   .lightbox-content {
       position: relative;
       max-width: 90vw;
       max-height: 90vh;
       display: flex;
       align-items: center;
       justify-content: center;
   }

   .lightbox-image {
       max-width: 100%;
       max-height: 90vh;
       object-fit: contain;
       box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
       transform: scale(0.95);
       animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
   }

   .lightbox-close {
       position: absolute;
       top: -40px;
       right: 0;
       background: transparent;
       border: none;
       color: var(--bone);
       cursor: pointer;
       opacity: 0.6;
       transition: opacity 0.3s ease;
       display: flex;
       align-items: center;
       gap: 0.5rem;
       font-family: 'Bodoni Moda', serif;
       text-transform: uppercase;
       letter-spacing: 0.1em;
       font-size: 0.8rem;
   }

   .lightbox-close:hover {
       opacity: 1;
   }

   @keyframes fadeIn {
       from { opacity: 0; }
       to { opacity: 1; }
   }

   @keyframes scaleIn {
       to { transform: scale(1); }
   }

  /* ============================================
     SECTIONS - SHARED STYLES
     ============================================ */
  section {
      position: relative;
      z-index: 1;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
  }
  
  .section-header {
      margin-bottom: 5rem;
  }
  
  .section-label {
      font-family: 'Bodoni Moda', serif;
      font-size: 0.7rem;
      letter-spacing: 0.5em;
      text-transform: uppercase;
      opacity: 0.4;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      gap: 2rem;
  }
  
  .section-label::before {
      content: '';
      width: 40px;
      height: 1px;
      background: var(--bone);
      opacity: 0.3;
  }
  
  .section-title {
      font-family: 'Bodoni Moda', serif;
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      font-weight: 500;
      letter-spacing: 0.1em;
      line-height: 1.1;
  }
  
  .section-title .accent {
      font-style: italic;
  }
  
  /* ============================================
     ABOUT / PHILOSOPHY / BIO
     ============================================ */
  .about-section, .bio-section, .styles-section, .process-section, .locations-section, .contact-section {
      padding: 12rem 4rem;
  }

  .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8rem;
      max-width: 1400px;
      margin: 0 auto;
      align-items: center;
  }
  
  .about-visual {
      position: relative;
      aspect-ratio: 4/5;
      background: var(--smoke);
      overflow: hidden;
  }
  
  .about-visual::before {
      content: '';
      position: absolute;
      inset: 0;
      border: 1px solid rgba(242, 237, 230, 0.1);
      z-index: 2;
  }
  
  .about-symbol {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60%;
      height: 60%;
      opacity: 0.08;
  }
  
  .about-symbol svg {
      width: 100%;
      height: 100%;
  }
  
  .about-symbol-path {
      fill: none;
      stroke: var(--bone);
      stroke-width: 1;
  }
  
  .about-content {
      padding-right: 2rem;
  }
  
  .about-quote {
      font-family: 'Bodoni Moda', serif;
      font-size: clamp(1.6rem, 3vw, 2.4rem);
      line-height: 1.7;
      font-style: italic;
      margin-bottom: 3rem;
  }
  
  .about-quote strong {
      font-style: normal;
      font-weight: 700;
  }
  
  .about-text {
      font-size: 1.1rem;
      line-height: 2;
      opacity: 0.7;
      margin-bottom: 2rem;
  }
  
  .about-stats {
      display: flex;
      gap: 4rem;
      margin-top: 4rem;
      padding-top: 3rem;
      border-top: 1px solid rgba(242, 237, 230, 0.1);
  }
  
  .stat {
      text-align: left;
  }
  
  .stat-number {
      font-family: 'Bodoni Moda', serif;
      font-size: 3rem;
      font-weight: 700;
      line-height: 1;
  }
  
  .stat-label {
      font-size: 0.7rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      opacity: 0.5;
      margin-top: 0.5rem;
  }

  /* Bio Layout */
  .bio-grid-layout {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 6rem;
      align-items: start;
      max-width: 1400px;
      margin: 0 auto;
  }
  
  .bio-sidebar {
      position: sticky;
      top: 10rem;
      border-right: 1px solid rgba(242, 237, 230, 0.1);
      padding-right: 3rem;
  }
  
  .bio-photo-placeholder {
      width: 100%;
      aspect-ratio: 4/5;
      background: #111;
      margin-bottom: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(242, 237, 230, 0.1);
      position: relative;
      overflow: hidden;
  }

  .bio-photo-placeholder img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.8;
  }
  
  .sidebar-section {
      margin-bottom: 3rem;
  }
  
  .sidebar-label {
      font-family: 'Bodoni Moda', serif;
      font-size: 0.65rem;
      letter-spacing: 0.4em;
      text-transform: uppercase;
      opacity: 0.4;
      margin-bottom: 1rem;
      color: var(--bone);
  }
  
  .sidebar-value {
      font-family: 'Bodoni Moda', serif;
      font-size: 1.3rem;
      letter-spacing: 0.05em;
      color: var(--bone);
  }
  
  .sidebar-list {
      list-style: none;
  }
  
  .sidebar-list li {
      font-size: 1rem;
      margin-bottom: 0.5rem;
      opacity: 0.8;
      color: var(--bone);
  }
  
  .bio-chapter {
      margin-bottom: 4rem;
  }
  
  .chapter-title {
      font-family: 'Bodoni Moda', serif;
      font-size: 0.7rem;
      letter-spacing: 0.5em;
      text-transform: uppercase;
      opacity: 0.4;
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      gap: 1.5rem;
      color: var(--bone);
  }
  
  .chapter-title::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--bone);
      opacity: 0.15;
  }
  
  .bio-text {
      font-size: 1.15rem;
      line-height: 2;
      color: var(--bone);
      opacity: 0.8;
      margin-bottom: 2rem;
  }
  
  .bio-text strong {
      color: var(--bone);
      font-weight: 700;
      opacity: 1;
  }
  
  .bio-text em {
      font-style: italic;
      color: var(--gold);
  }
  
  .bio-highlight {
      background: #111;
      padding: 3rem;
      margin: 3rem 0;
      position: relative;
      border-left: 2px solid var(--bone);
  }
  
  .highlight-text {
      font-family: 'Bodoni Moda', serif;
      font-size: 1.4rem;
      font-style: italic;
      line-height: 1.7;
      color: var(--bone);
  }

  /* ============================================
     GALLERY / PORTFOLIO TABS
     ============================================ */
  .gallery-section {
      padding: 10rem 0;
      min-height: 100vh;
      background: var(--bone);
      color: var(--void);
      overflow: hidden;
  }
  
  .gallery-header {
      padding: 0 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 4rem;
      text-align: center;
  }
  
  .gallery-header .section-label::before {
      background: var(--void);
  }
  
  .tab-menu {
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
      margin-top: 3rem;
      z-index: 5;
      position: relative;
  }

  .tab-btn {
      background: transparent;
      border: none;
      color: var(--void); /* Changed for visibility */
      font-family: 'Bodoni Moda', serif;
      font-size: 0.9rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      padding: 0.5rem 1rem;
      cursor: pointer;
      opacity: 0.5;
      transition: all 0.3s ease;
      position: relative;
  }

  .tab-btn.active {
      opacity: 1;
      font-weight: 700;
  }

  .tab-btn::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%) scaleX(0);
      width: 100%;
      height: 1px;
      background: var(--void); /* Changed for visibility */
      transition: transform 0.3s ease;
  }

  .tab-btn.active::after {
      transform: translateX(-50%) scaleX(1);
  }
  
  .gallery-runes {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
  }
  
  .gallery-runes svg {
      width: 100%;
      height: 100%;
  }
  
  .rune-path {
      fill: none;
      stroke: var(--void);
      stroke-width: 2;
      opacity: 0.08;
      stroke-linecap: round;
      stroke-linejoin: round;
  }
  
  .rune-path.flow {
      stroke-dasharray: 25 40;
      animation: runeFlow 10s linear infinite;
  }
  
  @keyframes runeFlow {
      to { stroke-dashoffset: -260; }
  }
  
  .rune-dot {
      fill: var(--void);
      opacity: 0.12;
  }
  
  .rune-dot.pulse {
      animation: runePulse 4s ease-in-out infinite;
  }
  
  @keyframes runePulse {
      0%, 100% { r: 4; opacity: 0.08; }
      50% { r: 10; opacity: 0.15; }
  }
  
  .gallery-container {
      position: relative;
      padding: 0 4rem;
  }
  
  .gallery-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 400px;
      gap: 1.5rem;
      position: relative;
      z-index: 3;
  }
  
  .gallery-item {
      background: var(--void);
      position: relative;
      overflow: hidden;
      cursor: pointer;
  }
  
  .gallery-image {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 1;
      transition: transform 0.4s ease;
      z-index: 1;
      filter: grayscale(20%) contrast(1.1);
  }
  
  .gallery-item:hover .gallery-image {
      transform: scale(1.05);
      filter: grayscale(0%) contrast(1.2);
  }
  
  .gallery-inner {
      display: none;
  }
  
  .gallery-rune-symbol {
      display: none;
  }
  
  .gallery-rune-symbol svg {
      width: 100%;
      height: 100%;
  }
  .rune-symbol-path {
      display: none;
  }
    .gallery-item-info {
       position: absolute;
       inset: 0;
       background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 40%);
       display: flex;
       flex-direction: column;
       justify-content: flex-end;
       padding: 1.5rem;
       z-index: 4;
       pointer-events: none;
   }

   .gallery-label {
       font-family: 'Bodoni Moda', serif;
       font-size: 0.75rem;
       letter-spacing: 0.2em;
       text-transform: uppercase;
       color: var(--bone);
       margin-bottom: 0.3rem;
   }
   
   .gallery-category {
       font-size: 0.6rem;
       letter-spacing: 0.15em;
       text-transform: uppercase;
       color: var(--bone);
       opacity: 0.6;
   }

   /* ============================================
      TESTIMONIALS SECTION
      ============================================ */
   .testimonials-section {
       padding: 12rem 4rem;
       background: #000;
       position: relative;
       z-index: 1;
   }

   .section-header.centered {
       text-align: center;
       margin-bottom: 6rem;
   }

   .section-header.centered .section-label {
       justify-content: center;
   }

  /* ============================================
     TESTIMONIALS
     ============================================ */
  .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
      max-width: 1400px;
      margin: 0 auto;
  }

  .testimonial-card {
      background: rgba(26, 26, 26, 0.4);
      border: 1px solid rgba(242, 237, 230, 0.1);
      padding: 3rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
  }

  .client-media {
      width: 100%;
      aspect-ratio: 16/9;
      background: #111;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      position: relative;
      overflow: hidden;
  }
  
  .client-media img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.6;
  }

  .client-quote {
      font-size: 1rem;
      line-height: 1.8;
      font-style: italic;
      opacity: 0.8;
  }

  .client-info {
      margin-top: auto;
      border-top: 1px solid rgba(242, 237, 230, 0.1);
      padding-top: 1.5rem;
  }

  .client-name {
      font-family: 'Bodoni Moda', serif;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
  }

  .client-project {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      opacity: 0.5;
  }

  /* ============================================
     MERCH
     ============================================ */
  .merch-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      max-width: 1200px;
      margin: 0 auto;
  }

  .merch-card {
      text-align: center;
      cursor: pointer;
  }

  .merch-image {
      width: 100%;
      aspect-ratio: 1;
      background: var(--smoke);
      border: 1px solid rgba(242, 237, 230, 0.1);
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.4s ease;
      position: relative;
  }

  .merch-card:hover .merch-image {
      border-color: var(--bone);
  }

  .merch-title {
      font-family: 'Bodoni Moda', serif;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
  }

  .merch-price {
      font-size: 0.9rem;
      opacity: 0.6;
      letter-spacing: 0.1em;
  }

  /* ============================================
     AI CONTEXT / MANIFESTO (SEO)
     ============================================ */
  .ai-context-section {
      padding: 8rem 4rem;
      background: #000;
  }
  
  .ai-container {
      max-width: 800px;
      margin: 0 auto;
      opacity: 0.6;
  }
  
  .ai-container h1 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      color: var(--bone);
  }
  
  .ai-container p {
      font-size: 0.9rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      color: var(--bone);
  }
  
  .ai-keywords {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 3rem;
  }
  
  .keyword-tag {
      font-size: 0.7rem;
      border: 1px solid rgba(242, 237, 230, 0.2);
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      color: var(--bone);
  }

  /* ============================================
     OTHER SECTIONS (Styles, Process, Contact, Footer)
     ============================================ */
  .styles-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      max-width: 1400px;
      margin: 0 auto;
  }
  
  .style-card {
      padding: 3rem 2rem;
      border: 1px solid rgba(242, 237, 230, 0.1);
      text-align: center;
      transition: all 0.4s ease;
      position: relative;
      overflow: hidden;
  }
  
  .style-card:hover {
      border-color: var(--bone);
  }
  
  .style-icon {
      width: 60px;
      height: 60px;
      margin: 0 auto 2rem;
      position: relative;
      z-index: 1;
  }
  
  .style-icon svg {
      width: 100%;
      height: 100%;
  }
  
  .style-icon-path {
      fill: none;
      stroke: var(--bone);
      stroke-width: 1.5;
      opacity: 0.6;
      transition: opacity 0.3s ease;
  }
  
  .style-title {
      font-family: 'Bodoni Moda', serif;
      font-size: 1.3rem;
      letter-spacing: 0.15em;
      margin-bottom: 1rem;
      position: relative;
      z-index: 1;
  }
  
  .style-desc {
      font-size: 0.95rem;
      line-height: 1.8;
      opacity: 0.6;
      position: relative;
      z-index: 1;
  }
  
  .process-steps {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      position: relative;
  }
  
  .locations-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
  }
  
  .location-card {
      padding: 4rem;
      border: 1px solid rgba(242, 237, 230, 0.1);
      position: relative;
      overflow: hidden;
      transition: all 0.4s ease;
  }
  
  .location-card:hover {
      border-color: var(--bone);
  }
  
  .contact-content {
      max-width: 700px;
      margin: 0 auto;
      text-align: center;
  }
  
  .contact-symbol {
      width: 150px;
      height: 150px;
      margin: 0 auto 4rem;
      position: relative;
  }
  
  .contact-symbol svg { width: 100%; height: 100%; }
  
  .contact-ring {
      fill: none;
      stroke: var(--bone);
      stroke-width: 1;
      transform-origin: center;
  }
  
  .btn {
      display: inline-block;
      padding: 1.5rem 4rem;
      background: transparent;
      border: 1px solid var(--bone);
      color: var(--bone);
      font-family: 'Bodoni Moda', serif;
      font-size: 0.8rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      text-decoration: none;
      position: relative;
      overflow: hidden;
      transition: color 0.4s ease;
      cursor: pointer;
  }
  
  .btn:hover {
      color: var(--void);
  }
  
  .btn::before {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--bone);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      z-index: -1;
  }
  
  .btn:hover::before { transform: scaleX(1); }

  footer {
      padding: 4rem;
      border-top: 1px solid rgba(242, 237, 230, 0.08);
  }
  
  .footer-content {
      max-width: 1400px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 4rem;
  }
  
  .footer-brand { padding-right: 4rem; }
  .footer-logo { font-family: 'Bodoni Moda', serif; font-size: 1.5rem; font-weight: 900; letter-spacing: 0.2em; margin-bottom: 1.5rem; }
  .footer-desc { font-size: 0.95rem; line-height: 1.8; opacity: 0.5; }
  
  .footer-column h4 { font-family: 'Bodoni Moda', serif; font-size: 0.75rem; letter-spacing: 0.3em; text-transform: uppercase; margin-bottom: 1.5rem; opacity: 0.4; }
  .footer-links { list-style: none; }
  .footer-links li { margin-bottom: 0.8rem; }
  .footer-links a { color: var(--bone); text-decoration: none; font-size: 0.9rem; opacity: 0.6; transition: opacity 0.3s ease; cursor: pointer; }
  .footer-links a:hover { opacity: 1; }
  
  .footer-bottom {
      max-width: 1400px;
      margin: 4rem auto 0;
      padding-top: 3rem;
      border-top: 1px solid rgba(242, 237, 230, 0.05);
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  
  .footer-copy { font-size: 0.7rem; letter-spacing: 0.2em; opacity: 0.3; }
  .footer-social { display: flex; gap: 2rem; }
  .footer-social a { color: var(--bone); text-decoration: none; font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; opacity: 0.4; }

  /* ============================================
     RESPONSIVE
     ============================================ */
  @media (max-width: 1024px) {
      header { padding: 1.5rem 2rem; }
      .nav-links, .nav-cta { display: none; }
      .menu-toggle { display: flex; flex-direction: column; gap: 6px; padding: 10px; }
      .menu-toggle span { width: 30px; height: 1px; background: var(--bone); transition: all 0.3s ease; }
      
      .about-section, .bio-section, .styles-section, .process-section, .locations-section, .contact-section, .home-teaser { padding: 6rem 2rem; }
      .about-grid, .teaser-grid { grid-template-columns: 1fr; gap: 4rem; }
      .about-visual, .teaser-image { order: -1; max-height: 400px; }
      
      .gallery-header, .gallery-container { padding: 0 2rem; }
      .gallery-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 250px; }
      
      .testimonials-grid, .merch-grid { grid-template-columns: 1fr; gap: 4rem; }
      .styles-grid { grid-template-columns: repeat(2, 1fr); }
      .process-steps { grid-template-columns: 1fr; gap: 5rem; }
      
      .bio-grid-layout { grid-template-columns: 1fr; gap: 4rem; }
      .bio-sidebar { position: relative; top: 0; padding-right: 0; border-right: none; display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; padding-bottom: 2rem; border-bottom: 1px solid rgba(242, 237, 230, 0.1); }
      .bio-photo-placeholder { display: none; }
      
      .locations-grid { grid-template-columns: 1fr; }
      .footer-content { grid-template-columns: 1fr 1fr; gap: 3rem; }
      .footer-brand { grid-column: 1 / -1; padding-right: 0; }
      .footer-bottom { flex-direction: column; gap: 1.5rem; text-align: center; }
  }
  
  @media (max-width: 600px) {
      .styles-grid { grid-template-columns: 1fr; }
      .about-stats { flex-direction: column; gap: 2rem; }
      .bio-sidebar { grid-template-columns: 1fr; }
      .footer-content { grid-template-columns: 1fr; }
      .gallery-grid { grid-template-columns: 1fr; }
  }

  /* UTILITY FOR ANIMATION VISIBILITY */
  .visible {
     opacity: 1 !important;
     transform: translateY(0) !important;
  }
`;

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);
    const headerRef = useRef<HTMLElement>(null);

    const openLightbox = (src: string) => setLightboxImage(src);
    const closeLightbox = () => setLightboxImage(null);

    // --- EFFECTS ---
    useEffect(() => {
        // Inject Styles
        const styleSheet = document.createElement("style");
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);

        return () => {
            document.head.removeChild(styleSheet);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                if (window.scrollY > 50) {
                    headerRef.current.classList.add('scrolled');
                } else {
                    headerRef.current.classList.remove('scrolled');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Intersection observer for animations - Re-run on page change
    useEffect(() => {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    (entry.target as HTMLElement).style.opacity = '1';
                    (entry.target as HTMLElement).style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        setTimeout(() => {
            const elements = document.querySelectorAll(
                '.about-content, .about-visual, .gallery-item, .style-card, .process-step, .location-card, .bio-chapter, .testimonial-card, .merch-card, .teaser-image, .teaser-content'
            );

            elements.forEach((el, i) => {
                // Set initial state
                (el as HTMLElement).style.opacity = '0';
                (el as HTMLElement).style.transform = 'translateY(40px)';
                (el as HTMLElement).style.transition = `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.05}s`;
                observer.observe(el);
            });
        }, 100);

        return () => observer.disconnect();
    }, [currentPage]);

    // Mouse movement sacred geometry effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (window.innerWidth / 2 - e.clientX) / 60;
            const y = (window.innerHeight / 2 - e.clientY) / 60;

            const sacredField = document.querySelector('.sacred-field svg') as HTMLElement;
            const sacredCore = document.querySelector('.sacred-core') as HTMLElement;

            if (sacredField) {
                sacredField.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
            }
            if (sacredCore) {
                sacredCore.style.transform = `translate(calc(-50% + ${x * 0.5}px), calc(-50% + ${y * 0.5}px))`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const navigateTo = (page: string) => {
        setIsMenuOpen(false);
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    const renderContent = () => {
        if (currentPage === 'home') return <Home navigateTo={navigateTo} openLightbox={openLightbox} />;
        if (currentPage === 'portfolio') return <Portfolio openLightbox={openLightbox} />;
        if (currentPage === 'inspo') return <Inspo />;
        if (currentPage === 'philosophy') return <Philosophy />;
        if (currentPage === 'about') return <About />;
        if (currentPage === 'testimonials') return <Testimonials openLightbox={openLightbox} />;
        if (currentPage === 'merch') return <Merch />;
        if (currentPage === 'ai-context') return <AiContext />;
        if (currentPage === 'villa') return <Villa />;
        if (currentPage === 'contact') return <Contact />;
        return <Home navigateTo={navigateTo} openLightbox={openLightbox} />; // Default case
    };

    return (
        <>
            {/* Sacred Geometry Background */}
            <div className="sacred-field">
                <svg viewBox="0 0 1000 1000">
                    <circle className="sacred-ring" cx="500" cy="500" r="490" />
                    <circle className="sacred-ring" cx="500" cy="500" r="400" />
                    <circle className="sacred-ring" cx="500" cy="500" r="310" />
                    <circle className="sacred-ring" cx="500" cy="500" r="220" />
                    <circle className="sacred-ring" cx="500" cy="500" r="130" />
                    <circle className="sacred-ring" cx="500" cy="500" r="50" />
                    <line className="sacred-ring" x1="500" y1="10" x2="500" y2="990" />
                    <line className="sacred-ring" x1="10" y1="500" x2="990" y2="500" />
                    <line className="sacred-ring" x1="153" y1="153" x2="847" y2="847" />
                    <line className="sacred-ring" x1="847" y1="153" x2="153" y2="847" />
                </svg>
            </div>

            <div className="sacred-core">
                <div className="core-ring"></div>
                <div className="core-ring"></div>
                <div className="core-ring"></div>
                <div className="core-ring"></div>
            </div>

            <div className="flow-lines">
                <svg viewBox="0 0 1440 900" preserveAspectRatio="none">
                    <path className="flow-path" d="M0,150 Q360,50 720,150 T1440,150" />
                    <path className="flow-path bold" d="M0,350 Q360,450 720,350 T1440,350" />
                    <path className="flow-path" d="M0,550 Q360,450 720,550 T1440,550" />
                    <path className="flow-path bold" d="M0,750 Q360,850 720,750 T1440,750" />
                </svg>
            </div>

            {/* Navigation */}
            <header ref={headerRef} id="header">
                <div className="logo" onClick={() => navigateTo('home')}>
                    <span className="logo-main">EXØDUS</span>
                    <span className="logo-sub">Bali Blackwork Body Art</span>
                </div>

                <nav>
                    {/* Desktop Menu */}
                    <ul className="nav-links">
                        <li><a href="#" className={currentPage === 'portfolio' ? 'active' : ''} onClick={(e) => { e.preventDefault(); navigateTo('portfolio'); }}>Work</a></li>
                        <li><a href="#" className={currentPage === 'philosophy' ? 'active' : ''} onClick={(e) => { e.preventDefault(); navigateTo('philosophy'); }}>Philosophy</a></li>
                        <li><a href="#" className={currentPage === 'about' ? 'active' : ''} onClick={(e) => { e.preventDefault(); navigateTo('about'); }}>About</a></li>
                        <li><a href="#" className={currentPage === 'testimonials' ? 'active' : ''} onClick={(e) => { e.preventDefault(); navigateTo('testimonials'); }}>Testimonials</a></li>
                        <li><a href="#" className={currentPage === 'merch' ? 'active' : ''} onClick={(e) => { e.preventDefault(); navigateTo('merch'); }}>Store</a></li>
                        <li><a href="#" className={currentPage === 'contact' ? 'active' : ''} onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}>Contact</a></li>
                    </ul>

                    <a href="mailto:pierre@exodusbodyart.com?subject=Booking%20Inquiry" className="nav-cta">Book Now</a>

                    <div className="menu-toggle" onClick={() => setIsMenuOpen(true)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[2000] bg-zinc-950 flex flex-col items-center justify-center gap-8" style={{ position: 'fixed', inset: 0, zIndex: 2000, background: '#050505', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
                    <button style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: '#f2ede6', background: 'transparent', border: 'none', cursor: 'pointer' }} onClick={() => setIsMenuOpen(false)}>
                        <X size={32} />
                    </button>
                    {['Work', 'Philosophy', 'About', 'Testimonials', 'Store', 'Contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => {
                                // Map display name to internal page ID
                                const pageMap: { [key: string]: string } = {
                                    'Work': 'portfolio',
                                    'Philosophy': 'philosophy',
                                    'About': 'about',
                                    'Testimonials': 'testimonials',
                                    'Store': 'merch',
                                    'Contact': 'contact'
                                };
                                navigateTo(pageMap[item] || 'home');
                            }}
                            className="text-3xl font-serif text-[#f2ede6] uppercase tracking-widest"
                            style={{ fontSize: '2rem', fontFamily: 'Bodoni Moda, serif', color: '#f2ede6', textTransform: 'uppercase', letterSpacing: '0.2em', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            )}

            {/* Return to Home FAB */}
            <button
                className={`return-home-btn ${currentPage !== 'home' ? 'visible' : ''}`}
                onClick={() => navigateTo('home')}
                style={{ pointerEvents: currentPage !== 'home' ? 'all' : 'none' }}
            >
                <ArrowLeft size={16} /> Base
            </button>

            {/* Global Lightbox */}
            {lightboxImage && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={closeLightbox}>
                            <X size={20} /> Close
                        </button>
                        <img src={lightboxImage} alt="Fullscreen View" className="lightbox-image" />
                    </div>
                </div>
            )}

            {/* Main Content Render */}
            <main style={{ minHeight: '100vh', paddingTop: currentPage === 'home' ? 0 : '8rem' }}>
                {renderContent()}
            </main>

            <Footer scrollToSection={navigateTo} />
        </>
    );
}