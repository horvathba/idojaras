import {useState} from "react";
export const useFavourites = () => {

const[favourites,setFavourites] = useState([]);
    
const add = (elem) => {
setFavourites([...favourites,elem]);
};
return {favourites,add};
};
