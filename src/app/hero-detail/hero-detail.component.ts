import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
  @Input() kim: any;
  @Output() pushItem = new EventEmitter<string>();

  addToCart(){
    this.pushItem.emit("포켓몬빵");
  }

  constructor() { }

  ngOnInit() {
  }

}