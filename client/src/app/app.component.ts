import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  email:String | undefined 
  parentMessage: String = "parent to child"
  receivedMessage($event: String){

    console.log($event)
  }

 
}
