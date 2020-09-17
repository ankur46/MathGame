import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  arr: any[] = [];
  constructor() { }


// Getting Array of random Values---------------------
  getRandomArray(): string[] {
    if(this.arr.length === 0){
      this.arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
      return this.arr;
    }
  }

// Removing first element from array and adding it to active player array----------------
  getStart(playerArr): string[] {
    playerArr.push(this.arr.slice(0).shift());
    this.arr.shift();
    return playerArr;
  }

// Removing last element from array and adding it to active player array----------------
  getEnd(playerArr): string[] {
    playerArr.push(this.arr.slice(-1).shift());
    this.arr.pop();
    return playerArr;
  }


// Checking if Array is empty or not---------------------------------
  checkEmpty(): boolean {
    return this.arr.length === 0;
  }
}
