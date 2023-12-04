import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { SideNavComponent } from './app-core/common/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, LoginComponent, SideNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnChanges, OnInit {
  title = 'inmest-web';
  @Input()  name = "Lucky";

  profile = {
id: 324,
firstName: "Lucky",
lastName: "Dogbe",
  }
  genesis: string = "hello";

  constructor(){
    console.log("constructor");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, 'changes');
    // console.log(this.name, 'OnChanges');
    for(const inputChange in changes){
      console.log(changes[inputChange], inputChange);


    }
  }

  ngOnInit(): void {
      console.log('On Init');
  }
}
