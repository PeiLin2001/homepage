import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface InfoCell {
  id: string;
  title: string;
  body?: string;
  languages?: Language[];
}

interface Language {
  name: string;
  level: number; // 0–100
}

interface Experience {
  period: string;
  datetime: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  readonly infoCells: InfoCell[] = [
    {
      id: 'education',
      title: 'Education',
      body: 'Bachelor of Science\nNational Tsing Hua University',
    },
    {
      id: 'future-goal',
      title: 'Future goal',
      body: 'Design a self-directed life — with the freedom to choose, and the discipline to continuously refine both my work and myself.',
    },
    {
      id: 'skill',
      title: 'Skill',
      body: 'Web developer\nGraphic design\nPaint',
    },
    {
      id: 'hobby',
      title: 'Hobby',
      body: 'Play the guitar\nDrawing something\nTalk shit',
    },
    {
      id: 'language',
      title: 'Language',
      languages: [
        { name: 'Chinese',  level: 100 },
        { name: 'English',  level: 70  },
        { name: 'Japanese', level: 20  },
      ],
    },
  ];

  readonly experiences: Experience[] = [
    {
      period: 'now',
      datetime: '2025',
      title: 'Developer',
      description: `I'm committed to deepening my knowledge of computer science, building reliable professional expertise, achieving financial independence, and becoming someone who can solve problems independently while taking full responsibility for my work.`,
    },
    {
      period: '–2025/09',
      datetime: '2025-09',
      title: 'Graphic designer',
      description: `After graduating, I followed my interest in graphic design and spent about a year gaining hands-on experience. During this time, I refined my skills and adapted to the professional environment. Over time, however, I realized that my abilities could be applied more broadly and had yet to be fully realized.`,
    },
  ];

  /** 將 \n 轉為陣列，方便模板用 @for 渲染 <br> */
  lines(text: string): string[] {
    return text.split('\n');
  }

}
