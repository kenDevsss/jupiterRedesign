import { Component, OnInit  } from '@angular/core';
import { GetCategoriesService } from './get-categories.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jupiter-app';
  categories: string[] = [];
  categoriesItems: any = {};
  //categoriesItems: ObjectType=data;

  constructor(private randomNumberService: GetCategoriesService) { }

  ngOnInit(): void {
    this.fetchRandomNumbers();
  }

  async fetchRandomNumbers() {
    await this.randomNumberService.getRandomNumbers()
      .then(data => {
        this.categories = data.categoryTitles;
        this.categoriesItems = data.categoriesItems;
       // console.log(this.categoryItems["Enim vaadatud"])
      })
      .catch(error => {
        console.error('Error fetching random numbers:', error);
      });
  }
  
}
/* 
import { DOCUMENT } from '@angular/platform-browser';    
constructor (@Inject(DOCUMENT) private document) { }

ngOnInit() {
  this.document.getElementById('theme').setAttribute('href', 'global.css');
} */