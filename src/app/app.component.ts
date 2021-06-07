import { Component } from '@angular/core';
import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interview';
  
  ngOnInit() {
    $(document).ready(function() {
        //  alert('we call alert from JQuery');
    });
    
  }
   
}
