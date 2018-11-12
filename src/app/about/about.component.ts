import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public amyImageUrl = "../../assets/profile-amy.png";
  public callieImageUrl = "../../assets/profile-calliehart.jpg";
  public keenImageUrl = "../../assets/profile-keen.jpg";
  public melissaImageUrl = "../../assets/profile-melissa.png";
  constructor() { }

  ngOnInit() {
  }

  public amyImageUrl ="../../assets/profile-amy.png";
  public callieImageUrl ="../../assets/profile-calliehart.jpg";
  public keenImageUrl ="../../assets/images/profile-keen.jpg";
  public melissaImageUrl ="../../assets/images/profile-mellissa.png";


}
