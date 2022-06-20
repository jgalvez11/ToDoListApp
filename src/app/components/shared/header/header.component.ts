import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  urlImage =
    'https://imgs.search.brave.com/9pqdH1kVdVbLSFjaA9cX5awUM-4eDzmQPLnbgbGhkWg/rs:fit:920:677:1/g:ce/aHR0cHM6Ly93d3cu/bmV0Y2xpcGFydC5j/b20vcHAvbS80My00/MzE1ODJfdGFzay1j/bGlwYXJ0LnBuZw';

  constructor() {}

  ngOnInit(): void {}
}
