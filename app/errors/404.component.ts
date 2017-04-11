import { Component } from '@angular/core'

@Component({
    template: `
    <h1 class="errorMessage">404</h1>
    <h2>Whoops! That wasn't supposed to happen</h2>
    <h3>The page you requested doesn't seem to exist,<br/><a href="/">Go Home</a></h3>
  `,
    styles: [`
    .errorMessage {
      margin-top:150px;
      font-size: 170px;
      text-align: center;
    }
    h2, h3 { text-align: center;} `]
})
export class Error404Component {
    constructor() {
    }
}