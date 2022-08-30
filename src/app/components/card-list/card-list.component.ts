import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/config/constants';

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

  constructor(private http: HttpClient) { }
  
  rowClick(row: any){
    console.log(row);
  }

  ngOnInit(): void {
    this.http.get(Constants.API_CARD_LIST_TRIAD)
      .subscribe((resultado:any) => {
        console.log(resultado.results);
        this.cardList = resultado.results;
      });
  }

}
