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
  templateUrl: './main.html',
})
export class App {
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
      description: 'A full-featured e-commerce platform built with React, Node.js, and PostgreSQL. Includes user authentication, payment processing, inventory management, and admin dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      liveUrl: 'https://mitsubishi.onrender.com',
      githubUrl: 'https://github.com/Vignu-kotipalli/Mitsubishi'
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