import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { SharedService } from '../_service/shared-servics.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  user:any;
breakpoint:number;

  constructor(private route: ActivatedRoute,private userdetail: SharedService,public router: Router) { }

  ngOnInit(): void {
    this.getUserdetail(this.route.snapshot.queryParams['data']);
    // this.breakpoint = (window.innerWidth <= 800) ?2 :2;

  }
  getUserdetail(id){
    this.userdetail.getAllusers()
      .subscribe(data => {
        console.log(data)
       for(let i=0;i<data['users'].length;i++)
       {
       
        if(data['users'][i].id==id)
        {
          this.user =data['users'][i] ;
          console.log(this.user.name)
        }
        
       }
        

      },
        error => {

          this.user = [];

        })
  }
  viewProfile(id){
    console.log(id)
    this.router.navigate(['view_profile'], { queryParams: {data: id }})
    
  }
}
