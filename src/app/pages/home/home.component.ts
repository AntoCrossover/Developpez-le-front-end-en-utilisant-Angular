import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Olympic } from 'src/app/core/models/Olympic';
import { Participation } from 'src/app/core/models/Participation';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public olympics$: Observable<any> = of(null);
  OlympicData:any=[];

  constructor(private InstanceOlympicService: OlympicService, private router:Router) {}

  ngOnInit(): void {
    this.InstanceOlympicService.getOlympics().subscribe(data => {
      let tableauOlympics : any[] = [];

     data.forEach((e:Olympic) => {
       
       console.log(e);
let nombreMedaille = 0;

       e.participations.forEach((PaysParticipation: Participation) => {
         nombreMedaille += PaysParticipation.medalsCount;
         //console.log(PaysParticipation);
         
       }
       )
       //console.log(nombreMedaille);
       tableauOlympics.push({ name: e.country, value: nombreMedaille });



     });

     this.OlympicData = tableauOlympics;
    });

   
    
  }
  //paramètre mettre le pays
  
  OnCountrySelected(event:any): void {
   this.router.navigate(["detail-country/"+event.name]);
    console.log(event);
  }
}
