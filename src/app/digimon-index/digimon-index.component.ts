import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import {HttpDigimonService} from "../../services/http-digimon.service";
import {Digimon} from "../../models/digimon";
import { Router } from '@angular/router';
import { reduce } from 'rxjs';


@Component({
  selector: 'app-digimon-index',
  templateUrl: './digimon-index.component.html',
  styleUrls: ['./digimon-index.component.scss'],
})
export class DigimonIndexComponent implements OnInit, AfterViewInit, OnDestroy {

  digimons: Array<Digimon> = [];

  constructor(
    private httpDigimon: HttpDigimonService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.httpDigimon.getDigimons().subscribe((jsonDigimon) => {
      console.log(jsonDigimon);
      
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
