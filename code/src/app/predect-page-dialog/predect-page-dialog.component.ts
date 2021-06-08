import { Component, OnInit } from '@angular/core';
import {DataService} from '../user_inputs/user_data_for_predection.service';
@Component({
  selector: 'app-predect-page-dialog',
  templateUrl: './predect-page-dialog.component.html',
  styleUrls: ['./predect-page-dialog.component.css']
})
export class PredectPageDialogComponent implements OnInit {
  public data;
  
  constructor(_dataserviceobject: DataService) { 

    this.data = _dataserviceobject.getdata();
    
  }

  ngOnInit(): void {
  }

}
