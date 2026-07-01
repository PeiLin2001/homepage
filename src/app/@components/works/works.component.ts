import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Category = 'front-end' | 'fullstack';

interface Work {
  title: string;
  description: string;
  category: Category;
  image: string;
  link: string;
}

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent {
  filters: ('all' | Category)[] = ['all', 'front-end', 'fullstack'];
  selectedFilter: 'all' | Category = 'all';

  works: Work[] = [
    {
      title: 'Homepage',
      description: 'This is my first website!',
      category: 'front-end',
      image: './homepage.png',
      link: './index.html'
    },
    {
      title: 'Dynamic questionnaire',
      description: '動態問卷系統，支援使用者填答與管理員後台結果統計。',
      category: 'fullstack',
      image: './questionnare.png',
      link: 'https://docs.google.com/document/d/1JgwiUUQ_q5qlWQYFgQDBq5CkWN5QpJiFFgbg2nAHYKc/edit?usp=sharing'
    },
    {
      title: 'Weather',
      description: 'A weather website of Kaohsiung Taiwan. Using Angular.',
      category: 'front-end',
      image: './weather.png',
      link: 'https://project2-weather.vercel.app/weatherAPI'
    },
    {
      title: '二手Go',
      description: '大學生校園二手交易媒合平台，擔任 5 人全端團隊 Project Lead，負責前端架構、Angular 開發與 Spring Boot API 整合。',
      category: 'fullstack',
      image: './secondhandgo.png', // TODO: 換成專題截圖
      link: '#' // TODO: 補上 Demo 或 GitHub 連結
    }
  ];

  get filteredWorks(): Work[] {
    return this.selectedFilter === 'all'
      ? this.works
      : this.works.filter(w => w.category === this.selectedFilter);
  }

  setFilter(filter: 'all' | Category): void {
    this.selectedFilter = filter;
  }
}
