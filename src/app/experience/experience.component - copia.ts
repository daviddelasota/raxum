import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
selector:'client',
styleUrls:['./experience.style.css'],
templateUrl:'./experience.view.html'
})
export class ExperienceComponent{
 constructor(){
 console.log("Cliente");
}
}