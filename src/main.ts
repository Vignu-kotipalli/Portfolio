import { Component, OnInit, HostListener } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.html',
})
export class App implements OnInit {
  mobileMenuOpen = false;
  showBackToTop = false;
  isDarkMode = false;
  personalInfo = {
    name: 'Vigna Pavan Kotipalli',
    title: 'Full Stack Developer & Data Analyst',
    bio: 'Passionate full stack developer and data analyst creating innovative web experiences and data-driven insights with modern technologies.',
    longBio: 'I am a dedicated full stack developer and data analyst with 3+ years of experience building scalable web applications and extracting valuable insights from complex datasets. I specialize in React, Angular, Node.js, and cloud technologies, alongside data analysis tools like Python, SQL, and Power BI. My passion lies in creating seamless user experiences and actionable analytics that solve real-world problems and drive business value.',
    contact: {
      email: 'vignukotipalli4@gmail.com',
      phone: '+91 7989926278',
      location: 'Narsapur, Andhra Pradesh, India',
      linkedin: 'https://www.linkedin.com/in/vigna-pavan-kotipalli-7547b716b/',
      github: 'https://github.com/Vignu-kotipalli'
    }
  };

  skills: Skill[] = [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'React & Angular', level: 90 },
    { name: 'Node.js & Express', level: 85 },
    { name: 'Power BI & Tableau', level: 75 },
    { name: 'Electron.js', level: 65 },
    { name: 'SQL & MongoDB', level: 60 }
  ];

  projects: Project[] = [
    {
      title: 'Mitsubishi Kiosk Web',
      description: 'A full-featured Kiosk Web Portal built with Express.js, Node.js, and Cheerio. Includes user Navigation, inventory management, and admin dashboard.',
      technologies: ['Express.js', 'Node.js', 'Cheerio'],
      liveUrl: 'https://mitsubishi.onrender.com',
      githubUrl: 'https://github.com/Vignu-kotipalli/Mitsubishi'
    }
  ];

  ngOnInit() {
    this.initializeAnimations();
    this.loadThemePreference();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showBackToTop = window.pageYOffset > 300;
    this.updateNavbarOnScroll();
    this.revealElementsOnScroll();
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : 'auto';
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
    document.body.style.overflow = 'auto';
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
    localStorage.setItem('darkMode', this.isDarkMode.toString());

    // Update theme icon
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
      themeIcon.textContent = this.isDarkMode ? '☀️' : '🌙';
    }
  }

  loadThemePreference() {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
      this.isDarkMode = true;
      document.body.classList.add('dark-mode');
      const themeIcon = document.querySelector('.theme-icon');
      if (themeIcon) {
        themeIcon.textContent = '☀️';
      }
    }
  }

  smoothScroll(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  playHoverSound() {
    // Subtle interaction feedback - could add actual sound if needed
    const element = event?.target as HTMLElement;
    if (element) {
      element.style.transform = 'scale(1.02)';
      setTimeout(() => {
        element.style.transform = '';
      }, 200);
    }
  }

  private initializeAnimations() {
    // Initialize intersection observer for reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all reveal elements after a small delay to ensure DOM is ready
    setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal-text, .reveal-left, .reveal-right, .reveal-up, .reveal-card');
      revealElements.forEach(el => observer.observe(el));
    }, 100);
  }

  private updateNavbarOnScroll() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }

  private revealElementsOnScroll() {
    const elements = document.querySelectorAll('.skill-item, .project-card');
    elements.forEach((element, index) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100) {
        setTimeout(() => {
          element.classList.add('animate-in');
        }, index * 100);
      }
    });
  }
}

bootstrapApplication(App).catch(err => console.error(err));
