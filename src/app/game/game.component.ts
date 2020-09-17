import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { Player } from './models/player';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  start = true;
  // firstPlayer: any[] = [];
  active = 'firstPlayer';
  viewArr: any[] = [];
  // secondPlayer: any[] = [];
  winnerView = false;
  boxNumber;
  firstPlayerTotal = 0;
  secondPlayerTotal = 0;
  secondActive = false;
  firstActive = false;
  firstPlayer :Player = {
    values:[],
    total:0
  };
  secondPlayer:Player= {
    values:[],
    total:0
  };
  winnerObj = {
    name: "",
    score: 0
  };
  constructor(public _service: GameService) { }

  ngOnInit(): void {
    this.viewArr = this._service.getRandomArray();
  }

  //Adding Value to active player score when frontBox is Clicked------------------
  firstBox(): void {
    this.firstActive = true;
    if (this.active === 'firstPlayer') {
      this.firstPlayer.values = [...this._service.getStart(this.firstPlayer.values)];
      this.viewNumber(this.firstPlayer.values[this.firstPlayer.values.length - 1]);
    }


    else {
      this.secondPlayer.values = [...this._service.getStart(this.secondPlayer.values)];
      this.viewNumber(this.secondPlayer.values[this.secondPlayer.values.length - 1]);
    }
    this.changeTurn();
  }

  //Adding Value to active player score when backBox is Clicked------------------
  secondBox(): void {
    this.secondActive = true;
    if (this.active === 'firstPlayer') {
      this.firstPlayer.values = [...this._service.getEnd(this.firstPlayer.values)];
      this.viewNumber(this.firstPlayer.values[this.firstPlayer.values.length - 1]);
    }

    else {
      this.secondPlayer.values = [...this._service.getEnd(this.secondPlayer.values)];
      this.viewNumber(this.secondPlayer.values[this.secondPlayer.values.length - 1]);
    }

    this.changeTurn();
  }

  // Finding Total of Each Player and Checking of array if its empty or not---------------------------
  changeTurn() {
    this.firstPlayer.total = this.firstPlayer.values.reduce((val, sum) => val + sum, 0);
    this.secondPlayer.total = this.secondPlayer.values.reduce((val, sum) => val + sum, 0);
    this.winnerView = this._service.checkEmpty();
    if (!this.winnerView) {
      this.viewArr = [...this._service.arr];
      this.active = this.active === 'firstPlayer' ? 'secondPlayer' : 'firstPlayer';
    }
    else {
      this.winnerCheck();
    }
  }
// Viewing Number on Box whenever it is being Taped---------------------------
  viewNumber(num): void {
    this.boxNumber = num;
    setTimeout(() => {
      this.boxNumber = "";
      this.firstActive = this.secondActive = false;
    }, 1000)
  }

// Checking Winner after comparing each Player Score-----------------------
  winnerCheck(): void {
    if (this.firstPlayer.total > this.secondPlayer.total) {
      this.winnerObj = { name: 'Player 1', score: this.firstPlayer.total }
    }
    else if (this.firstPlayer.total < this.secondPlayer.total) {
      this.winnerObj = { name: 'Player 2', score: this.secondPlayer.total }
    }
    else {
      this.winnerObj = { name: 'Draw', score: 0 }
    }
  }
// Refreshing Window to Start New Game------------------------
  refreshScreen(): void {
    location.reload();
  }

}
