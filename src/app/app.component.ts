import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    angularclassLogo: string = 'assets/img/angular-logo.png';
    name: string = 'Angular 2 Webpack Starter';
    url: string = 'https://twitter.com/AngularClass';
    title: string = 'app works!';

    /**
     * constructor
     */
    constructor() {
      // console.log('constructor of AppComponent called');
    }

    /**
     *  implements OnInit していなくても呼ばれるが、実装すべき。
     */
    ngOnInit(): void {
        console.log('Initial');
    }

}
