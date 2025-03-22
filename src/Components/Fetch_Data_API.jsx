import React, { useEffect, useState } from 'react'

const Fetch_Data_API = () => {
    const [apiData,setapiData]=useState([]);
    useEffect (()=>{
        const fetchDataFromAPI = async ()=> {      
            const api = await("https://my-json-server.typicode.com/typicode/todos");
            const data = await api.json();
            console.log("my data =", data);
        }
        fetchDataFromAPI();
    },[]);
 return <div>{apiData.map((data)=><div key={data.id}><h3>{data.title}</h3></div>)}</div>;
};

export default Fetch_Data_API;
