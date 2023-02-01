import { useState, useEffect } from 'react';
import yelp from '../api/yelp'

export default () => {
    // state
    const [result, setResult] = useState([]);

    const searchApi = async (term) => {
        console.log("SEARCHING:" + term)

        try{
            const response = await yelp.get('/search',{
            params: {
                limit: 50,
                term: term,
                location: 'Manila Philippines'
            }
            })
            setResult(response.data.businesses)
            console.log("SEARCH FOUND:" + response.data.businesses.length)
            // console.log(response.data.businesses)
        }catch(e){
            console.log(e)
        }

    }

    useEffect(()=>{
        searchApi('')
    },[])
    
    return [result, searchApi]
}