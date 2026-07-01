import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Category = 'front-end' | 'fullstack';
type Project = 'Independent Study' | 'Team Project';

interface Work {
  title: string;
  description: string;
  date: Date;
  category: Category;
  projectType: Project;
  image: string;
  link: string;
}

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss',
})
export class WorksComponent {
  works: Work[] = [
    {
      title: 'Homepage',
      description: 'This is my first website!',
      date: new Date(2026, 5, 1),
      category: 'front-end',
      projectType: 'Independent Study',
      image: './homepage.png',
      link: './index.html',
    },
    {
      title: 'Dynamic questionnaire',
      description: 'This is a dynamic questionnare system, support to ',
      date: new Date(2026, 4, 1),
      category: 'fullstack',
      projectType: 'Independent Study',
      image: './questionnare.png',
      link: 'https://docs.google.com/document/d/1JgwiUUQ_q5qlWQYFgQDBq5CkWN5QpJiFFgbg2nAHYKc/edit?usp=sharing',
    },
    {
      title: 'Weather',
      description: 'A weather website of Kaohsiung Taiwan. Using Angular.',
      date: new Date(2026, 2, 14),
      category: 'front-end',
      projectType: 'Independent Study',
      image: './weather.png',
      link: 'https://project2-weather.vercel.app/weatherAPI',
    },
    {
      title: '二手Go',
      description:
        '大學生校園二手交易媒合平台，擔任 5 人全端團隊 Project Lead，負責前端架構、Angular 開發與 Spring Boot API 整合。',
      date: new Date(2026, 6, 25),
      category: 'fullstack',
      projectType: 'Team Project',
      image: './secondhandgo.png',
      link: 'https://peilin2001.github.io/second-hand-go-frontend/#/home',
    },
  ];

  startIndex = 0;
  displayedCount = 3;

  decreasePage() {
    if (this.startIndex > 0) {
      this.startIndex--;
    }
  }

  increasePage() {
    if (this.startIndex < this.works.length - this.displayedCount) {
      this.startIndex++;
    }
  }

  get transformOffset(): string {
    const gap = 20;

    const cardPercent = 100 / this.displayedCount;
    const gapCompensation =
      ((this.displayedCount - 1) * gap) / this.displayedCount;

    const movePercent = this.startIndex * cardPercent;
    const movePx = this.startIndex * (gap - gapCompensation);

    return `translateX(calc(-${movePercent}% - ${movePx}px))`;
  }

  get sortedWorks(): Work[] {
    return [...this.works].sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  get maxStartIndex(): number {
    return Math.max(this.sortedWorks.length - this.displayedCount, 0);
  }
}
