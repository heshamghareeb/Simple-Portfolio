import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  nameLabel:boolean = false;
  nameLabelValue:boolean = false;

  onFocusName(){
    this.nameLabel = true;
  }
  onBlurName(event:any){
    this.nameLabel = false;
    if(!event.target.value){
      this.nameLabelValue = true;
    }else{
      this.nameLabelValue = false
    }
  }

  emailLabel:boolean = false;
  emailLabelValue:boolean = false;
  onFocusEmail(){
    this.emailLabel = true;

  }
  onBlurEmail(event:any){
    this.emailLabel = false;
    if(!event.target.value){
      this.emailLabelValue = true;
    }else{
      this.emailLabelValue = false
    }
  }

  phoneLabel:boolean =false;
  phoneLabelValue:boolean = false;
  onFocusPhone(){
    this.phoneLabel =true;
  }
  onBlurPhone(event:any){
    this.phoneLabel = false;
    if(!event.target.value){
      this.phoneLabelValue = true;
    }else{
      this.phoneLabelValue = false
    }
  }

  messageLabel:boolean =false;
  messageLabelValue:boolean = false;
  onFocusMessage(){
    this.messageLabel =true;
  }
  onBlurMessage(event:any){
    this.messageLabel = false;
    if(!event.target.value){
      this.messageLabelValue = true;
    }else{
      this.messageLabelValue = false
    }


  }

  onSubmit(){
    // this.nameLabelValue = (<HTMLInputElement>document.getElementById("name")).value;
    // console.log(this.nameLabelValue);

  }
}
