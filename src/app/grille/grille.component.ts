import { Component, Input, OnInit } from '@angular/core';
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

  @Input()
  set difficulte(diff: string) {
    this.genSudoku(diff as Difficulty);
  }
  sudoku!: Sudoku;
  innerPanel!: string[] | null;
  innerSoluce!: string[] | null;

  constructor() { }

  ngOnInit(): void {
    this.genSudoku(this.difficulte as Difficulty);
  }

  genSudoku(diff: Difficulty): void {
    this.sudoku = getSudoku(diff);
    //sépare en 9 string de 9
    this.innerPanel = this.sudoku.puzzle.match(/.{9}/g);
    this.innerSoluce = this.sudoku.solution.match(/.{9}/g);
  }

}
