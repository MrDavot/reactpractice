import React, {useContext} from 'react'
import './exchange.scss'
import { RateContext } from '../../context/RateContext';


export const Exchange = () =>{

    const {state} = useContext(RateContext)

    const currency = {...state.currency}


    return(
        <div className = "exchange">
            <div className = "exchangeContainer">


                <div className = "exchangeContent">
                    <div> <p>Базовая валюта: &nbsp;  &nbsp;Дата: </p></div>

                    <ul>
                        {
                          Object.keys(currency).map((item, i)=>{
                              return(
                                  <li key= {item}>
                                    <span><img src = {currency[item].flag} alt = {item}/> {item}</span>
                                    <span>{`1${state.base} = ${currency[item].course} ${item}`}</span>
                                  
                                  </li>
                              )
                          })      
                        }        

                    </ul>
                
                
                
                
                </div>
            
            
            </div>





        </div>
    )
}