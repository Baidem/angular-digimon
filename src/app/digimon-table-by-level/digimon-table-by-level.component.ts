import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Digimon } from 'src/models/digimon';
import { HttpDigimonService } from 'src/services/http-digimon.service';

@Component({
  selector: 'app-digimon-table-by-level',
  templateUrl: './digimon-table-by-level.component.html',
  styleUrls: ['./digimon-table-by-level.component.scss']
})
export class DigimonTableByLevelComponent implements OnInit {

  digimons: Array<Digimon> = [];

  constructor(
    private httpDigimon: HttpDigimonService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.httpDigimon.getDigimonsByLevel(params['digimonLevel']).subscribe((jsonDigimon) => {
        this.digimons = jsonDigimon;
      })
    });
  }

}
