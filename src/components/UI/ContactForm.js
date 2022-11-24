import axios from 'axios';
import React, { useState, useEffect } from 'react'
import api_url from '../../Constant'
import './ContactForm.css'
function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");
    const [sendButtonDisable, setsendButtonDisable] = useState(false)
    const [showSuccess, setshowSuccess] = useState(false)
    const [showFailed, setshowFailed] = useState(false)
    let handleSubmit = async (e) => {
        setsendButtonDisable(true)
        e.preventDefault();
        console.log('submitted')
        axios.post(`${api_url}status.php`, {
            type: 4,
            name: name,
            email: email,
            phone: mobileNumber,
            message: message

        }).then((response) => {
            
            setsendButtonDisable(false)
            if (response.data.response == 1) {
                setshowSuccess(true)
                setTimeout(()=>{
                   
                setshowSuccess(false)
                    
                },
                3000)
            }
            else
            {
               
                setshowFailed(true)
                setTimeout(()=>{
                   
                setshowFailed(false)
                    
                },
                3000)
            }
            console.log(response)
           
            
        }).catch((e)=>{
            setsendButtonDisable(false)
            setshowFailed(true)
            setTimeout(()=>{
                setshowFailed(false)
                
                
            },
            3000)
            console.log('failed')
        })

    };

    return (
        <div className='contactForm'>
            <section style={{ backgroundColor: '#E5E5E5' }}>
                <div className="container py-3">
                    <div className="row text-center">
                        <div className="offset-md-2 col-md-8">
                            <h1 className='font-700' style={{ fontSize: 70 }}>
                                Contact Us
                            </h1>
                            <p className='font-400' style={{ fontSize: 18 }}>
                                Contact us for futher information about Platinum Pro Supplements. <br /> We are here to assist you!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container pb-5">
                    <div className="row">
                        <div className="offset-md-2 card pt-3 pb-3 px-5 col-md-6 bg-light">
                            <form onSubmit={handleSubmit} className="row paymentForm g-3">
                                <div className="col-12">
                                    <label htmlFor="inputName" className="form-label font-400">Name</label>
                                    <input
                                        required
                                        type="text"
                                        value={name}
                                        placeholder="Name"
                                        onChange={(e) => setName(e.target.value)}
                                        className="form-control input"
                                        id="inputName" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label font-400">Email</label>
                                    <input
                                        required
                                        value={email}
                                        placeholder="Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email" className="form-control input "
                                        id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPhoneNo" className="form-label font-400">Phone No</label>
                                    <input
                                        required
                                        className="form-control input"
                                        id="inputPhoneNo"
                                        type="text"
                                        value={mobileNumber}
                                        onChange={(e) => setMobileNumber(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label font-400">Message</label>
                                    <textarea
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        style={{ resize: 'none' }}
                                        className="form-control input"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                    ></textarea>
                                </div>
                                <div className="col-12 ">
                                    {
                                            showSuccess && <div class="alert alert-success " role="alert">
                                            Message Sent. Thanks for contact us
                                        </div>}
                                        {
                                            showFailed && <div class="alert alert-danger " role="alert">
                                           Message Failed. Please Try again.
                                        </div>
                                    }
                               
                                    {    
                                        sendButtonDisable ? <button disabled={true} type="submit" className="btnPrimary px-4 d-flex align-items-center float-end btn-primary" style={{
                                            backgroundColor: 'grey'
                                        }}> <span>Sending</span>
                                            <i className="fas ms-3 d-inline-block  fa-greater-than mx-1 "></i>
                                        </button> : <button type="submit" className="btnPrimary px-4 d-flex align-items-center float-end btn-primary" style={{
                                            backgroundColor: '#EC3641'
                                        }}> <span >Send</span>
                                            <i className="fas ms-3 d-inline-block  fa-greater-than mx-1 "></i>
                                        </button>


                                    }
                                    
                                </div>
                            </form>
                        </div>
                        <div className="col-md-3 mt-md-0  mt-3 align-items-md-start align-items-center  card mx-md-4 d-flex flex-column justify-content-around py-3 bg-light">
                            <div className='mb-3 mb-md-0'>
                                <span className='font-700  d-block ' style={{ fontSize: 22 }}>
                                    Phone:
                                </span>
                                <span className='d-block font-400' style={{ fontSize: 18 }}>
                                    +(112) 223 223
                                </span>
                                <span className='d-block font-400' style={{ fontSize: 18 }} >
                                    +(112) 223 223
                                </span>
                            </div>
                            <div className='mb-3 mb-md-0'>
                                <span className='d-block font-700' style={{ fontSize: 22 }}>
                                    Email Address
                                </span>
                                <span className='d-block font-400' style={{ fontSize: 18 }}>
                                    abc@gmail.com
                                </span>
                            </div>
                            <div className='mb-3 mb-md-0'>
                                <p className=' font-600'>
                                    <span className='font-700 ' style={{ fontSize: 22 }}>FOLLOW US:</span>
                                    <span className='d-block'>
                                        <i className="fab  mx-1 fa-facebook-square" style={{ fontSize: 26 }}></i>
                                        <i className="fab fa-instagram mx-1" style={{ fontSize: 26 }}></i>
                                        <i className="fab fa-twitter-square mx-1" style={{ fontSize: 26 }}></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ContactForm
