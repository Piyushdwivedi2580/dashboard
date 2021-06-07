import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {


      $(document).ready(function(){
        var month = new Array();
          month[0] = "January";
          month[1] = "February";
          month[2] = "March";
          month[3] = "April";
          month[4] = "May";
          month[5] = "June";
          month[6] = "July";
          month[7] = "August";
          month[8] = "September";
          month[9] = "October";
          month[10] = "November";
          month[11] = "December";
          var day_name = new Array();
          day_name[0] = "Sunday";
          day_name[1] = "Monday	";
          day_name[2] = "Tuesday";
          day_name[3] = "Wednesday";
          day_name[4] = "Thursday";
          day_name[5] = "Friday";
          day_name[6] = "Saturday";
          
          var d = new Date();
          var day_name2 = day_name[d.getDay()];
          var day = d.getUTCDate();
          var month2 = month[d.getMonth()];
          var year = d.getUTCFullYear();
          var date = day + " " +month2 +  " " + year;
          document.getElementById("day_name").innerHTML = day_name2;
          document.getElementById("current_date").innerHTML = date;
        // alert(today);
        var mainContent = $('.cd-main-content'),
          sidebar = $('.cd-side-nav'),
          sidebarTrigger = $('.cd-nav-trigger');
      
          sidebarTrigger.on('click', function(event){
            event.preventDefault();
            $([sidebar, sidebarTrigger]).toggleClass('nav-is-visible');
          });
          $('.cd-side-nav ul').on('click', 'li', function() {
            $('.cd-side-nav ul li.active').removeClass('active');
            $(this).addClass('active');
        });
      });

  }

}
