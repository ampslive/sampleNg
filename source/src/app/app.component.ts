import { Component } from '@angular/core';
import { Team } from './models/team.model';
import { AppService } from './app.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sampleNg';
  myTeam : Array<Team>;
  

  constructor(private _appService : AppService) {
  }

  ngOnInit() {
    console.log('Hi');
    this.getTeams();
   }

  getTeams() {
    this._appService.getTeamService().subscribe(t=> {
      this.myTeam = t;
      console.log(this.myTeam);
    })
  }
  
  btnClick() {
    alert('Button Clicked' );
  }

}
