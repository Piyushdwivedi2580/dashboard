import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-referal-compaings',
  templateUrl: './referal-compaings.component.html',
  styleUrls: ['./referal-compaings.component.css']
})
export class ReferalCompaingsComponent implements OnInit {

  @Input() referaldata;
  constructor() { }

  ngOnInit(): void {
  }

}
