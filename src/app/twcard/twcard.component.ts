import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twcard',
  templateUrl: './twcard.component.html',
  styleUrls: ['./twcard.component.css'],
  inputs: ['cardData']
})
export class TwcardComponent implements OnInit {

  constructor() { }

  cardData: object = {};
  ngOnInit() {

  }
}
