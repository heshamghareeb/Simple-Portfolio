import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  ngOnInit()
  {
    // Activate scrollspy to add active class to navbar items on scroll
    // $('body').scrollspy({
    //     target: '#mainNav',
    //     offset: 80
    //   });
      // $('body').scrollspy({ target: '#mainNav' })

  }
  currentSection = 'section1';


  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    console.log(this.currentSection);
    console.log("onSectionChange");

  }
    scrollTo(section:string):void {
    document.querySelector('#' + section)!.scrollIntoView();
    this.onSectionChange(section)
    console.log(this.currentSection);
    console.log("this.currentSection2");
  }
}
