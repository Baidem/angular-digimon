import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sand-box',
  templateUrl: './sand-box.component.html',
  styleUrls: ['./sand-box.component.scss']
})
export class SandBoxComponent implements OnInit {

  @Input()
   name = "0";
   @Input()
   img = "0";
   @Input()
   level ="0";
   @Input()
   border ="0";
   @Input()
   color = "0";
   @Input()
   backGround = "0";

  constructor() { }

  ngOnInit(): void {
  }

}
