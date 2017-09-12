import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
selector:'body-app',
templateUrl:'../../views/body/body.view.html'
})
export class BodyComponent{
 constructor(){
 console.log("hola mundo");
}
}