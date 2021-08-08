import { Component, OnInit } from '@angular/core';


@Component({
  /**
   * selector should be unique.
   */
  selector: 'app-servers', // This is CSS Selector
  /**
   * There are other ways to define a selector as well.
   * 1. selector attribute
   *    selector: '[app-servers]'
   * 2. selector by class
   *    selector: '.app-servers'
   */
  templateUrl: './servers.component.html',
  /**
   * You can als define in-line template instead of templateUrl like below
   * template: `<app-server>
   *            <app-server`
   * When to use external template (templateUrl) & inline template ?
   * Ans - If you have a very few lines of html code to have, then inline template will be good.
   *       but any component.html with more code should be done with in external templateUrl
   */
  styleUrls: ['./servers.component.css']
  /**
   * You can also define in-line styles instead of styleUrls like below
   * styles: `
   *          h3 {
   *            color: dodgerblue;
   *          }`
   * When to use external styles (styleUrls) & inline styles ?
   * Ans - If you have a very few lines of css code to have, then the in-line styles will be good.
   *       but component.css with more code should be dine with external styles
   */
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}