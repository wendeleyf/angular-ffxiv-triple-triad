import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from 'src/app/config/constants';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  
  cardList:any = [];
  rarities = {
    rarity1 : 'assets/img/rarity1.png',
    rarity2 : 'assets/img/rarity2.png',
    rarity3 : 'assets/img/rarity3.png',
    rarity4 : 'assets/img/rarity4.png',
    rarity5 : 'assets/img/rarity5.png',
  }

  displayedColumns: string[] = ['id', 'icon','rarity', 'name', 'status', 'source', 'patch'];

  constructor(private http: HttpClient, public dialog: MatDialog) { }
  
  rowClick(row: any){
    let dialogRef = this.dialog.open(
      CardComponent, 
      {
        width:'50%',
        data: row
      }
    )
  }

  ngOnInit(): void {
    this.http.get(Constants.API_CARD_LIST_TRIAD)
      .subscribe((resultado:any) => {
        console.log(resultado.results);
        this.cardList = resultado.results;
      });
  }

}
