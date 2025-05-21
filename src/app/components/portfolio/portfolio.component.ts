import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolioCategories = [
    {
      title: 'Fashion Editorial',
      image: 'assets/images/fashion-editorial.jpg'
    },
    {
      title: 'Glamour',
      image: 'assets/images/glamour.jpg'
    },
    {
      title: 'Portrait',
      image: 'assets/images/portrait.jpg'
    },
    {
      title: 'Studio',
      image: 'assets/images/studio.jpg'
    },
    {
      title: 'Fashion I',
      image: 'assets/images/fashion-1.jpg'
    },
    {
      title: 'Fashion II',
      image: 'assets/images/fashion-2.jpg'
    },
    {
      title: 'Commercial',
      image: 'assets/images/commercial.jpg'
    },
    {
      title: 'Lifestyle',
      image: 'assets/images/lifestyle.jpg'
    },
    {
      title: 'Cultural',
      image: 'assets/images/cultural.jpg'
    },
    {
      title: 'Advertising',
      image: 'assets/images/advertising.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
