import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredItems = [
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
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Any initialization logic here
  }
}
