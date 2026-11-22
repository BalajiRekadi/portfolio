/* ==========================================================================
   Balaji Rekadi - Portfolio Interactive Engine
   Particles, 3D Tilt, Interactive Terminal, Typewriter, Scroll-Spy, & UI
   ========================================================================== */

(function () {
  'use strict';

  // --- 1. Particles.js Initialization ---
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 70,
          density: {
            enable: true,
            value_area: 850
          }
        },
        color: {
          value: ['#b1a7a6', '#e63946', '#ffffff']
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        opacity: {
          value: 0.45,
          random: true,
          anim: {
            enable: true,
            speed: 0.8,
            opacity_min: 0.15,
            sync: false
          }
        },
        size: {
          value: 3.5,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.3,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 140,
          color: '#b1a7a6',
          opacity: 0.28,
          width: 1
        },
        move: {
          enable: true,
          speed: 2.2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 160,
            line_linked: {
              opacity: 0.75
            }
          },
          bubble: {
            distance: 200,
            size: 6,
            duration: 2,
            opacity: 0.8
          },
          repulse: {
            distance: 120
          },
          push: {
            particles_nb: 3
          }
        }
      },
      retina_detect: true
    });
  }

  // --- 2. Dynamic Typewriter Effect ---
  const typewriterElement = document.getElementById('typewriter-text');
  if (typewriterElement) {
    const roles = [
      'Frontend Lead & Webapps Specialist',
      'Websites & Modern Web Applications',
      'Three.js & 3D Interactive Web',
      'Framer Motion & Fluid UI Animations',
      'Tailwind CSS & Modern Design Systems',
      'Full Spectrum JavaScript & TypeScript'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 90;

    function typeLoop() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 45;
      } else {
        typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 90;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 2200; // Pause at end of phrase
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 400; // Pause before new phrase
      }

      setTimeout(typeLoop, typingSpeed);
    }

    setTimeout(typeLoop, 800);
  }

  // --- 3. Scroll Progress Bar & Scroll-to-Top Indicator ---
  const scrollProgressBar = document.getElementById('scroll-progress-bar');
  const backToTopBtn = document.getElementById('back-to-top');
  const scrollProgressCircle = document.getElementById('scroll-progress-circle');

  const circleRadius = 20;
  const circumference = 2 * Math.PI * circleRadius;
  if (scrollProgressCircle) {
    scrollProgressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    scrollProgressCircle.style.strokeDashoffset = circumference;
  }

  function handleScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${scrollPercentage}%`;
    }

    if (backToTopBtn) {
      if (scrollTop > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }

      if (scrollProgressCircle) {
        const offset = circumference - (scrollPercentage / 100) * circumference;
        scrollProgressCircle.style.strokeDashoffset = offset;
      }
    }

    // Timeline Line Fill Effect
    const timeline = document.querySelector('.timeline-container');
    const timelineFill = document.querySelector('.timeline-fill-line');
    if (timeline && timelineFill) {
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const visibleHeight = Math.min(rect.height, Math.max(0, windowHeight - rect.top));
        const progress = Math.min(100, Math.max(0, (visibleHeight / rect.height) * 100));
        timelineFill.style.height = `${progress}%`;
      }
    }

    // Scroll-Spy for Navigation
    updateActiveNavLink();
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleScroll, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- 4. Navigation & Mobile Drawer ---
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          mobileToggle.classList.remove('active');
          mobileToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') &&
          !navMenu.contains(e.target) &&
          !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Scroll Spy Function
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 180;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  // Smooth scroll with offset for sticky header
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- 5. 3D Tilt Effect on Cards ---
  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -9; // Max 9 deg
      const rotateY = ((x - centerX) / centerX) * 9;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-5px)`;

      // Dynamic Glare
      const glare = card.querySelector('.card-glare');
      if (glare) {
        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;
        glare.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0) 65%)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      const glare = card.querySelector('.card-glare');
      if (glare) {
        glare.style.background = 'transparent';
      }
    });
  });

  // --- 6. Scroll Reveal Observer ---
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  function triggerReveal(el) {
    el.classList.add('revealed');
  }

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          triggerReveal(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.02,
      rootMargin: '200px 0px 200px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => triggerReveal(el));
  }

  // Fallback initial check for elements already near viewport
  function checkInitialReveals() {
    const windowH = window.innerHeight;
    const isRevealAll = window.location.search.includes('reveal=all');
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowH + 250 || isRevealAll) {
        triggerReveal(el);
        if (isRevealAll) {
          el.style.opacity = '1';
          el.style.transform = 'none';
          el.style.transition = 'none';
        }
      }
    });
  }
  checkInitialReveals();
  window.addEventListener('scroll', checkInitialReveals, { passive: true });

  // Optional direct section scroll helper
  const scrollTarget = new URLSearchParams(window.location.search).get('scroll');
  if (scrollTarget) {
    const targetEl = document.getElementById(scrollTarget);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }

  // --- 7. Interactive Developer Terminal ---
  const terminalTabs = document.querySelectorAll('.term-tab');
  const terminalPanes = document.querySelectorAll('.term-pane');
  const cliInput = document.getElementById('cli-input');
  const cliOutput = document.getElementById('cli-output');
  const quickChips = document.querySelectorAll('.chip-btn');

  terminalTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetPaneId = tab.getAttribute('data-target');
      terminalTabs.forEach(t => t.classList.remove('active'));
      terminalPanes.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPane = document.getElementById(targetPaneId);
      if (targetPane) {
        targetPane.classList.add('active');
        if (targetPaneId === 'pane-cli' && cliInput) {
          cliInput.focus();
        }
      }
    });
  });

  // Terminal CLI Command Execution
  const cliCommands = {
    help: () => `Available commands:
  - <span class="term-hl">bio</span>           : View Balaji's developer profile & background
  - <span class="term-hl">skills</span>        : List core technical competencies & frameworks
  - <span class="term-hl">i20scholars</span>   : View details of flagship platform project i20-scholars.com
  - <span class="term-hl">3d</span>            : Details on Three.js, WebGL & Framer Motion
  - <span class="term-hl">designsystems</span> : Tailwind CSS, shadcn, Mantine & StencilJS
  - <span class="term-hl">projects</span>      : Browse flagship enterprise & open-source projects
  - <span class="term-hl">career</span>        : Show professional experience at Corespan, M3BI & Hexagon
  - <span class="term-hl">awards</span>        : Display industry honors (Spot Award, POB, Bonus)
  - <span class="term-hl">education</span>     : View academic qualifications & degree details
  - <span class="term-hl">contact</span>       : Show direct email, phone, and links
  - <span class="term-hl">clear</span>         : Clear terminal window screen`,

    bio: () => `<span class="term-success">Balaji Rekadi</span> - Frontend Lead | Webapps & Websites Specialist (9+ Years)
Currently Frontend Lead at Corespan Systems. Highly versatile across any JavaScript/TypeScript library.
Specializes in enterprise Single Page Applications, Three.js 3D web experiences,
fluid Framer Motion animations, Tailwind CSS, and scalable Design Systems.
Lead Frontend Architect for flagship platform <span class="term-hl">i20-scholars.com</span>.`,

    skills: () => `<span class="term-accent">Core Technical Competencies:</span>
• 3D & Motion: Three.js, WebGL, Canvas API, Framer Motion, CSS3 Animations
• Design Systems & UI: Tailwind CSS, shadcn/ui, Mantine, Ant Design, StencilJS Web Components
• Frontend Core: ReactJS, TypeScript, JavaScript (ES6+), Angular, HTML5/SCSS
• State & Architecture: Redux, Redux Saga, React Query, Microfrontends
• Backend & Tools: Node.js, Express, Jest, Jasmine, Enzyme, Webpack, Vite, Git CI/CD`,

    '3d': () => `<span class="term-accent">3D Graphics & Motion Graphics Mastery:</span>
• Three.js: 3D scenes, shaders, camera controls, particle fields, geometry manipulation
• Framer Motion: Spring physics, gesture controls, layout animations, exit transitions
• Canvas / WebGL: Custom render loops and hardware-accelerated interactive webapps`,

    motion: () => `<span class="term-accent">3D Graphics & Motion Graphics Mastery:</span>
• Three.js: 3D scenes, shaders, camera controls, particle fields, geometry manipulation
• Framer Motion: Spring physics, gesture controls, layout animations, exit transitions
• Canvas / WebGL: Custom render loops and hardware-accelerated interactive webapps`,

    designsystems: () => `<span class="term-accent">Design Systems & Modern UI Frameworks:</span>
• Tailwind CSS: Utility-first scalable design systems, custom themes, responsive breakpoints
• shadcn/ui: Accessible primitives built on Radix UI, high-conversion bespoke interfaces
• Mantine & Ant Design: Rapid enterprise UI modules, rich data grids, and modals
• StencilJS: Framework-agnostic Web Components (Honored with company Spot Award)`,

    i20scholars: () => `<span class="term-accent">Main Flagship Project: i20-scholars.com</span>
Platform  : i20-scholars.com (Overseas Education & Scholarship Matchmaker)
Role      : Lead Frontend Architect & Developer
Site URL  : <a href="https://i20-scholars.com/" target="_blank" class="term-link">https://i20-scholars.com/</a>
Stack     : ReactJS, TypeScript, Tailwind CSS, Redux, React Query, Framer Motion
Details   : Architected the complete web application connecting aspiring international
            students with universities, scholarship opportunities, and I-20 visa workflows.
            Delivered sub-second route transitions, dynamic filtering, and mobile-first UX.`,

    scholars: () => `<span class="term-accent">Main Flagship Project: i20-scholars.com</span>
Platform  : i20-scholars.com (Overseas Education & Scholarship Matchmaker)
Role      : Lead Frontend Architect & Developer
Site URL  : <a href="https://i20-scholars.com/" target="_blank" class="term-link">https://i20-scholars.com/</a>
Stack     : ReactJS, TypeScript, Tailwind CSS, Redux, React Query, Framer Motion
Details   : Architected the complete web application connecting aspiring international
            students with universities, scholarship opportunities, and I-20 visa workflows.`,

    projects: () => `Flagship Projects:
1. <span class="term-hl">i20-scholars.com Platform</span> : Overseas education & scholarship matchmaking SPA
2. <span class="term-hl">TimeSticks</span>               : Mechanical segmented ES6 clock widget
3. <span class="term-hl">SmartBuild Enterprise</span>    : Hexagon flagship industrial BIM platform (React/Redux)
4. <span class="term-hl">StencilJS Component Lib</span>  : Spot Award-winning cross-framework design system
5. <span class="term-hl">Interactive Cyber Portfolio</span>: Pure cyber HUD portfolio with particles & CLI`,

    career: () => `Professional Journey:
• <span class="term-hl">Corespan Systems</span> (2023 - Present)
  Role: Frontend Lead | Focus: Frontend architecture, React, Three.js, Tailwind, Design Systems
• <span class="term-hl">M3BI - A Zensar Company</span> (2021 - 2023)
  Role: Senior Frontend Engineer | Focus: React, Microfrontends, StencilJS, React Query
• <span class="term-hl">Hexagon Capability Center</span> (2017 - 2021)
  Role: Software Developer | Focus: SmartBuild SPA, AngularJS to ReactJS migration & UI library`,

    awards: () => `Honors & Recognitions:
🌟 <span class="term-accent">Spot Award (M3BI)</span>          : StencilJS Web Component innovation
🎖️ <span class="term-accent">Multiple POB Awards</span>       : Hexagon Pat on Back for delivery excellence
💰 <span class="term-accent">Project Bonus</span>              : Extra architectural contributions to SmartBuild`,

    education: () => `Academic Background:
🎓 <span class="term-hl">B.Tech in Computer Science & Engineering</span> (8.4 CGPA, 2013-2017)
   VNR Vignana Jyothi Institute of Engineering & Technology
🏫 <span class="term-hl">Intermediate - MPC</span> (94%, 2011-2013) | Sri Gayathri Junior College
🎒 <span class="term-hl">Secondary School Certificate</span> (89%, 2000-2011) | MNR High School`,

    contact: () => `Get in Touch:
📧 Email   : <a href="mailto:balajirekadi@gmail.com" class="term-link">balajirekadi@gmail.com</a>
📱 Phone   : <a href="tel:+919550111826" class="term-link">+91 9550111826</a>
💻 GitHub  : <a href="https://github.com/BalajiRekadi" target="_blank" class="term-link">github.com/BalajiRekadi</a>
📍 Location: Hyderabad, India`
  };

  function executeCliCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cliOutput) return;

    if (cmd === 'clear') {
      cliOutput.innerHTML = '';
      return;
    }

    const echoLine = document.createElement('div');
    echoLine.className = 'term-cmd-echo';
    echoLine.innerHTML = `<span class="term-prompt">balaji@portfolio:~$</span> ${escapeHtml(rawCmd)}`;
    cliOutput.appendChild(echoLine);

    const resultLine = document.createElement('div');
    resultLine.className = 'term-cmd-result';

    if (cmd === '') {
      // blank
    } else if (cliCommands[cmd]) {
      resultLine.innerHTML = cliCommands[cmd]();
    } else {
      resultLine.innerHTML = `<span class="term-error">Command not found: "${escapeHtml(rawCmd)}". Type <span class="term-hl">help</span> for a list of available commands.</span>`;
    }

    cliOutput.appendChild(resultLine);
    cliOutput.scrollTop = cliOutput.scrollHeight;
  }

  function escapeHtml(str) {
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  if (cliInput) {
    cliInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const value = cliInput.value;
        executeCliCommand(value);
        cliInput.value = '';
      }
    });
  }

  quickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      // Switch to CLI pane if not already active
      const cliTab = document.querySelector('[data-target="pane-cli"]');
      if (cliTab) cliTab.click();
      executeCliCommand(cmd);
    });
  });

  // --- 8. Skill Category Filtering ---
  const filterButtons = document.querySelectorAll('.skill-filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter || (category && category.includes(filter))) {
          card.classList.remove('hidden');
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.85)';
          setTimeout(() => {
            card.classList.add('hidden');
          }, 250);
        }
      });
    });
  });

  // --- 9. Toast Notifications & Copy to Clipboard ---
  const toast = document.getElementById('portfolio-toast');
  let toastTimeout = null;

  function showToast(message, icon = '✓') {
    if (!toast) return;
    toast.innerHTML = `<span class="toast-icon">${icon}</span> <span class="toast-msg">${message}</span>`;
    toast.classList.add('show');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  window.showToast = showToast;

  // Copy Email Buttons
  document.querySelectorAll('.copy-email-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'balajirekadi@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard: balajirekadi@gmail.com', '📋');
      }).catch(() => {
        showToast('Direct email: balajirekadi@gmail.com', '✉️');
      });
    });
  });

  // Contact Form Interactivity (mailto preparer)
  const contactForm = document.getElementById('portfolio-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('sender-name')?.value || '';
      const email = document.getElementById('sender-email')?.value || '';
      const subject = document.getElementById('msg-subject')?.value || 'Portfolio Inquiry';
      const message = document.getElementById('msg-body')?.value || '';

      const bodyText = `Hi Balaji,%0D%0A%0D%0A${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(name)} (${encodeURIComponent(email)})`;
      const mailtoLink = `mailto:balajirekadi@gmail.com?subject=${encodeURIComponent(subject)}&body=${bodyText}`;

      showToast('Opening your email client...', '🚀');
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 500);
    });
  }

  // --- 10. Ambient Cursor Glow Aura Tracker ---
  const ambientGlow = document.getElementById('ambient-cursor-glow');
  if (ambientGlow) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let isMouseActive = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isMouseActive) {
        ambientGlow.style.opacity = '1';
        isMouseActive = true;
      }
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      ambientGlow.style.opacity = '0';
      isMouseActive = false;
    });

    function updateAmbientGlow() {
      // Smooth interpolation for fluid cyber glow follow
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;
      ambientGlow.style.transform = `translate(${currentX.toFixed(1)}px, ${currentY.toFixed(1)}px) translate(-50%, -50%)`;
      requestAnimationFrame(updateAmbientGlow);
    }
    requestAnimationFrame(updateAmbientGlow);
  }

  // Initial trigger for scroll
  handleScroll();

})();
