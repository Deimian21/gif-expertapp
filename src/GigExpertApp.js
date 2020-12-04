
import{ useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = () =>{
  
   
   const [categories, setCategory] = useState(['Dragon ball']);
  /*  const handleAdd = () =>{
   //setCategory ([...categories,'Comict']);
   setCategory( cats => [...categories,'Comics']);
   } */


   return (
<>
<h2> GifExpertApp</h2>
<AddCategory setCategory={setCategory}/>
<hr/>

   <ol>
      { categories.map(category =>(
       <GifGrid
       key={category} 
       category={category}
       />
      ))
   }
   </ol>
</>
)}
export default GifExpertApp;


