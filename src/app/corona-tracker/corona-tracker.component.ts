import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../services/corona.service';

@Component({
  selector: 'app-corona-tracker',
  templateUrl: './corona-tracker.component.html',
  styleUrls: ['./corona-tracker.component.css']
})
export class CoronaTrackerComponent implements OnInit {

  countries:any
  country:any
  confirmed:Number
  recovered:Number
  deaths:Number


  constructor(private corona:CoronaService) { }

  ngOnInit(): void {
    this.corona.getCountries().subscribe(data=>{
      console.log(data);
      this.countries = data;
    })
  }
  getCoronaData()
  {
    this.corona.getCoronaRealTimeData(this.country).subscribe(data=>{
      console.log(data)
      var index = data.length - 1
      this.confirmed= data[index].Confirmed
      this.recovered= data[index].Recovered
      this.deaths= data[index].Deaths
    })
  }

  getCountry(country:any)
  {
    this.country = country
  }

}
