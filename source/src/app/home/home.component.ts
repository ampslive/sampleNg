import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myTeam : Array<Team>;
  IsActive : any;
  title = 'sampleNg';
  constructor(private _homeService : HomeService) {
  }

  ngOnInit() {
    console.log('Hi');
    this.getTeams();
   }

  getTeams() {
    this._homeService.getTeamService().subscribe(t=> {
      this.myTeam = t;
      console.log(this.myTeam);
    })
  }
  
  btnClick() {
    this.IsActive=true;
    alert('Button Clicked' );
  }

}
