import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-new-applicants',
  templateUrl: './new-applicants.component.html',
  styleUrls: ['./new-applicants.component.css']
})
export class NewApplicantsComponent implements OnInit {

  @Input() newApplicant;
  new_applicant = ['Rosie Metts','James Scott','Jamie Laurenson','Elizabeth Hurton','Danny Wastson','Reha Scarlett']
  constructor() { }

  ngOnInit(): void {
  }

}
