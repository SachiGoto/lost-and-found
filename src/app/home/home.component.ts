import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts:any = [];
  postDates:any = [];
  showInfo:boolean = false;
  hidden:boolean=true;
  status="none";
  // postDates:any = [];
  dateString:any = [];
  claim:boolean = false;
  claimStatus = false;
  localStorage:any;
  

  public isCollapsed: boolean[] = [];

  constructor(private cs:CommonService) { }

  getDescription(description:any){
    if(description.style.display == "none"){
      description.style.display = "block"; // example: "#f00"
    }else{
      description.style.display = "none";
    }
  }

  claimItem(description:any, listcontainer:any, id:string){
  //   let claimStatus;
  //  if(this.claim){
  //    claimStatus = "false"
      
  //  }else{
  //   claimStatus = "true"
  //  }

   const item = {
    itemID: id,
    claimStatus: true,
}

const itemID = id; 

window.localStorage.setItem(itemID, JSON.stringify(item));
this.localStorage = localStorage.getItem("item");

console.log("local storage is ", this.localStorage)




// this.claim = item.claimStatus;



    if(description.style.display == "block"){
      description.style.display = "none"; // example: "#f00"
    }else{
      description.style.display = "block";
    }

    // this.claim = !this.claim;

  // this.claimStatus = true;
  listcontainer.style.filter = "grayscale(1)";
  listcontainer.style.pointerEvents = "none";

    // if(this.claim === true){
    //   listcontainer.style.filter = "grayscale(1)";
    //   listcontainer.style.pointerEvents = "none";
    // } else {
    //   listcontainer.style.backgroundColor = "";
    // }

    // this.cs.claim(id).subscribe(res => {
    //   console.log("Claim completed");
    // })
   
  }




  ngOnInit(): void {
    this.cs.getAllposts().subscribe(posts =>{
      this.posts = posts;
      this.posts = this.posts.sort((x:any,y:any)=> x.date > y.date?-1:1)
     

      for(let i = 0; i < this.posts.length; i++) {
        this.dateString.push(new Date(this.posts[i].date).toDateString());
        if(this.localStorage != null) {
          // get the id of found item
     
          console.log("json local storage " , JSON.parse(this.localStorage))
          
  
          // update UI of find item to show it has been found
  
        }
        
      
      }

      console.log("All data: ", this.posts);
   })

   


 
    
  


  }



}


