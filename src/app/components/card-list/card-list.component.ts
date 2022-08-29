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
  displayedColumns: string[] = ['id', 'name', 'status', 'rarity', 'patch'];

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    this.http.get(Constants.API_CARD_LIST_TRIAD)
      .subscribe((resultado:any) => {
        console.log(resultado.results);
        this.cardList = resultado.results;
      });
  }

}
