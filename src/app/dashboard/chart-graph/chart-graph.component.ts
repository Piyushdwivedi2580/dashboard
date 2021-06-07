import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables  } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-chart-graph',
  templateUrl: './chart-graph.component.html',
  styleUrls: ['./chart-graph.component.css']
})
export class ChartGraphComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  var myChart = new Chart("myChart", {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul'],
        datasets: [{
          label: 'Applications Received',
          data: [65, 50, 80, 81, 56, 55, 40, 65, 50, 80],
          fill: false,
          backgroundColor: 'linear-gradient(to bottom right, red, yellow)',
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.4,
        },
        {
          label: 'Candidate',
          data: [15, 30, 60, 91, 50, 51, 90, 65, 70, 30],
          fill: false,
          borderColor: 'rgb(241 234 234 / 97%)',
          tension: 0.4,
        }]
    },
    // plugins: [plugin],
    options: {
      animations: {
        tension: {
          duration: 2000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }
      },
      scales: {
        y: { // defining min and max so hiding the dataset does not change scale range
          min: 0,
          max: 100
        }
      }
    }
});
    const plugin = {
      id: 'custom_canvas_background_color',
      beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext('2d');
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = 'lightGreen';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      }
    };
    
  }

}
