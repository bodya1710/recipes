import {axioService} from "./axio.service";
import {urls} from "../constans/urls";


export const recipeService ={
    getAll:()=>axioService.get(urls.popular),
    getSearch:(name)=>axioService.get(urls.search + `&query=${name}`),
    getAllVeg:()=>axioService.get(urls.veggie),
    getAllDes:()=>axioService.get(urls.dessert),
    getAllLocal:(cuisine)=>axioService.get(urls.popular + `&cuisine=${cuisine}`)
}