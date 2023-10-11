import { Component, OnInit, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'my-angular-app';
  my_name = 'My name is Maneesha!';
  name = 'Maneesha Gunawardhana';
  show: boolean = true;

  public employee: any = [
    { id: 1, name: 'Maneesha', salary: 120000, gender: 'male' },
    { id: 2, name: 'Gawesha', salary: 120000, gender: 'male' },
    { id: 3, name: 'Ayesha', salary: 120000, gender: 'female' },
    { id: 4, name: 'Naduni', salary: 120000, gender: 'female' },
  ];
  ngOnInit() {}
  ngAfterViewInit() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
      });

      signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
      });
    }
  }
}
