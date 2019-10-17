import { Component, OnInit } from '@angular/core';
import { dataservice } from '../services/Dataservice';
import { CreatevehicleserviceService } from '../services/createvehicleservice.service';
import { FormGroup, FormBuilder, FormControlName, FormControl } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Router } from '@angular/router';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-inputs';

@Component({
  selector: 'app-vehicle-create',
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.css']
})
export class VehicleCreateComponent implements OnInit {

 

 
  constructor(private formbuilder:FormBuilder,private service:CreatevehicleserviceService
    ,private router:Router) { 
    
  }


  ngOnInit() 
  {
  
   
  }

  onClickSubmit(data) {
    debugger;
    console.log(data);
    this.service.create(data).subscribe(
        res=>{
          alert('saved successfully');
          console.log('hi');
          this.router.navigate(['/Home']);
        },(error:AppError)=>{
          if(error instanceof BadInput)
          {
            alert('bad request');
          }
          else throw error;
        });
        
        
        
      
  }

 

 
}
