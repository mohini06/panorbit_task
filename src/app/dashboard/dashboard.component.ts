import { Component, OnInit } from '@angular/core';
import { SharedService } from '../_service/shared-servics.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
data :any;
  constructor(private userslist: SharedService,public router: Router) { }

  ngOnInit(): void {
    this.getUsers();

  }
  getUsers() {
    this.userslist.getAllusers()
      .subscribe(data => {
        console.log(data)

        this.data = data['users'];

      },
        error => {

          this.data = [];

        })
  }

  viewProfile(id){
    console.log(id)
    this.router.navigate(['view_profile'], { queryParams: {data: id }})
    
  }

}
