import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
selector:'client',
styleUrls:['./client.style.css'],
templateUrl:'./client.view.html'
})
export class ClientComponent{
 constructor(){
 console.log("Cliente");
}
}