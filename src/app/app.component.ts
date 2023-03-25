import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  name = 'Jquery Integration With Angular!';
  isJqueryWorking: any;
  ngOnInit()
  {
    // $('body').scrollspy({
    //   target: '#mainNav',
    //   offset: 80
    // });
    // $('body').scrollspy({ target: '#mainNav' })
  }
}

