import React, { useState } from 'react'
import Alert from "./alert"

const Search = ({addNutrition,message}) => {
    const[prod,setProd]=useState('')
    const clear = () =>{
        addNutrition(prod)
        setProd('')
    }
    return (
        <div className="container">
           <div className="row">
              <div className="col-md-6 offset-md-3 text-center ">
                  {
                      message && <Alert text={message} type={"warning"}/>
                  }

                      <input type="text" placeholder='Type your product here...' className="form-control mb-3" onChange={e=>setProd(e.target.value)}
                      onKeyPress={e=> e.key === "Enter" ? clear() : null}
                             value={prod}
                      />


                  <button className='btn w-50 table-head_bg font-weight-bold text-white mb-3' onClick={clear}>Get Nutrition</button>
              </div>
           </div>
        </div>
    )
}

export default Search