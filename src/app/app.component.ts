import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'HR-Management';

  public config: any ={
  type:'bar', //this denotes tha type of chart

data:{
labels:['JAN','FEB','MAR'],

datasets:[

{ 
  label:'UI UX',
  data:['123','260','105','285'],
  backgroundColor:'#38ce3c',
},

{
  label:'Development',
  data:['120','140','180','220'],
  backgroundColor:'#ff4d6b',
},


{
  label:'Testing',
  data:['180','120','60','134'],
  backgroundColor:'#ffde73',
},


],
},
options:{
  aspectRatio: 1,
},
  };
chart: any;
ngOnInit(): void {  
  this.chart = new Chart('MyChart', this.config);
}

}
