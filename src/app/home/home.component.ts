import { Component, OnInit } from '@angular/core';
import { CreatevehicleserviceService } from '../services/createvehicleservice.service';
import { Router } from '@angular/router';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:CreatevehicleserviceService,private router:Router) { }
  vehicles:any;
  ngOnInit() {
    this.service.getAll().subscribe(
      response=>{
        
        this.vehicles=response;
        console.log(this.vehicles);
      })
  }
  Update(id)
  {
    debugger;
    console.log(id);
    this.router.navigate(['/edit/'+id]);
  }
  Delete(data){
    debugger;
    this.service.Delete(data.id).subscribe(
      res=>{

        let index=this.vehicles.indexOf(data);
        this.vehicles.splice(index,1);
      },(error:AppError)=>{
        debugger;
        if(error instanceof NotFoundError)
        {
          debugger;
          alert('This post has already been deleted');
        }
        else
        {
       throw error;
        }
      });
      
    
  }

}
