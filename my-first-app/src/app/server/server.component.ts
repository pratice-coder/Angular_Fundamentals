import { Component } from "@angular/core";

// Making an class with @Component just tells that this class is a Angular Components 
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['../app.component.css']
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = '';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? "Online" : "Offline";
    }

    getServerId() {
        return this.serverId;
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'Online' ? 'green' : 'red';
    }
 } 