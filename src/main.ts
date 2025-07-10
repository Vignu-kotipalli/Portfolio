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
      description: 'A full-featured Kiosk Web Portal built with Express.js, Node.js, and Cheerio. Includes user Navigation, inventory management, and admin dashboard.',
      technologies: ['Express.js', 'Node.js', 'Cheerio'],
      liveUrl: 'https://mitsubishi.onrender.com',
      githubUrl: 'https://github.com/Vignu-kotipalli/Mitsubishi'
    }
  ];
}

bootstrapApplication(App);