import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
declare var  JQuerry: any;
declare var $: any;
@Component({
selector:'client',
styleUrls:['./scholar.style.css'],
templateUrl:'./scholar.view.html'
})
export class ScholarComponent implements OnInit{
 constructor(){
 console.log("Cliente");
}
ngOnInit(){
}
}
