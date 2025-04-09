import { Component, HostListener } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HeaderComponent {
  isScrolled = false;
  isMenuActive = false;

  constructor(private scrollService: ScrollService) {}

  @HostListener('window:scroll')
  checkScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
    document.body.style.overflow = this.isMenuActive ? 'hidden' : '';
  }

  closeMenu() {
    this.isMenuActive = false;
    document.body.style.overflow = '';
  }

  scrollTo(elementId: string) {
    this.closeMenu();
    this.scrollService.scrollToElement(elementId);
  }
}
