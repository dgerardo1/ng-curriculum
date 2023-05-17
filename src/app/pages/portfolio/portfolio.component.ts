import { Component, OnInit } from '@angular/core';
import { NetlifyService } from 'src/app/services/netlify.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  webProjects = [
    {
      title: 'GUSS & ROCH',
      img: 'pc-gussroch-mockup.png',
      link: 'https://guss-roch.com.mx/',
    },
    {
      title: 'GALO PR',
      img: 'pc-galo-mockup.png',
      link: 'http://galopr.com/',
    },
    {
      title: 'Style Central',
      img: 'luxury-style-central.jpg',
      link: 'https://luxurystylecentral.com/',
    },
  ]

  constructor( private netlifyService: NetlifyService ){}

  ngOnInit():void{
    this.getSites()
  }

  getSites(){
    this.netlifyService.getSites();
  }

}
