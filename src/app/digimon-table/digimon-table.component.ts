import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Digimon } from 'src/models/digimon';
import { HttpDigimonService } from 'src/services/http-digimon.service';

@Component({
  selector: 'app-digimon-table',
  templateUrl: './digimon-table.component.html',
  styleUrls: ['./digimon-table.component.scss']
})
export class DigimonTableComponent implements OnInit, AfterViewInit, OnDestroy {

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
