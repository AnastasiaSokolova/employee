import { Component } from '@angular/core';


@Component({
    selector: 'n-app',
    template: `
           <h1>Welcome to employee app!</h1>
          <!-- <list-emp></list-emp> -->
           <router-outlet></router-outlet>
    `
})

export class AppComponent {

}

