import React , {useState ,createContext} from 'react';
import { v4 as uuidv4 } from "uuid";

export const ProductContext = createContext();


export const ProductProvider = (props) =>{
    const[products,setProducts]=useState([
        {
            id :  uuidv4(),
            prodname : "Oil",
            prodbrand : "Bharat",
            prodprice : "1000",
            prodquant : "Gallon",
            prodstock : "yes"
        },
        {
            id :  uuidv4(),
            prodname : "Butane",
            prodbrand : "Bharat",
            prodprice : "5500",
            prodquant : "Litre",
            prodstock : "no"
        }
   
   ]);
   return (
    <div>
        <ProductContext.Provider value={[products , setProducts]}>
            {props.children}
        </ProductContext.Provider>
        
    </div>
)
}