import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css']
})
export class Portfolio {

  prelims = [
    { 
      type: 'Activity 1', 
      title: 'Name Information', 
      desc: 'A simple webpage that collects and displays user-provided name details.', 
      link: 'https://consalina.github.io/FG-Activity-1/', 
      score: '10/10', 
      missing: false 
    },
    { 
      type: 'Activity 2', 
      title: 'Recipe Order Card Updater', 
      desc: 'An interactive recipe order card app that updates displayed details dynamically.', 
      link: 'https://consalina.github.io/FG-Lab-2/', 
      score: '10/10', 
      missing: false 
    },
    { 
      type: 'Activity 3, 4, 5', 
      title: 'Portfolio', 
      desc: 'A portfolio website showcasing my work and skills throughout the course.', 
      link: '#', 
      score: '0/30', 
      missing: true 
    },
    { 
      type: 'Activity 6', 
      title: 'Simple Product Catalog', 
      desc: 'A basic product catalog displaying various items with details.', 
      link: 'https://consalina.github.io/FG_Lab6/', 
      score: '10/10', 
      missing: false 
    },
    { 
      type: 'Exam', 
      title: 'Product List', 
      desc: 'A product listing webpage that organizes and displays items efficiently.', 
      link: 'https://consalina.github.io/APPDEV1_FG_EXAMS/', 
      score: '30/90', 
      missing: false 
    },
  ];

  midterms = [
    { 
      type: 'Activity 1', 
      title: 'Search Engine', 
      desc: 'A simple search engine interface that filters data based on user input.', 
      link: 'https://consalina.github.io/ALINA_APPDEV1_MG_SEARCH/', 
      score: '10/10', 
      missing: false 
    },
    { 
      type: 'Activity 2', 
      title: 'Task Manager', 
      desc: 'A task management app that allows users to add and track tasks.', 
      link: 'https://consalina.github.io/ALINA_MD_LAB2/', 
      score: '20/20', 
      missing: false 
    },
    { 
      type: 'Activity 3', 
      title: 'Task Manager (With Delete)', 
      desc: 'An enhanced task manager that includes task deletion features.', 
      link: 'https://consalina.github.io/ALINA_MD_LAB3/', 
      score: '30/30', 
      missing: false 
    },
    { 
      type: 'Activity 4', 
      title: 'Task Manager (With Edit Mode)', 
      desc: 'A more advanced task manager that supports editing existing tasks.', 
      link: 'https://consalina.github.io/ALINA_MD_LAB4/', 
      score: '40/40', 
      missing: false 
    },
    { 
      type: 'Exam', 
      title: 'Weather API', 
      desc: 'A weather application that retrieves real-time data using a public API.', 
      link: 'https://consalina.github.io/alina_midterms_exam/', 
      score: '35/100', 
      missing: false 
    },
  ];

  finals = [
    { 
      type: 'Activity 1', 
      title: 'Firebase: Student Information', 
      desc: 'A Firebase-powered system that stores and displays student information.', 
      link: 'https://consalina.github.io/F-Lab1/', 
      score: '15/15', 
      missing: false 
    },
    { 
      type: 'Activity 2', 
      title: 'Firebase: Clinic Management System', 
      desc: 'A clinic management app using Firebase for secure data handling.', 
      link: 'https://consalina.github.io/F-Lab2/', 
      score: '28/30', 
      missing: false 
    },
    { 
      type: 'Activity 3', 
      title: 'Firebase: Municipal Disaster Response Information System', 
      desc: 'A disaster response system built with Firebase to manage and present municipal disaster data.', 
      link: 'https://consalina.github.io/F-Lab3/', 
      score: '15/30', 
      missing: false 
    },
    { 
      type: 'Group Exam', 
      title: 'Firebase: Physical Fitness App', 
      desc: 'A physical fitness application built with Firebase to manage and present user fitness data.', 
      link: 'https://izzabellefolio.github.io/fitracker/',  
      missing: false
    }
  ];

}
