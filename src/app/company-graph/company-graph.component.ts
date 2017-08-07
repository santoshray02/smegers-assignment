import { Component, OnInit ,OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { CompanyGraphService } from './company-graph.service'

@Component({
  selector: 'company-graph',
  templateUrl: './company-graph.component.html',
  styleUrls: ['./company-graph.component.css']
})
export class CompanyGraphComponent implements OnInit ,OnDestroy{
  title = "HDFC BANK ";

  private routeSub :any;
  slug : string;
  private linedata =[]; 
  constructor(private route:ActivatedRoute, private graphService: CompanyGraphService) { }

    public lineChartData : Array<any> = [
        {data: [
          null, null, null, 189.959795109746, 197.71928584431, 219.970607249454, 307.678835624819, 281.625310309537, 249.119276388136, 227.100294661012, 188.794277595195, 169.215123451412, 258.013509416648, 276.27126381467, 322.691660573649, 323.487845020358, 367.61921149505, 405.780443764135, 447.07583943518, 409.987251223347, 448.565660818427, 461.007917141224, 437.402813351776, 488.791340421378, 509.46681790125, 572.204908113496, 626.12896425413, 635.592297266244, 659.238528347662, 617.448102158967, 647.100254100593, 654.104507275281, 776.032203654182, 825.764714228535, 911.757260470622, 1036.6605724851, 997.749806712709, 1065.40547367068, 1068.48023694246, 1021.91245126184, 1133.84375294572, 1247.825, 1220.8, 1318.15, 1626.0
          
          ], label: 'Series A'},
    ];

    public lineChartLabels: Array<any> =[];

    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
    { // grey
        backgroundColor: 'rgba(17, 94, 239,0.2)',
        borderColor: 'rgba(4, 58, 160,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#0D337B',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }
   lab = []
  ngOnInit() {
  	this.routeSub = this.route.params.subscribe(params => {
  		console.log(params)
  		this.slug = params['slug']
  	})
    this.graphService.getTestData().subscribe(responseline => {
      this.linedata = responseline.stock.graphs.stock_price.values;
      /*this.lineChartData = [
        {data: this.linedata, label: 'Series B'},
    ];*/
      this.lineChartLabels = responseline.stock.graphs.x_axis.values;
    })
    
  }
  ngOnDestroy(){
    this.routeSub.unsubscribe()
  }

}
