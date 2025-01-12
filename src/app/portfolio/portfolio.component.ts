import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  imgList: string[] = [
    '/poert1.png',
    '/port2.png',
    '/port3.png',
    '/poert1.png',
    '/port2.png',
    '/port3.png',
  ];
  display(img: string, imgBox: HTMLImageElement , el:HTMLDivElement): void {
    imgBox.src = img;
    el.classList.add('d-flex');
    el.classList.remove('d-none');
  }
  close(el: HTMLElement): void {
    el.classList.add('d-none');
    el.classList.remove('d-flex');
  }
}
