import { Component, AfterViewInit } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { simpleNike } from '@ng-icons/simple-icons';
import { Carousel } from 'primeng/carousel';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { FlashlightDirective } from './flashlight.directive';

gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin);

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [NgIcon, Carousel, FlashlightDirective],
  viewProviders: [provideIcons({ simpleNike })]
})
export class App implements AfterViewInit {
  products = [
    {
      name: '@freepik',
      image: 'full-shot-man-running.jpg'
    },
    {
      name: '@freepik',
      image: 'full-shot-fit-man-running.jpg'
    },
    {
      name: '@freeman_studio',
      image: 'beautiful-curly-girl-warms-up-sports-ground.jpg'
    },
    {
      name: '@freepik',
      image: 'medium-shot-fit-woman-outdoors.jpg'
    },
    {
      name: '@freepik',
      image: 'man-beach-working-out-activewear.jpg'
    },
    {
      name: '@freepik',
      image: 'low-angle-fit-man-jumping-outdoors.jpg'
    },
    {
      name: '@freepik',
      image: 'full-shot-man-training-with-boxing-gloves.jpg'
    },
    {
      name: '@freepik',
      image: 'back-view-athlete-stretching-arms.jpg'
    },
    {
      name: '@nensuria',
      image: 'young-woman-stretching-preparing-running.jpg'
    },
    {
      name: '@freepik',
      image: 'full-shot-man-playing-soccer.jpg'
    }
  ]

  ngAfterViewInit() {
    gsap.to(".heading", {duration: 3, scrambleText:{text:"JUST DO IT", chars:"upperCase", revealDelay:0.05}})

    const split = new SplitText('.power-text', {type: 'words'});

    gsap.from(split.words, {
      duration: 1,
      opacity: 0,
      yPercent: 100,
      scale: 1.2,
      rotateX: 80,
      filter: 'blur(20px)',
      stagger: {
        each: 0.1,
        from: 'start'
      },
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.power-text-container',
        start: 'top center',
        toggleActions: 'play none none reverse',
      }
    });
  }
}
