import { Component, OnInit } from '@angular/core';
import {TwserviceService} from './../twservice.service';
import {TwcardComponent} from './../twcard/twcard.component';
import {MdGridListModule} from '@angular/material';


@Component({
  selector: 'app-twcontainer',
  templateUrl: './twcontainer.component.html',
  styleUrls: ['./twcontainer.component.css']
})
export class TwcontainerComponent implements OnInit {

  constructor(
    private apiService: TwserviceService
  ) {}
  twitterData: object = [];

  ngOnInit() {
    this.apiService.get("./../assets/twitter.json")
      .subscribe(data => {
        this.twitterData = data;
      });
  }

}
