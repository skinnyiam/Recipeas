import React,{useEffect,useState} from 'react'
import { useRouter } from 'next/router';


 
  
const APP_KEY = "294e46d22b5e47a68cd0fe98eb601ea5";

const fullDetails = ()=>{
  
const router=useRouter();
  const [details, setdetails] = useState({});

  useEffect(() => {
    console.log(router.query.q)
    getRecipeas();
  }, [router.query.q]);

  const getRecipeas = async () => {

    
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${router.query.q}/information?apiKey=${APP_KEY}&includeNutrition=true`,
      
    );
    const data = await response.json();
    setdetails(data)
    console.log(data);
    

  };



  return (
    <>
    
    <div>
            {details.title}
    </div>
    </>
  )
}

export default fullDetails