import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  tree:string = "Mango";
  allowClick:boolean=false;

  constructor() {
      setTimeout(()=>{
        this.allowClick=true;
        this.tree = "Apple";
      },5000);
  }

  changeTree(tree="Orange"){
    this.tree = tree;
  }


  updateTree(event:Event){
    console.log(event.target);
    this.tree = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {

  }

}
