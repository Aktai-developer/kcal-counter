import React,{ useState } from 'react'
import "./app.css"
import Search from "./components/search";
import Calories from "./components/calories";
import axios from 'axios'
import "./media-app.css"
const API_URL = 'https://api.calorieninjas.com/v1/nutrition?query='
const headers = {headers:{ 'X-Api-Key': 'mFFuTgErsgM6FbGKdNGAXA==AoiHV45qbdBFKpYM'}}

function App() {
    const[message,setMessage]=useState('')
    const addNutrition = (prod) => {
        axios(`${API_URL}${prod}`, headers)
            .then(({data}) => {
                if(data.items.length === 0){
                    setMessage("Такого продукта нет")
                } else {
                    setNutrition(data)
                    setMessage("")
                }
            })

    }
    const[nutrition,setNutrition] = useState({})
    return (
    <div className="main">
        <h1 className='text-center mb-5 text font-size'>Get Nutrition <span className='text-white text-uppercase border'>Facts Now</span></h1>
        <h3 className='text-center mb-5 text sec_font-size'><span className='text-white font-weight-bold'>FREE</span> nutrition data for <span className="text-white font-weight-bold">100,000+</span> foods and beverages</h3>
        <Search setNutrition = {setNutrition} addNutrition={addNutrition} message={message}/>
        <Calories nutrition = {nutrition}/>
    </div>
  )
}

export default App
