import { Component, Input, ElementRef, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-category-lane',
  templateUrl: './category-lane.component.html',
  styleUrls: ['./category-lane.component.css']
})
export class CategoryLaneComponent {
  @Input() CategoryTitle: string = '';
  //@Input() cards: Object = {}
  @Input() cards: Array<any> = [];
  

  /* scrollButton(button: any){
    console.log("hi")
    const scrollableDiv = button
    console.log(scrollableDiv)

  } */
  @ViewChild('CategoryLaneComponent', { static: true }) CategoryLaneComponent!: ElementRef;
  @ViewChild('leftArrow', { static: true }) leftArrow!: ElementRef;

    scroll(direction: string): void {
    if (this.CategoryLaneComponent) {
      const containerElement = this.CategoryLaneComponent.nativeElement;
      const leftArrowEl = this.leftArrow.nativeElement;
      
      let fCard = containerElement.children[0]
      let xCoord = fCard.getBoundingClientRect();

      
      
      var docEl = document.documentElement;
      let scrollAmount = 0;

      if(direction == "L"){
        scrollAmount = -1200

        if(xCoord.left >= -1260){
          leftArrowEl.style = "display: none"
        }
         
      }else if(direction == "R"){
        scrollAmount = 1200

        if(xCoord.left <= 60){
          leftArrowEl.style = ""
        }
      }

       




       containerElement.scroll({
        top: 0,
        left: Math.abs(xCoord.left) + scrollAmount,
        behavior: "smooth",
      });  

    }
  }
}
