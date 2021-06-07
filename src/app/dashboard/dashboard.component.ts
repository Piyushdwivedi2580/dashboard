import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables  } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  total_c1 = {
    color:'#bb5cec',
    header:'Total Application',
    C_number:"7956",
    plus_perce:"3.59",
    percentage:"70 100",
    percentage_type:"70",
  }
  total_c2 = {
    color:'white',
    bgcolor:"#3797f3",
    bdcolor:"rgb(93 175 253)",
    header:'Scheduled Candidate',
    C_number:"4658",
    plus_perce:"0.04",
    percentage:"60 100",
    percentage_type:"60",
  }
  total_c3 = {
    color:'red',
    header:'Scheduled Candidate',
    C_number:"1601",
    plus_perce:"0.04",
    percentage:"40 100",
    percentage_type:"40"
  }
  total_application1 = {
    color:'white',
    name:'Application',
    percentage_type:"50%"
  }
  total_application2 = {
    color:'#3797f3',
    name:'Candidate',
    percentage_type:"65%"
  }
  total_application3 = {
    color:'red',
    name:'Applied',
    percentage_type:"40%"
  }
  total_application4 = {
    color:'white',
    name:'Onhold',
    percentage_type:"20%"
  }
  total_application5 = {
    color:'blue',
    name:'Scheduled',
    percentage_type:"80%"
  }
  new_applicant1 ={
    name:'Rosie Metts',
  }
  referalvalue1={
    color: 'btn-primary',
    referalno: '0564',
    users: '1478',
    referalno_percent:'12.00',
    users_percent:'39.14',
  }
  referalvalue2={
    color: 'btn-danger',
    referalno: '0662',
    users: '7956',
    referalno_percent:'3.5',
    users_percent:'9.0',

  }  
   
  constructor() { }

  ngOnInit(): void {
    var myChart = new Chart("circleChart", {
      type: 'doughnut',
      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 1
        }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }

}
