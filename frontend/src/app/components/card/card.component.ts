import { Component, OnInit } from '@angular/core';
import { Office } from '../../models/office';
import { OfficeService } from '../../services/office.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  offices: any;

  constructor(
    private officeService: OfficeService
  ) {
    this.officeService.getOffices().subscribe(
      (data) => {
        console.log(data);
          this.offices = data;
      }, error => {
        console.log('error: ', error)
      });
   }

  ngOnInit(): void {
    

      console.log(this.offices)
  }

}
