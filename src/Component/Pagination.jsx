import axios from 'axios'
//import React from 'react'
import { useEffect,useState } from 'react'

const Pagination = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((message)=>{
         setData(message.data);
        });
    },[])
  return (
       <>
       <table>
        <tr>
            <th>Name</th>
            <th>userName</th>
            <th>Email</th>
            <th>Address</th>
        </tr>
        {
            data.map((el)=>{
                return(
                    <tr>
                        <td>{el.name}</td>
                        <td>{el.username}</td>
                        <td>{el.email}</td>
                        <td>{el.address}</td>
                    </tr>
                )
            })
        }
       </table>

       </>
  )
}

export default Pagination;