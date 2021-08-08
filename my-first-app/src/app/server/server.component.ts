import { Component } from "@angular/core";

// Making an class with @Component just tells that this class is a Angular Components 
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['../app.component.css']
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    getServerId() {
        return this.serverId;
    }

    getServerStatus() {
        return this.serverStatus;
    }
 } 