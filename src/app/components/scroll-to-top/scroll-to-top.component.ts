import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  template: `
    <button 
      class="scroll-to-top" 
      [class.show]="isVisible" 
      (click)="scrollToTop()"
      aria-label="Scroll to top">
      <i class="fas fa-arrow-up"></i>
    </button>
  `,
  styles: [`
    .scroll-to-top {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background: linear-gradient(135deg, #00c6ff, #0072ff);
      border: none;
      color: white;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px);
      transition: all 0.3s ease;
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      z-index: 999;

      &.show {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.3);
      }

      i {
        font-size: 20px;
      }
    }
  `],
  standalone: true,
  imports: [CommonModule]
})
export class ScrollToTopComponent {
  isVisible = false;

  @HostListener('window:scroll')
  checkScroll() {
    this.isVisible = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}