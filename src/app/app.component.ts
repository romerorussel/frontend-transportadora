import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend-transportadora';

  tiles: Tile[] = [
    {text: '', cols: 1, rows: 4, color: 'lightblue'},
    {text: '', cols: 3, rows: 2, color: 'lightgreen'},
    {text: '', cols: 4, rows: 1, color: 'softorange'},
  ];

  ngOnInit(){
  }
}
