import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCategoriesService {

  private apiUrl = 'https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee';

  getRandomNumbers() {


    return fetch(`https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee`)
      .then(response => response.json())
      .then(response => {
        const allCategories = response.data.category.frontPage
        let categoryTitles = []
        //let categoriesItems = {"a":b}
        let categoriesItems: any = {};

        for(let i =0; i < allCategories.length; i++){
          const category = allCategories[i]
          let categoryItems = category.data
          //console.log(category)
          if(category.header == ""||category.header.length < 1||category.header=="Jätka"||category.header == "Peagi aeguvad"){
            continue
          }
          categoryTitles.push(category.header)
          try {
            let catItems = []
          
          
            //console.log(category)
          for(let x=0; x < categoryItems.length; x++){
              let categoryItem = categoryItems[x]
              let obj = {
                title: String,
                imgUrl: String
              };
              
              obj.title = categoryItem.heading;
              obj.imgUrl = categoryItem.verticalPhotos[0].photoTypes["80"]["url"]
              
              catItems.push(obj)
          }
          categoriesItems[category.header] = catItems
          } catch (error) {
            
          }
          

          //console.log(category.header)
        }

        let returnObj = {
          "categoryTitles": categoryTitles,
          "categoriesItems":categoriesItems
        }

        //console.log(returnObj)

        return returnObj
      });
  }
}
