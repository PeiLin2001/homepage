import { Component } from '@angular/core';

export interface WritingArticle {
  id: string;
  title: string;
  preview: string;
  /** ISO 格式，方便同時做顯示格式化與 <time datetime> 屬性 */
  date: string;
}

@Component({
  selector: 'app-writing',
  imports: [],
  templateUrl: './writing.component.html',
  styleUrl: './writing.component.scss'
})
export class WritingComponent {

  // 之後可改為從 service / API 取得，這裡先以陣列示範資料驅動
  articles: WritingArticle[] = [
    {
      id: 'note-06',
      title: '雜記06 關於老人與海',
      preview: '或許是自己不夠聰明，也可能是見識尚淺，讀完...',
      date: '2026-04-11'
    },
    {
      id: 'note-05',
      title: '雜記05 鳥調',
      preview: '為了記錄自己終於邁出步伐，做了一件與平常的自...',
      date: '2026-01-04'
    },
    {
      id: 'note-04',
      title: '雜記04 日本行',
      preview: '這不僅是樂不可支的享受，更是一趟圓夢與自我成...',
      date: '2025-11-16'
    },
    {
      id: 'note-03',
      title: '雜記03 小王子',
      preview: '...我不吃麵包。麥田對我沒有用處。麥田不會讓我...',
      date: '2023-12-17'
    },
    {
      id: 'note-02',
      title: '雜記02',
      preview: '',
      date: '' // 尚未發布，日期未定
    },
    {
      id: 'note-01',
      title: '雜記01',
      preview: '',
      date: '' // 尚未發布，日期未定
    }
  ];

  /** 顯示用日期格式化：2026-04-11 -> 2026 - 04 - 11；未發布則顯示「未發布」 */
  formatDate(date: string): string {
    if (!date) {
      return '未發布';
    }
    return date.split('-').join(' - ');
  }

  onSelectArticle(article: WritingArticle): void {
    // TODO: 導頁或觸發選取邏輯，例如 this.router.navigate(['/writing', article.id])
  }
}
