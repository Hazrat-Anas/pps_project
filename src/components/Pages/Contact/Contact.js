import React,{useState,useEffect} from 'react'
import api_url from '../../../Constant.js'
import axios from 'axios'
import ContactForm from '../../UI/ContactForm'
import Nav from '../..//UI/MainNav/MainNav'
import Footer from '../../Footer'
function Contact(props) {
     const [Ip, setIP] = useState('');
    const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    const res2=await axios.post(`${api_url}status.php`,{
      ip:res.data.IPv4,
      type:1,
      page:'Contact Us'
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
  
  }
  

  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()
  
  }, [])

  
    return (
        <div>
           <Nav cartItem={props.cartItem} linksColor='text-dark' /> 
           <ContactForm/>
           <Footer itemHandler={props.itemHandler} />
        </div>
    )
}

export default Contact
