import React from 'react'
import { IndividualData } from './IndividualData'

export const Data = ({covidData}) => {   
    // console.log(covidData); 
    return covidData.map((individualCovidData,index)=>(
        <tr>
            <IndividualData key={individualCovidData.ID} individualCovidData={individualCovidData}
            index={index+1} />
        </tr>        
    ))
}
