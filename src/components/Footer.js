import React, { useEffect, useState,Fragment } from 'react'
import api_url from '../Constant'
import FooterCard from '../components/UI/FooterCard'
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom'
import Products from '../data/productsdb'
import axios from 'axios'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
];



const Footer = (props) => {
    // const [orderedList, setorderedList] = useState(null)
    const [AvailableProducts, setAvailableProducts] = useState([])
    useEffect(() => {
  
        axios.post(`${api_url}status.php`,{
           // ip:res.data.IPv4,
           type:3,
           // page:'Home Page'
         }).then(response=>{
            
            setAvailableProducts(response.data)
         }).catch(function (error) {
           if (error.response) {
             console.log(error.response)
           } else if (error.request) {
             // The request was made but no response was received
             console.log(error.request);
           } else {
             // Something happened in setting up the request that triggered an Error
             console.log('Error', error.message);
           }
       
         })
         ;
    
   }, [])
   
    
    //component states

    const initializeOrderedList = () => {

        let list = localStorage.getItem('OrderedList')
        if (list) {
           let data=JSON.parse(list)
           
            return data
        }
        else
            return []
    }
    
    const [orderedList, setorderedList] = useState(initializeOrderedList())
    const [open, setopen] = useState(false)
    
    //component states//
    // handlers
    
    const buyHandler = (title, id,price) => {
        setorderedList([...orderedList, { title: title, id: id,price:price }])
    }
    const removeHandler = (id) => {
        const index = orderedList.findIndex((item) => item.id == id)
        const currentList = [...orderedList]
        currentList.splice(index, 1)
        setorderedList(currentList)
    }
    // handlers//

    // .................



    // sideEffects
    // set data to local storage
    useEffect(() => {
        if (orderedList)
            localStorage.setItem('OrderedList', JSON.stringify(orderedList))
    }, [orderedList])
    const purchasedList = []
    orderedList.map((item) => {
        purchasedList.push(item.id)
    })

    const [products, setproducts] = useState(Products)
    // useEffect(()=>{
    //     setproducts(Products)
    //     // fetch('http://localhost:8000/products')
    //     // .then(res=>res.json())
    //     // .then(pro=> setproducts(pro))
    //        })
    // sideEffects//
    return (
        <Fragment>

            <div className='container-fluid img-container' style={{ backgroundColor: 'black', opacity: .95 }}>
                <div className="container " >
                    <div className=' row ' >
                        <div className="col-12 text-center   ">
                            <div className='row align-items-center '>
                                {/* <div className="col-lg-2 text-center ">
                                    <p className='font-700  h1 text-light'>
                                        More
                                        Products
                                    </p>
                                </div> */}
                                <div className=' col-12 col-lg-10'>
                                    {/* <Carousel showArrows={false} itemPadding={[2, 2]} focusOnSelect={true} style={{ textAlign: 'center' }} breakPoints={breakPoints}>
                                        {
                                            AvailableProducts.map((products) => {
                                                let purchased = false
                                                if (purchasedList.includes(products.product_id))
                                                    purchased = true
                                                return (
                                                    <FooterCard itemHandler={props.itemHandler}  removeHandler={removeHandler} buyHandler={buyHandler} purchased={purchased} key={products.product_id} price={products.product_price} title={products.product_name} id={products.product_id} />
                                                )
                                            })
                                        }
                                    </Carousel> */}
                    
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className="row align-items-center mt-4">
                                <div className="col-md-2">
                                    <p className='font-700 mb-0 text-light'>
                                       <img className={`img-fluid`} src={require('../images/CompanyLogo.png')} width='200px' alt="" />
                                    </p>
                                </div>
                                <div className="col-md-7">
                                    <nav className="nav flex-column justify-content-center flex-md-row">
                                        {/* <a className="nav-link footer-link text-light active" aria-current="page" href="#">Active</a> */}
                                        <a className="nav-link footer-link text-light"  href="#">Home</a>
                                        {/* <a className="nav-link footer-link text-light" href="#">Product</a> */}
                                        {/* <Link className="nav-link footer-link text-light" to='/cart'>
                                            Cart
                                            </Link> */}
                    
                                        {/* <button style={{border:0}} id='cartLink' onClick={()=>setopen(true)}  className="nav-link footer-link bg-transparent text-light" href='javascript:void(0)'>My Cart</button> */}
                                        {/* {open?<CartModal open={true}/>:null} */}
                                        <Link className="nav-link footer-link text-light" to='/contact'>
                                            Contact Us
                                            </Link>
                                    </nav>
                                </div>
                                <div className="col-md-3 text-end">
                                    <img src={require('../images/paymentDetails.png')} />
                                    <div>
                                        <p className='text-light font-600 '>
                                            FOLLOW US: <i className="fab mx-1 fa-facebook-square"></i>
                                            <i className="fab fa-instagram mx-1"></i>
                                            <i className="fab fa-twitter-square mx-1"></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="offset-md-1  col-md-10">
                                    <p className='font-300  text-light text-center font-15'>
                                        * These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease. These products do not require a prescription or doctor approval as they are herbal and do not contain any prescription ingredients. Results in the Testimonials may not be typical and your results may vary. Not all people will obtain the same results. These products are intended to be used in conjunction with a healthy diet and regular exercise. Consult your physician before starting any diet, exercise program or taking any diet pill to avoid any health issues.fg
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row text-center py-2 justify-content-center">
                    ©2022 Platinum Pro Supplements. All Rights Reserved.
                </div>
            </div>
        </Fragment >
    )
}

export default Footer


