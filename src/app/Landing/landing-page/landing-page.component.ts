import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})


export class LandingPageComponent implements AfterViewInit {
  
  ngOnInit(){
    const html = document.querySelector('html') as HTMLElement;
    html.setAttribute("style", "background-image: url(https://i.ibb.co/jrRb11q/img2.jpg); background-size: cover;");
    
  }

  ngAfterViewInit() {
    
  }

  next() {
    const html = document.querySelector('html') as HTMLElement;
    const slide = document.querySelector('.slide') as HTMLElement;
    const items = slide.querySelectorAll('.item');
    if (items.length > 0) {
      const url:String = items[2].outerHTML;
      slide.appendChild(items[0]);
      
      console.log(url.split("(")[1].split(")")[0]);
      html.setAttribute("style", "background-image: url(" + url.split("(")[1].split(")")[0] + "); background-size: cover;");
      
      console.log(slide);
    }
  }
  
  prev() {
    const html = document.querySelector('html') as HTMLElement;
    const slide = document.querySelector('.slide') as HTMLElement;
    const items = slide.querySelectorAll('.item');
    if (items.length > 0) {
      const url:String = items[0].outerHTML;
      slide.prepend(items[items.length - 1]);

      console.log(url.split("(")[1].split(")")[0]);
      html.setAttribute("style", "background-image: url(" + url.split("(")[1].split(")")[0] + "); background-size: cover;");
    }
  }
}