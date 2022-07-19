import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digimon-home',
  templateUrl: './digimon-home.component.html',
  styleUrls: ['./digimon-home.component.scss']
})
export class DigimonHomeComponent implements OnInit {

  title = 'digimon-home';
  image = 'assets/digiadven99_4suw.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
