import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  contactDetailsForm: FormGroup=this.formBuilder.group({});
  submitted = false;
  id:any;
  Name:any;
  Email:any;
  Mobile:any;
  Address:any;
  UploadPhoto:any='';
  ContactDetails=[
    {
      id:1,
      Name:'sanika',
      Email:"sanika@gamil.com",
      Mobile:9762848915,
      Address:'pune',
      UploadPhoto:'assets/img/pic1.jpg'

    },
    {
      id:2,
      Name:'sanjana',
      Email:"sanjana@gamil.com",
      Mobile:987645677,
      Address:'mumbai',
      UploadPhoto:'assets/img/pic1.jpg'

    },
    {
      id:3,
      Name:'snehal',
      Email:"sneha@gamil.com",
      Mobile:987645677,
      Address:'mumbai',
      UploadPhoto:'assets/img/pic1.jpg'
    }
  ]
  constructor(private formBuilder: FormBuilder,private router:Router) { }
  ngOnInit(): void {
      this.contactDetailsForm = this.formBuilder.group({
        id:['',Validators.required],
        Name: ['', Validators.required],
        Email: ['', Validators.required],
        Mobile: ['', Validators.required],
        Address: ['', Validators.required],
        UploadPhoto: ['', Validators.required],
    });
  }
  get f() { return this.contactDetailsForm.controls; }
  edit(contact:any){
      this.id = contact.id;
      this.Name = contact.Name;
      this.Email = contact.Email;
      this.Mobile = contact.Mobile;
      this.Address = contact.Address;
      this.UploadPhoto = contact.UploadPhoto;
      this.submitted=true;
  }
  delete(id:any){
    debugger;
    let i = this.ContactDetails.findIndex(c =>  c.id ==id);
    if(i !== -1){
    this.ContactDetails.splice(i,1);
    }
  }
  onSubmit() {
    this.submitted = true;
      if (this.contactDetailsForm.invalid) {
        return;
      }
      else{
          let i = this.ContactDetails.findIndex(s =>  s.id == this.id);
            if(i == -1){
              this.ContactDetails.push(this.contactDetailsForm.value);
            }
      else{
        this.ContactDetails[i].id=this.id;
        this.ContactDetails[i].Name=this.Name 
        this.ContactDetails[i].Email=this.Email;
        this.ContactDetails[i].Mobile=this.Mobile;
        this.ContactDetails[i].Address=this.Address;
        this.ContactDetails[i].UploadPhoto=this.Address;
      }
    }
  }
  onReset() {
    this.submitted = false;
    this.contactDetailsForm.reset();
  }
  logout(){
    this.router.navigate(["login"]);
  }
}
