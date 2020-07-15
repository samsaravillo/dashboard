import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from './../../api.service';
import { Smartphone } from './../../api.interface';
import { Subscription } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  // dataSource:any = [];
  teamdisplayedColumns: string[] = ['id', 'abbreviation', 'full_name', 'city', 'conference', 'division'];
  teams:any = []; 
  smartphone: Smartphone[] = [];
  headers = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() { 
    this.getTeamsDetails();
    this.getSmartphones();
  }

  ngOnDestroy() {

  }
  
  getTeamsDetails() { 
    this.subscriptions.add(this.apiService.getAllTeams().subscribe(data => {
      this.teams = data['data'];
      console.log('teams', this.teams);
      return data;
    }));
  }

  getSmartphones() {
    this.subscriptions.add(this.apiService.getSmartphone()
      .subscribe(data => {
        const keys = data.headers.keys();
        this.headers = keys.map(key => `${key}: ${data.headers.get(key)}`);
        for (const d of data.body) {
          this.smartphone.push(d);
        }
        console.log(JSON.stringify(this.smartphone));
      }));
  }

}
