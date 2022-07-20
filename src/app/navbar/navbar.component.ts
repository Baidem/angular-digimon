import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public logo: string = "/assets/digimon-logo.png";
  public collapsed: boolean = true;
  public dropped: boolean = true;

  constructor() { }

  drop(): void {
    this.dropped = !this.dropped;
  }

  undrop(): void {
    this.dropped = true;
  }

  ngOnInit(): void {
    
  }

}
