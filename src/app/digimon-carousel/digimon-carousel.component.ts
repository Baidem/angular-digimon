import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Digimon } from 'src/models/digimon';
import { HttpDigimonService } from 'src/services/http-digimon.service';

@Component({
  selector: 'app-digimon-carousel',
  templateUrl: './digimon-carousel.component.html',
  styleUrls: ['./digimon-carousel.component.scss']
})
export class DigimonCarouselComponent implements OnInit {

  digimons: Array<Digimon> = [];

  constructor(
    private httpDigimon: HttpDigimonService,
    public router: Router
  ) { }


  ngOnInit(): void {
    this.httpDigimon.getDigimons().subscribe((jsonDigimon) => {
      this.digimons = jsonDigimon;
    });
  }

  ngAfterViewInit(): void {
    (document.querySelector('body'))?.classList.add('real-white');
  }

  ngOnDestroy(): void {
    (document.querySelector('body'))?.classList.remove('real-white');
  }

}
