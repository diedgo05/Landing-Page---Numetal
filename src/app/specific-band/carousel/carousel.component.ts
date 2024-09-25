import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input () img1URL: string="";
  @Input () title0: string="";

  @Input () img2URL: string="";
  @Input () title2: string="";

  @Input () img3URL: string="";
  @Input () title3: string="";

  @Input () img4URL: string="";
  @Input () title4: string="";

  @Input () img5URL: string="";
  @Input () title5: string="";

  @Input () img6URL: string="";
  @Input () title6: string="";

  @Input () img7URL: string="";
  @Input () title7: string="";
}
