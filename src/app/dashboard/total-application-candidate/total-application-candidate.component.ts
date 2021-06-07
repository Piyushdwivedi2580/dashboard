import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-total-application-candidate',
  templateUrl: './total-application-candidate.component.html',
  styleUrls: ['./total-application-candidate.component.css']
})
export class TotalApplicationCandidateComponent implements OnInit {

  total_color1 = "#bb5cec";
  total_color2 = "green";
  total_color3 = "red";
  @Input() hero;
   
  constructor() { }

  ngOnInit(): void {
  }

}
