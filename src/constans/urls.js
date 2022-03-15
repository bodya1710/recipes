const baseURL = 'https://api.spoonacular.com/recipes';

export default baseURL;

export const urls = {
    popular:`/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`,
    search:`/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}`,
    veggie:`/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`,
    dessert:`/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=dessert`
}