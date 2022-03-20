import {axioService} from "./axio.service";
import baseURL, {urls} from "../constans/urls";


export const recipeService ={
    getAll:()=>axioService.get(urls.popular),
    getById:(id)=>axioService.get(baseURL + `/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`),
    getSearch:(name)=>axioService.get(urls.search + `&query=${name}`),
    getAllVeg:()=>axioService.get(urls.veggie),
    getAllDes:()=>axioService.get(urls.dessert),
    getAllLocal:(cuisine)=>axioService.get(urls.popular + `&cuisine=${cuisine}`)
}