import { Component, OnInit } from '@angular/core';
import { getSudoku } from 'sudoku-gen';

type Difficulty = 'easy' | 'medium' | 'hard' | 'expert';
type Sudoku = {
  puzzle: string;
  solution: string;
  difficulty: Difficulty;
};
@Component({
  selector: 'app-grille',
  templateUrl: './grille.component.html',
  styleUrls: ['./grille.component.css']
})
export class GrilleComponent implements OnInit {

  sudoku!: Sudoku;
  innerPanel!: string[] | null;

  constructor() { }

  ngOnInit(): void {
    this.genSudoku('easy');
    //sépare en 9 string de 9
    this.innerPanel = this.sudoku.puzzle.match(/.{9}/g);
  }

  genSudoku(diff: Difficulty): void {
    this.sudoku = getSudoku(diff);
  }

}
