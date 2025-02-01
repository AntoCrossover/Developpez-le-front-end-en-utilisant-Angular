import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Olympic } from 'src/app/core/models/Olympic';
import { Participation } from 'src/app/core/models/Participation';
import { OlympicService } from 'src/app/core/services/olympic.service';


@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrl: './detail-country.component.scss'
})
export class DetailCountryComponent implements OnInit {
  OlympicData: any;


  constructor(private ServiceRouteEnCours: ActivatedRoute,private InstanceOlympicService: OlympicService) {}
  ngOnInit(): void {
    console.log(this.ServiceRouteEnCours.snapshot.params["name"]);
    let VarUrlCountrySeletc = this.ServiceRouteEnCours.snapshot.params["name"];

    this.OlympicData = [{
    name: VarUrlCountrySeletc, 
    series: []
    

  }];

///
this.InstanceOlympicService.getOlympics().subscribe(data => {
     let tableauOlympics : any[] = [];

  data.forEach((e: Olympic) => {
    if (e.country == VarUrlCountrySeletc) {

      e.participations.forEach((p:Participation) =>{
        console.log(p);
        tableauOlympics.push({ name: p.city, value: p.medalsCount });
       
      })

      }
     
     });


  this.OlympicData[0].series= tableauOlympics;
  console.log(this.OlympicData);
    });

  }

}