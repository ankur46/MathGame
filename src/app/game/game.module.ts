import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
	{
		path: '',
		component: GameComponent
	}
];

@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class GameModule { }
