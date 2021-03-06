import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus='No server created';
  serverName='TestServer';
  username:any;

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus='Server is created. The name is '+ this.serverName;

  }

  onUpdateserverName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
