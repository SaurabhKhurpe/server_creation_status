import { Component, OnInit } from '@angular/core';

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html',
    styles : [`
    .online{
        color = white;
    }
    `]
})
export class ServerComponent implements OnInit{
    allowNewServer = false;
    allowNewUser = false;
    serverCreationStatus = "No server was created";
    serverName = "";
    serverCreated = "online";
    userName = "";
    servers = ['one','two'];

    constructor(){
        setTimeout(() =>{
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit(){

    }

    onCreateServer(){
        this.serverCreated = 'online';
        this.servers.push(this.serverName);
        this.serverCreationStatus = "Server is created " + this.serverName;
    }

    onUpdateServerName(event: Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    getColor(){
        return this.serverCreated === 'online' ? 'green' : 'red';
    }
}