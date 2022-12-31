import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { ActivatedRoute } from '@angular/router';
import { LostItem } from '../interface/interface';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.scss']
})
export class PostdetailsComponent implements OnInit {

  postdetail:LostItem;

  constructor(private cs:CommonService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id:any = this.route.snapshot.paramMap.get("id");
    this.cs.getPostByID(id).subscribe(res => {
      // this.postdetail = res.data;
      console.log(this.postdetail);
    })
  }

}
