import React,{Fragment,useState,useEffect} from 'react'
import api_url from '../../../Constant.js'
import axios from 'axios'
import Ingredients from '../../Ingredients'

function Home() {
     const [Ip, setIP] = useState('');
     const getData = async () => {
      const res = await axios.get('https://geolocation-db.com/json/')
      console.log(res.data);
      console.log(res.data.IPv4)
      const res2=await axios.post(`${api_url}status.php`,{
        ip:res.data.IPv4,
        type:1,
        page:'Home Page'
      }).catch(function (error) {
        if (error.response) {
          console.log(error.response)
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
    
      });
      // console.log(res2.data.data)
      console.log(res2)
    }
    
 
  useEffect( () => {
    //passing getData method to the lifecycle method

    getData()

  }, [])
    return (
        <Fragment>
       {/* <MainHeader/> */}
       <Ingredients/>
       </Fragment>
    )
}

export default Home
