import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../services/common.service';
import { ActivatedRoute } from '@angular/router';
import{Router} from '@angular/router'

@Component({
  selector: 'app-lost-edit',
  templateUrl: './lost-edit.component.html',
  styleUrls: ['./lost-edit.component.scss']
})
export class LostEditComponent implements OnInit {

  itemId='string';
  lostItem:any;
    title = "";
    description = "";
    identifying_question='';
    image="";
    imageUrl='';
    date_found="";
    location="";
    contact_name="";
    email="";
    phonenumber="";
    formMessageHidden =true;
  
    filename:string= '';
  
    myformdata:any;
  
    file:any = null;
    imgSrc:any = "";
    show = false;

  constructor(private cs:CommonService, private route:ActivatedRoute, private router:Router) { }

  trackFile(event:any){
    console.log(event);
    let myfile = event.target.files[0];
    this.filename = myfile;
    // it is an array so you need to target which index you want //
    console.log('new' + myfile);



    // If new file is not selected
    console.log(event.target.files.length);
    if(event.target.files.length === 0){
      this.file = null;
      this.imgSrc="";
      return;
    }
    // If new file is selected
    else{
      this.show = true;
      // Create FileReader
      let reader = new FileReader();
      console.log('FileReader',reader);

      // Set files to be read
      this.file = event.target.files[0];
      console.log('event.target.files[0]',this.file);

      // Event on completion of loading
      reader.onload = () =>{
        // Convert image file to base64 string
        this.imgSrc = reader.result;
        console.log('resultイベント',this.imgSrc);
      }

      // Perform file loading
      reader.readAsDataURL(this.file);
    }
  }




  // submit(itemName:any, description:any, image:any, date:any, location:any,name:any,email:any, phoneNumber:any ) {
  //   this.cs.editPost(itemName,description,image,date,location,name,email,phoneNumber).subscribe(data=> {
  //     this.formMessageHidden = false;
  //     console.log(data)
  //   })
  // }

  submit() {
    const formdata = new FormData();
    // FormData is predefied method
    formdata.append("image", this.filename);
    formdata.append("title", this.title);
    formdata.append("location", this.location);
    formdata.append("description", this.description);
    formdata.append("claimed", "false");
    formdata.append("identifying_question", this.identifying_question);
    formdata.append("contact_name", this.contact_name);
    formdata.append("email", this.email);
    formdata.append("phonenumber", this.phonenumber);
    formdata.append("date_found", this.date_found);
    formdata.append("_id", this.itemId);




    this.cs.editPost(formdata).subscribe(data =>{
          console.log(data)
          console.log("checking from client")
          this.router.navigate(['/']);
     })
  }



  ngOnInit(): void {
    let lostItemId:any = this.route.snapshot.paramMap.get("id");
    this.cs.getPostByID(lostItemId).subscribe((res)=>{

          console.log("res is ", res);
          this.lostItem = res;
          this.itemId = this.lostItem._id
          this.title = this.lostItem.title
          this.description = this.lostItem.description;
          this.identifying_question=this.lostItem.identifying_question;
          this.imageUrl=this.lostItem.image;
          this.date_found=this.lostItem.date_found;
          this.location=this.lostItem.location;
          this.contact_name=this.lostItem.contact_name;
          this.email=this.lostItem.email;
          this.phonenumber=this.lostItem.phonenumber;

          console.log(this.date_found)
          console.log(this.itemId)







    })
  }


}
