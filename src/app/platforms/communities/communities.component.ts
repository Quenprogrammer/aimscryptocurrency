import {Component} from '@angular/core';
import {communitiesData} from "../../../system/communities/communities";
import {interval} from "rxjs";

@Component({
  selector: 'app-communities',
  standalone: true,
  imports: [],
  templateUrl: './communities.component.html',
  styleUrl: './communities.component.scss'
})
export class CommunitiesComponent {

  protected readonly communitiesData = communitiesData;


  imageUrls: string[] = [
    /*'/assets/community/img.png',
    '/assets/community/img_1.png',*/
    '/assets/community/img_4.png',
    '/assets/community/img_3.png',
    '/assets/community/img_2.png',
    '/assets/community/img_5.png',



  ];
  randomImageUrl!: string;

  constructor() { }
  ngOnInit(): void {
    this.setRandomImage();
    // Change image every 10 seconds
    interval(3000).subscribe(() => {
      this.setRandomImage();
    });
  }

  setRandomImage(): void {
    const randomIndex = Math.floor(Math.random() * this.imageUrls.length);
    this.randomImageUrl = this.imageUrls[randomIndex];
  }
}
