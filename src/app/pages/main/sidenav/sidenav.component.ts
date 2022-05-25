import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {
  @ViewChild('listOptions', {static: false}) navList;

  navOptions: string[] = ['Dashboard', 'Settings', 'Log Out'];

  selectedOption = 'Dashboard';

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.log(this.navList.value)
    // this.navList.value = 'Settings'
    console.log(this.navList)
  }

  optionSelect(option) {
    this.selectedOption  = option;
  }

}
