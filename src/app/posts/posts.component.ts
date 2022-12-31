import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})


export class PostsComponent implements OnInit {

  constructor(private http:CommonService) { }

  ngOnInit(): void {

  }

}
