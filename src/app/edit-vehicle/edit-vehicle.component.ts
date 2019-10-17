import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { EditvehicleService } from '../services/Editvehicleservice';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent implements OnInit {

vehiclegroup:FormGroup; 
vehicledetails
  constructor(private formbuilder:FormBuilder,private service:EditvehicleService
    ,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    var id=this.activatedRoute.snapshot.params.id;
    this.service.getByID(id).subscribe(
      res=>{
this.vehicledetails=res;
console.log(this.vehicledetails);
})
      }
    
      Save(data)
      {
        debugger;
this.service.update(data).subscribe(
  res=>{
   alert('Updated Successfully');
   this.router.navigate(['/Home']);
  }
)
      }

}
