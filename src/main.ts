import { Component } from '@angular/core';
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
  template: `
    <div class="portfolio">
      <!-- Navigation -->
      <nav class="nav">
        <div class="nav-container">
          <div class="nav-brand">{{ personalInfo.name }}</div>
          <div class="nav-links">
            <a href="#about" class="nav-link">About</a>
            <a href="#projects" class="nav-link">Projects</a>
            <a href="#contact" class="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      <!-- Hero Section -->
      <section id="hero" class="hero">
        <div class="hero-content">
          <h1 class="hero-title">{{ personalInfo.name }}</h1>
          <p class="hero-subtitle">{{ personalInfo.title }}</p>
          <p class="hero-description">{{ personalInfo.bio }}</p>
          <div class="hero-actions">
            <a href="#projects" class="btn btn-primary">View My Work</a>
            <a href="#contact" class="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="about">
        <div class="container">
          <h2 class="section-title">About Me</h2>
          <div class="about-content">
            <div class="about-text">
              <p>{{ personalInfo.longBio }}</p>
            </div>
            <div class="skills">
              <h3 class="skills-title">Technical Skills</h3>
              <div class="skills-grid">
                <div *ngFor="let skill of skills" class="skill-item">
                  <div class="skill-header">
                    <span class="skill-name">{{ skill.name }}</span>
                    <span class="skill-percentage">{{ skill.level }}%</span>
                  </div>
                  <div class="skill-bar">
                    <div 
                      class="skill-progress" 
                      [style.width.%]="skill.level"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="projects">
        <div class="container">
          <h2 class="section-title">Featured Projects</h2>
          <div class="projects-grid">
            <div *ngFor="let project of projects" class="project-card">
              <div class="project-content">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-description">{{ project.description }}</p>
                <div class="project-technologies">
                  <span *ngFor="let tech of project.technologies" class="tech-tag">
                    {{ tech }}
                  </span>
                </div>
                <div class="project-links">
                  <a 
                    [href]="project.liveUrl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="project-link project-link-primary"
                  >
                    Live Demo
                  </a>
                  <a 
                    *ngIf="project.githubUrl"
                    [href]="project.githubUrl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="project-link project-link-secondary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="contact">
        <div class="container">
          <h2 class="section-title">Get In Touch</h2>
          <div class="contact-content">
            <p class="contact-description">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to work together!
            </p>
            <div class="contact-info">
              <a 
                [href]="'mailto:' + personalInfo.contact.email" 
                class="contact-item"
              >
                <span class="contact-icon">✉️</span>
                <span>{{ personalInfo.contact.email }}</span>
              </a>
              <a 
                [href]="personalInfo.contact.linkedin" 
                target="_blank" 
                rel="noopener noreferrer"
                class="contact-item"
              >
                <span class="contact-icon">💼</span>
                <span>LinkedIn</span>
              </a>
              <a 
                [href]="personalInfo.contact.github" 
                target="_blank" 
                rel="noopener noreferrer"
                class="contact-item"
              >
                <span class="contact-icon">🐙</span>
                <span>GitHub</span>
              </a>
              <div class="contact-item">
                <span class="contact-icon">📍</span>
                <span>{{ personalInfo.contact.location }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <p>&copy; 2025 {{ personalInfo.name }}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `,
})
export class App {
  personalInfo = {
    name: 'Vigna Pavan Kotipalli',
    title: 'Full Stack Developer & Data Analyst',
    bio: 'Passionate full stack developer and data analyst creating innovative web experiences and data-driven insights with modern technologies.',
    longBio: 'I am a dedicated full stack developer and data analyst with 5+ years of experience building scalable web applications and extracting valuable insights from complex datasets. I specialize in React, Angular, Node.js, and cloud technologies, alongside data analysis tools like Python, SQL, and Power BI. My passion lies in creating seamless user experiences and actionable analytics that solve real-world problems and drive business value.',
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
      description: 'A full-featured e-commerce platform built with React, Node.js, and PostgreSQL. Includes user authentication, payment processing, inventory management, and admin dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      liveUrl: 'https://example-ecommerce.vercel.app',
      githubUrl: 'https://github.com/example/ecommerce-platform'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced filtering. Built with Angular and Firebase.',
      technologies: ['Angular', 'Firebase', 'TypeScript', 'Material UI'],
      liveUrl: 'https://example-taskapp.netlify.app',
      githubUrl: 'https://github.com/example/task-manager'
    },
    {
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard featuring real-time weather data, forecasts, and beautiful visualizations. Responsive design with dark/light mode toggle.',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
      liveUrl: 'https://example-weather.surge.sh',
      githubUrl: 'https://github.com/example/weather-dashboard'
    },
    {
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics platform for social media management with data visualization, reporting, and automated insights generation.',
      technologies: ['Python', 'Django', 'D3.js', 'PostgreSQL', 'Redis'],
      liveUrl: 'https://example-analytics.herokuapp.com'
    },
    {
      title: 'Real Estate Platform',
      description: 'A modern real estate listing platform with advanced search, virtual tours, and mortgage calculator. Features include map integration and user reviews.',
      technologies: ['Next.js', 'MongoDB', 'Mapbox', 'Cloudinary'],
      liveUrl: 'https://example-realestate.vercel.app',
      githubUrl: 'https://github.com/example/real-estate'
    },
    {
      title: 'Fitness Tracking App',
      description: 'A comprehensive fitness tracking application with workout planning, progress tracking, and social features. Includes wearable device integration.',
      technologies: ['React Native', 'Express.js', 'MongoDB', 'Socket.io'],
      liveUrl: 'https://example-fitness.expo.dev'
    }
  ];
}

bootstrapApplication(App);