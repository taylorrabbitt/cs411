import React from 'react'

const Results = ({ data, message }) => {
    let deaths, confirmed, province;
    if (data){
        deaths = data.Deaths;
        confirmed = data.Confirmed;
        province = data.Province
    }
    return (
        <div>
            <h3>{message}</h3>
            <div>
                <h1>Information for {province}</h1>
                <h3>Confirmed Cases: {confirmed}</h3>
                <h3>Deaths: {deaths}</h3>
            </div>
        </div>
    )
}

export default Results;