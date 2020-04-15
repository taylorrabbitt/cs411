import { useState, useEffect} from 'react';
import axios from 'axios'

const useData = (query) => {    
    const [data, setData] = useState([]);
    let formmatedCountry = "united-states" //need to replace a empty space with a dash line
    const url = `https://api.covid19api.com/live/country/${formmatedCountry}`
    let type = "deaths";
    //const url = `https://api.covid19api.com/total/country/${formmatedCountry}`
    useEffect(() => {
        const fetchData = async () => {
            try {                
               const response = await axios.get(url);
               let filteredInfo = response.data.filter(item => {
                    return (item.Province.toLowerCase() === query.toLowerCase())
               });
               let mostRecent = filteredInfo[filteredInfo.length - 1]
               console.log(mostRecent);
               
               setData(mostRecent);
            } catch (error) {
                console.log(error);
                setData("");
            }
        }
       fetchData(query)
    }, [query]);
    return data;
}

export default  useData;