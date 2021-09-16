import React from 'react'

export const IndividualData = ({individualCovidData,index}) => {
    console.log(individualCovidData);
    console.log(index);    
    return (
        <>
            <th>{index}</th>
            <th>{individualCovidData.Country}</th>
            <th>{individualCovidData.CountryCode}</th>
            <th>{individualCovidData.NewConfirmed}</th>
            <th>{individualCovidData.TotalConfirmed}</th>
            <th>{individualCovidData.TotalDeaths}</th>
            <th>{individualCovidData.TotalRecovered}</th>
        </>
    )
}
