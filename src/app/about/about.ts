import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  name = 'Constante Alina';
  age = 21;
  course = 'Bachelor of Science in Computer Science – 2nd Year';
  subject = 'Introduction to Applications Development (APPDEV)';
  university = 'University of Baguio';
  imgUrl = 'Cons.png';

  bio = `I am a Computer Science student currently exploring the world of AppDev.

As I learn HTML, CSS, and application development concepts, I enjoy creating simple yet functional programs.

This subject helps me understand how real applications are built, improve my problem-solving skills, and strengthen my foundation as a future developer.`;
}
