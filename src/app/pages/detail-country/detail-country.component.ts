import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail-country',
  standalone: true,
  imports: [],
  templateUrl: './detail-country.component.html',
  styleUrl: './detail-country.component.scss'
})
export class DetailCountryComponent implements OnInit {

  constructor(private ServiceRouteEnCours: ActivatedRoute) {}
  ngOnInit(): void {
    console.log(this.ServiceRouteEnCours.snapshot.params["name"]);
  }




}

