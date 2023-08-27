import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})


export class ItemListComponent {
  @Input() imageLink: string = '';
  @Input() showTitle: string = "";
}

/* 

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent {
  @Input() imageUrl: string;
}


*/