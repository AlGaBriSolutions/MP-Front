import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing-slider',
  templateUrl: './landing-slider.component.html',
  styleUrls: ['./landing-slider.component.css']
})
export class LandingSliderComponent implements OnInit{

  constructor(private router: Router) {}

  goToCatalogo() {
    this.router.navigate(['/catalogo']); // Navega a la ruta del marketplace
  }

  timeRunning: number = 3000;
  timeAutoNext: number = 20000;
  runTimeOut: any;
  runNextAuto: any;

  ngOnInit(): void {
    // Step 1: get DOM elements using TypeScript
    const nextDom = document.getElementById('next');
    const prevDom = document.getElementById('prev');
    const carouselDom = document.querySelector('.carousel');
    const sliderDom = carouselDom?.querySelector('.carousel .list') as HTMLElement;
    const thumbnailBorderDom = document.querySelector('.carousel .thumbnail') as HTMLElement;
    const thumbnailItemsDom = thumbnailBorderDom?.querySelectorAll('.item') as NodeListOf<HTMLElement>;
    const timeDom = document.querySelector('.carousel .time');

    if (!sliderDom || !thumbnailBorderDom || !thumbnailItemsDom.length || !nextDom || !prevDom) {
      console.error("Carousel elements not found!");
      return;
    }

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

    // Event listeners
    nextDom.onclick = () => this.showSlider('next', sliderDom, thumbnailBorderDom, carouselDom);
    prevDom.onclick = () => this.showSlider('prev', sliderDom, thumbnailBorderDom, carouselDom);

    // Auto-run the slider
    this.runNextAuto = setTimeout(() => {
      nextDom.click();
    }, this.timeAutoNext);
  }

  showSlider(type: string, sliderDom: HTMLElement, thumbnailBorderDom: HTMLElement, carouselDom: Element | null): void {
    const sliderItemsDom = sliderDom.querySelectorAll('.carousel .list .item') as NodeListOf<HTMLElement>;
    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.carousel .thumbnail .item') as NodeListOf<HTMLElement>;

    if (type === 'next') {
      sliderDom.appendChild(sliderItemsDom[0]);
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
      carouselDom?.classList.add('next');
    } else {
      sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
      carouselDom?.classList.add('prev');
    }

    clearTimeout(this.runTimeOut);
    this.runTimeOut = setTimeout(() => {
      carouselDom?.classList.remove('next');
      carouselDom?.classList.remove('prev');
    }, this.timeRunning);

    clearTimeout(this.runNextAuto);
    this.runNextAuto = setTimeout(() => {
      const nextDom = document.getElementById('next');
      nextDom?.click();
    }, this.timeAutoNext);
  }
}


