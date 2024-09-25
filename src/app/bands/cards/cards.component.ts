import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
    @Input () imgURL: string="";
    @Input () h3Title: string="";
    @Input () pDescription: string="";
    @Input () hrefLink: string=""
}
