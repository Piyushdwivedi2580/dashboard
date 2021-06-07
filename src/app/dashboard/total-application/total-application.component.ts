import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-total-application',
  templateUrl: './total-application.component.html',
  styleUrls: ['./total-application.component.css']
})
export class TotalApplicationComponent implements OnInit {

  @Input() progress;
  constructor() { }

  ngOnInit(): void {
  }

}
