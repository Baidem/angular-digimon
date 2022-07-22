import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Digimon } from 'src/models/digimon';
import { HttpDigimonService } from 'src/services/http-digimon.service';

@Component({
  selector: 'app-digimon-carousel',
  templateUrl: './digimon-carousel.component.html',
  styleUrls: ['./digimon-carousel.component.scss']
})
export class DigimonCarouselComponent implements OnInit {

  digimons: Array<Digimon> = [];
  public maxWidthStyle: string = 'max-width: 300px;';


  constructor(
    private httpDigimon: HttpDigimonService,
    public router: Router,
    config: NgbCarouselConfig
  ) {
    config.interval = 5000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  
   }


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
