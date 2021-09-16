import axios from 'axios'
import {useState,useEffect} from 'react'
import { Data } from './Components/Data';

function App() {

  const [covidData, setCovidData]=useState([]);

  // fetch api
  const fetchApi=async()=>{
    const response = await axios.get('https://api.covid19api.com/summary');
    const data = await response.data.Countries;
    // console.log(data);       
    setCovidData(data);    
  }

  useEffect(()=>{
    fetchApi();
  },[])  

  return (
    <div className='container'>
      <table className='table'>

        <thead>
          <tr>
            <th scope="col">SNO</th>
            <th scope="col">Country</th>
            <th scope="col">Country Code</th>
            <th scope="col">New Confirmed</th>
            <th scope="col">Total Confirmed</th>
            <th scope="col">New Deaths</th>
            <th scope="col">Total Recovered</th>
          </tr>          
        </thead>

        <tbody>
         
            <Data covidData={covidData}/>
          
        </tbody> 

      </table>      
    </div>
  );
}

export default App;
