import React, { Fragment } from 'react';
import { useState } from 'react';
import Nav from '../../UI/MainNav/MainNav'
import classes from './Header.module.css'
function Header(props) {
    // get data from header form start

            const [surveyForm, setsurveyForm] = useState({bodyType:'',ageBracket:'',imtGoal:'',howActive:'',supplementTiming:''})
            
            const submitFormHandler=(event)=>{
                event.preventDefault();
                console.log(surveyForm)
            }

    // get data from header form end    
    return <Fragment>
        <div className={`${classes.mainHeader}`}>
            <Nav bg='transparent' linksColor='text-white' cartItem={props.cartItem} />
            <div className="container">
                <div className="row ">
                    <div className="col-md-7 mt-2">
                        <p className={`font-700 text-white mt-3 text-md-start text-center ${classes.header_heading_text}`}>
                            Discover the SUPPLEMENT SYSTEM that can take you to  GREATNESS
                        </p>
                        <div className="row">
                            <div className={`col-md-7 ${classes.productImage}`}>
                                <img src={require('../../../images/ProductHeaderleft.png')} className='img-fluid' />
                            </div>
                            <div className="col-lg-5 offset-1 col-11 offset-md-0 mt-lg-0 mt-3 text-md-start ">
                                <div className='mb-4'>
                                    <div className="row">
                                        <div className="col-1 me-1">
                                            <img src={require('../../../images/1.png')} width={25} alt="" />

                                        </div>
                                        <div className="col-10">
                                            <span className='ms-1 font-400 text-white' style={{ fontSize: 14 }}>
                                                NATURAL TEST-BOOSTING CYCLE
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-4'>

                                    <div className="row">
                                        <div className="col-1 me-1">
                                            <img src={require('../../../images/2.png')} width={25} alt="" />

                                        </div>
                                        <div className="col-10">
                                            <span className='ms-1 font-400 text-white' style={{ fontSize: 14 }}>
                                                MAXIMUM RESULTS GUARANTEED
                                            </span>
                                        </div>
                                    </div>


                                </div>
                                <div className='mb-4'>
                                    <div className="row">
                                        <div className="col-1 me-1">
                                            <img src={require('../../../images/3.png')} width={25} alt="" />

                                        </div>
                                        <div className="col-10">
                                            <span className='font-400 text-white' style={{ fontSize: 14 }}>
                                                REVOLUTIONARY PERFORMANCE-ENHANCING SYSTEM
                                            </span>

                                        </div>

                                    </div>
                                </div>
                                <div className='mb-4'>

                                    <div className="row ">
                                        <div className="col-1 me-1 ">
                                            <img src={require('../../../images/4.png')} width={25} alt="" />
                                        </div>
                                        <div className="col-9">
                                            <span className=' font-400 text-white' style={{ fontSize: 14 }}>
                                                EXCEPTIONAL ENERGY, STRENGTH, STAMINA, and LIBIDO
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5" style={{ position: 'relative' }}>
                        <div className={` pt-4  px-3   ${classes.formCard}`}>
                            <form onSubmit={submitFormHandler} action="">
                                <fieldset className='mb-2' onChange={(e)=>setsurveyForm({...surveyForm,bodyType:e.target.value})}>
                                    <legend className={`font-700 ${classes.legend}`}>
                                        CHOOSE YOUR CURRENT BODY TYPE
                                    </legend>
                                    <div className='d-flex justify-content-between flex-wrap' style={{width:'80%'}}>
                                        <div className="form-check me-auto   ">
                                            <input value={surveyForm.bodyType} className="form-check-input" type="radio" name="bodyCategory" id="skinny"
                                            value='skinny'
                                            />
                                            <label className="form-check-label font-400" htmlFor="skinny">
                                                SKINNY
                                            </label>
                                        </div>
                                        <div className="form-check me-auto  ">
                                            <input className="form-check-input font-700" type="radio" name="bodyCategory" id="moderate"
                                            value='moderate'
                                            />
                                            <label className="form-check-label font-400" htmlFor="moderate">
                                                MODERATE
                                            </label>
                                        </div>
                                        <div className="form-check me-auto  ">
                                            <input className="form-check-input" type="radio" name="bodyCategory" id="heavy"
                                            value='heavy'
                                            />
                                            <label className="form-check-label font-400 " htmlFor="heavy">
                                                HEAVY
                                            </label>
                                        </div>
                                        <div className="form-check me-auto ">
                                            <input className="form-check-input" type="radio" name="bodyCategory" id="muscular"
                                            value='muscular'
                                            />
                                            <label className="form-check-label font-400" htmlFor="muscular">
                                                MUSCULAR
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset onChange={(e)=>setsurveyForm({...surveyForm,ageBracket:e.target.value})} className='mb-2'>
                                    <legend className={`font-700 ${classes.legend}`}>
                                        SELECT YOUR AGE BRACKET
                                    </legend>
                                    <div className='d-flex  flex-wrap text-center' style={{width:'80%'}}>
                                        <div className="form-check  me-2">
                                            <input className="form-check-input" value='21-30' type="radio" name="age" id="thirty" />
                                            <label className="form-check-label font-400" htmlFor="thirty">
                                                21-30
                                            </label>
                                        </div>
                                        <div className="form-check me-2">
                                            <input className="form-check-input font-700" type="radio" name="age" id="forty" value='31-40' />
                                            <label className="form-check-label font-400" htmlFor="forty">
                                                31-40
                                            </label>
                                        </div>
                                        <div className="form-check me-2">
                                            <input  className="form-check-input" value='41-50' type="radio" name="age" id="fifty" />
                                            <label className="form-check-label font-400 " htmlFor="fifty">
                                                41-50
                                            </label>
                                        </div>
                                        <div className="form-check me-2">
                                            <input className="form-check-input" value='51-60' type="radio" name="age" id="sixty" />
                                            <label className="form-check-label font-400" htmlFor="sixty">
                                                51-60
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset onChange={(e)=>setsurveyForm({...surveyForm,imtGoal:e.target.value})} className='mb-2'>
                                    <legend className={`font-700 ${classes.legend}`}>
                                        WHAT IS THE MOST IMPORTANT GOAL FOR YOU?
                                    </legend>
                                    <div className='d-flex flex-column'>
                                        <div className="form-check me-2">
                                            <input className="form-check-input" value='WEIGHT LOSS AND MUSCLE GAIN' type="radio" name="goal" id="weightloss" />
                                            <label className="form-check-label font-400" htmlFor="weightloss">
                                                WEIGHT LOSS AND MUSCLE GAIN




                                            </label>
                                        </div>
                                        <div className="form-check me-2">
                                            <input className="form-check-input font-700" value=' AGE DEFIANCE, RENEWED ENERGY, AND VIGOR' type="radio" name="goal" id="energy" />
                                            <label className="form-check-label font-400" htmlFor="energy">
                                                AGE DEFIANCE, RENEWED ENERGY, AND VIGOR
                                            </label>
                                        </div>
                                        <div className="form-check me-2">
                                            <input className="form-check-input" value=' IMPROVED LIBIDO AND SEXUAL PERFORMANCE' type="radio" name="goal" id="libido" />
                                            <label className="form-check-label font-400 " htmlFor="libido">
                                                IMPROVED LIBIDO AND SEXUAL PERFORMANCE
                                            </label>
                                        </div>
                                        <div className="form-check me-2">
                                            <input className="form-check-input" value='I WANT ALL!' type="radio" name="goal" id="all" />
                                            <label className="form-check-label font-400" htmlFor="all">
                                                I WANT ALL!
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset onChange={(e)=>setsurveyForm({...surveyForm,howActive:e.target.value})} className='mb-2'>

                                    <legend className={`font-700 ${classes.legend}`}>
                                        HOW ACTIVE ARE YOU?
                                    </legend>
                                    <div className='d-flex flex-column'>
                                        <div className="form-check me-2">
                                            <input className="form-check-input" value='I HAVE A SEDENTARY LIFESTYLE' type="radio" name="active" id="sedentry" />
                                            <label className="form-check-label font-400" htmlFor="sedentry">
                                                I HAVE A SEDENTARY LIFESTYLE
                                            </label>
                                        </div>
                                        <div className="form-check me-2">
                                            <input className="form-check-input font-700" value='I TRY TO BE ACTIV' type="radio" name="active" id="try" />
                                            <label className="form-check-label font-400" htmlFor="try">
                                                I TRY TO BE ACTIVE
                                            </label>
                                        </div>
                                        <div className="form-check me-2">
                                            <input className="form-check-input" value='I EXERCISE EVERY WEEK' type="radio" name="active" id="exercise" />
                                            <label className="form-check-label font-400 " htmlFor="exercise">
                                                I EXERCISE EVERY WEEK
                                            </label>
                                        </div>
                                        <div className="form-check me-2">
                                            <input className="form-check-input" value='I WORK OUT ALL THE TIME' type="radio" name="active" id="allTime" />
                                            <label className="form-check-label font-400" htmlFor="allTime">
                                                I WORK OUT ALL THE TIME
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset onChange={(e)=>setsurveyForm({...surveyForm,supplementTiming:e.target.value})} className='mb-2'>
                                    <legend className={`font-700 ${classes.legend}`}>
                                        DO YOU TAKE SUPPLEMENTS REGULARLY?
                                    </legend>
                                    <div className='d-flex flex-column'>
                                        <div className="form-check me-2">
                                            <input className="form-check-input" value='ONLY MULTIVITAMINS' type="radio" name="regular" id="multivitamins" />
                                            <label className="form-check-label font-400" htmlFor="multivitamins">
                                                ONLY MULTIVITAMINS
                                            </label>
                                        </div>
                                        <div className="form-check me-2">
                                            <input className="form-check-input font-700" value='YES' type="radio" name="regular" id="yes" />
                                            <label className="form-check-label font-400" htmlFor="yes">
                                                YES
                                            </label>
                                        </div>
                                        <div className="form-check me-2">
                                            <input className="form-check-input" value='NO' type="radio" name="regular" id="no" />
                                            <label className="form-check-label font-400 " htmlFor="no">
                                                NO
                                            </label>
                                        </div>

                                    </div>
                                </fieldset>
                                <button className={`${classes.submitButton} border-rounded float-end font-600 mb-2 text-white`}>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>;
}
export default Header;
