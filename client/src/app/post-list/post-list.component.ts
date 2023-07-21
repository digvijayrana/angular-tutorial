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
  count:number =2.76718
  today:Date =  new Date()
  @Output()
  messageEvent = new EventEmitter<String>();
sendMessage(){
  console.log('click Button')
  this.messageEvent.emit(this.outPutChildMessage)
}

onKeyUp($event:any){
  console.log("enter  press key code",$event.target.value)
}
 
onKeyUp1(username:any){
  console.log("enter  press key code", username)
}

// onKeyUp2(){
//   console.log("enter  press key code", this.name)
// }

postArray:Array<String> = ["Post1","Post2","Post3","Post4","Post5"]
postObject =[{username:"name1", id:1},{username:"name2",id:2}]


  constructor(){
    for(let i=0;i<this.postObject.length;i++){
      console.log(this.postObject[i])
    }
  }

}
