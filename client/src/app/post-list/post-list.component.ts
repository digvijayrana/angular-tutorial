import { Component,Input,Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent{
  @Input()
  fromParent : String | undefined;
  childMessage :String= "This is from child component"
  outPutChildMessage: String= "This is the Output Child message using click the button"
  @Output()
  messageEvent = new EventEmitter<String>();
sendMessage(){
  console.log('click Button')
  this.messageEvent.emit(this.outPutChildMessage)
}
 
}
