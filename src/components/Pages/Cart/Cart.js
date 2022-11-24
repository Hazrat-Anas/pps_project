import React, { useState } from 'react'
// import classes from './styles/cart.module.css'
import '../../UI/ContactForm.css'
const OrderedItem = ({product}) => {
    return (
        <div className={`d-flex justify-content-between align-items-baseline mb-2 mt-0  row  `}>
            <div className='col-md-8'>
                <span className='font-700'>
                    {product.title}
                </span>
            </div>

            <div className='col-md-4 text-center '>
                <span className='font-600' style={{fontSize:18}}>
                   
                    Price: {product.price}
                    
                    
                </span>
            </div>
        </div>
    )
}
function Cart() {
    const [totalPrice, settotalPrice] = useState(0)
    const initializeOrderedList = () => {
        let list = localStorage.getItem('OrderedList')
        if (list) {
            return JSON.parse(list)
        }
        else
            return []
    }
  
    const [orderedList, setorderedList] = useState(initializeOrderedList())
    let Totalprice=0
    orderedList.map((product)=>{
        Totalprice= parseInt(Totalprice) +parseInt(product.price) 
    })
    return (
        <div className="container-fluid bg-light">
            <div className="container">
                <nav class="navbar navbar-light bg-light">
                    <a class="navbar-brand" href="#">
                        <img src={require('../../..//images/dummyHeaderLogo.png')} width="100" height="30" class="d-inline-block align-top" alt="" />
                        <span className='font-600 mx-3'>Platinum Pro Supplements</span>
                    </a>
                </nav>
            </div>
            <section className='mx-2 pb-5 ' style={{ backgroundColor: '#f2f1ee' }}>
                <div className="container">
                    <div className="row">
                        <span className='font-700 d-block' style={{ fontSize: 30 }}>
                            Billing Details
                        </span>
                    </div>
                </div>
                <div className="container">
                    <div className='row'>
                        <div className="  col-md-6">
                            <form className="row  g-3">
                                <div className="col-12">
                                    <label htmlFor="inputName" className="form-label font-400">Name </label>
                                    <input type="text" className="form-control input" id="inputName" placeholder="Enter Your Name" />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="inputEmail4" className="form-label font-400">Email</label>
                                    <input type="email" className="form-control input " id="inputEmail4" />
                                </div>
                                <div class="col-md-12">
                                    <label for="inputState" class="form-label">Country</label>
                                    <select id="inputState" class="form-select">
                                        <option selected>Afghanistan</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="col-md-7">
                                    <label htmlFor="inputState" className="form-label font-400">State/Country</label>
                                    <input type="text" className="form-control input " id="inputState" />
                                </div>
                                <div class="col-md-5">
                                    <label for="inputZip" class="form-label">Zip</label>
                                    <input type="text" class="form-control" id="inputZip" />
                                </div>
                                <div style={{ width: '97%', borderRadius: 5 }} class="mx-auto form-check bg-white align-content-center justify-content-between d-flex my-5">
                                    <div className='d-flex'>
                                        <input class="my-auto" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class=" ms-2 my-auto form-check-label align-middle" for="flexRadioDefault1">
                                            Credit Card
                                        </label>
                                    </div>
                                    <img className='float-end' width="300" height="50" src={require('../../../images/paymentMethods.png')} alt="" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputCardNumber" className="form-label font-400">Card Number </label>
                                    <input type="number" className="form-control input" id="inputCardNumber" placeholder="4894465784348" />
                                </div>
                                <div class="col-md-8">
                                    <label for="inputState" class="form-label d-block">Expiration Date</label>
                                    <select id="inputMonth" class="form-select d-inline-block me-3 " style={{ width: 100 }} >
                                        <option selected value=''>Month</option>
                                        <option value='1'>Janaury</option>
                                        <option value='2'>February</option>
                                        <option value='3'>March</option>
                                        <option value='4'>April</option>
                                        <option value='5'>May</option>
                                        <option value='6'>June</option>
                                        <option value='7'>July</option>
                                        <option value='8'>August</option>
                                        <option value='9'>September</option>
                                        <option value='10'>October</option>
                                        <option value='11'>November</option>
                                        <option value='12'>December</option>
                                    </select>
                                    <select id="inputMonth" class=" form-select d-inline-block" style={{ display: 'inline-block', width: 100 }}>
                                        <option selected value=''>Year</option>
                                        <option value='1'>2001</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="inputCardNumber" className="form-label font-400">Security Code </label>
                                    <input type="number" className="form-control input" id="inputCardNumber" placeholder="4894465784348" />
                                </div>
                                <div style={{ width: '97%', borderRadius: 5, }} class="mx-auto bg-white form-check py-3 align-content-center justify-content-between d-flex my-5">
                                    <div className='d-flex'>
                                        <input class="my-auto" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class=" ms-2 my-auto form-check-label align-middle" for="flexRadioDefault1">
                                            Paypal
                                        </label>
                                    </div>
                                    <img className='float-end' width="200" height="30" src={require('../../../images/paypal.png')} alt="" />
                                </div>
                                <p className='font-400 text-center' style={{ fontSize: 14 }}>
                                    By Clicking the submit button, You agree to the <u className='text-underline'>Terms and Conditions</u>
                                </p>
                                <button type="submit" className='btn btn-primary' style={{ border: 0 }}>
                                    Submit
                                </button>
                            </form>
                            {/* <div id="head2" >
                                <select id='gMonth2' onchange="show_month()">
                                   
                                </select>
                            </div> */}
                        </div>
                        <div className=" col-md-6 mt-3 mt-md-0 ">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title text-py font-700 text-center  ">Cart Summary</h5>
                                    {
                                        orderedList.map(product => {
                                            return <OrderedItem  key={product.id} product={product} />
                                        })
                                    }
                                    <p className='font-900 float-end' style={{fontSize:20}}>
                                        <span className='text-py'> Total Payment</span>  <br /> <span className='float-end'>{Totalprice}</span> 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Cart
