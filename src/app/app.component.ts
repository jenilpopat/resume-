import { Component } from '@angular/core';
import { ObjectiveComponent } from './objective/objective.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  resume = {
  name : 'Jenil Popat',
  email : 'jenilpopat99@gmail.com',
 title1 : 'front-end-devloper',
  objective : 'Critical thinker with an instinct for design who plans to use these qualities in a front-end developer role that allows me to further develop my skills.',
  skills : ['HTML','CSS','JavaScript','Angular','PHP','React.js'],
  education:[
    {
      school: 'V.L.Gelani',
      program: '12th scince ',
      percentage : '72%',
      from : 2015,
      to: 2017
    },
    {
      school: 'marwadi university',
      program: 'BTech IT ',
      percentage: '7.69 cpi',
      from : 2017,
      to: 2021
    }
  ]

  
}
  title: any;
}
