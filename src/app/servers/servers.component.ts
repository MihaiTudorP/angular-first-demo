import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = '';
  servers = ['Testserver', 'Testserver 2'];
  serverCreateStatus = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(): void{
    this.servers.push(this.serverName);
    this.serverCreateStatus = true;
  }

  onUpdateServerName(event: Event): void{
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
