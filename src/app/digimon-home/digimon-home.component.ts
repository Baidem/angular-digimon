import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digimon-home',
  templateUrl: './digimon-home.component.html',
  styleUrls: ['./digimon-home.component.scss']
})
export class DigimonHomeComponent implements OnInit {

  title = 'digimon-home';

  constructor() { }

  ngOnInit(): void {
  }

}
