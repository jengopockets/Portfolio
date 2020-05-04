import React, { useEffect } from 'react'
import axios from 'axios';


const useFetch = (url) => {
    const [response, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);
    useEffect(() => {
       axios.get(url)
            .then(res => {
                setResponse(res.data)
            })
            .catch(err => {
                setError(err)
            })
    },[url]);
    return {response, error};
};

export default useFetch;

//const fetchData = async () => {
    //   try{
    //     const res = await fetch(url, options);
    //     const json = await res.json();
    //     setResponse(json);
    //   }catch (error) {
    //       setError(error);
    //   }
    //  };
    //  fetchData();