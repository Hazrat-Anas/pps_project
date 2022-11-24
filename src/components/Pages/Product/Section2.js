import React, { Fragment } from 'react';
import main from './main.module.css'
import classes from './section2.module.css'
import section6 from './section6.module.css'
import moduleName from '../../../App.css'
import ComparisonChart from '../../UI/ComparisonChart';
const Gradient = (props) => {
    return (
        <div className={`${classes.gradient} py-2 my-md-2 `}>
            <div className="row">
                <div className="col-3 col-md-2 text-center px-md-0 ">
                    <img className={`${classes.gradientTick}  `} src={require('../../../images/tick.png')} alt="" />
                </div>
                <div className="col-9 d-flex align-items-center col-md-10">

                    <span className={`${classes.gradientTitle}  font-700`} >
                        {props.title}
                    </span>
                </div>
            </div>
        </div>
    )
}
function Section2() {
    return <Fragment>
        <div className='container  py-md-5  py-4'>
            <div className="row ">
                <div className="col-md-7 mt-3 ">
                    <p className={`font-700 text-md-start text-center ${main.h1}`} >
                        Men, we all want PERFECTION, GREATNESS, and EXCELLENCE
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">

                    <p className={`font-400 ${main.content}`} >
                        <br className=' d-none d-md-block' />
                        …but the odds are stacked against us. As soon as we hit a certain age, right during our prime, the body starts to decline. Slowly, but surely, your energy is drained from your body and your muscles don’t grow as fast as you want. You gain weight, you get tired easily, and before you know it, you’re feeling older than you should. You lose all intimacy in the bedroom, you make excuses not to have sex – and when you try to have sex, you realize that your erections are getting smaller and smaller every time.
                    </p>
                    <p className={`font-400 ${main.content}`} >
                        <span className='fw-bold'>That’s not a life you want to have. But that’s the reality.</span> <br /> <br />
                        Here’s the truth <br />
                        All men follow the same trajectory towards decline, and getting back into your prime form gets harder and harder the longer you wait to do something about it.
                        Even athletes and celebrities fall victim to age-related decline, and only a handful are smart enough to get ahead of aging before it affects them.
                        You’ve seen exceptional men who can beat the odds and excel at a level higher than average people do. Men with superior physiques, charisma, confidence, and performance that defy the limitations of aging.
                    </p>

                    <p className={`font-400 d-none d-md-block ${main.content}`}>
                        These men have taken care of their body, health, and appearance early on, and that’s how they can sustain their prime for a longer period of time. They have the luxury of having the time and resources to diet, exercise, and maintain their performance and health for decades, and that’s why they are still at the top of their game – and you can sure bet that these men can still get intimate when they want.
                    </p>

                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div className="row  justify-content-center">

                        <div className="row my-1 my-md-2">
                            <div className="col-6 col-md-12 col-xxl-6 ">


                                <img className={`${classes.img} ${classes.scale_down_img}  `} src={require('../../../images/Group 35.png')} alt="" />

                            </div>
                            <div className="col-6 col-md-12 col-xxl-6 px-0">

                                <img className={`${classes.img} `} src={require('../../../images/Group 60.png')} alt="" />


                            </div>
                        </div>
                        <div className="row my-1 my-md-2">
                            <div className="col-6 col-md-12 col-xxl-6 ">
                                <img className={`${classes.img} ${classes.scale_down_img} `} src={require('../../../images/Group 36.png')} alt="" />
                            </div>
                            <div className="col-6 col-md-12 col-xxl-6 align-items-center d-flex px-0">
                                <img className={`${classes.img}  `} src={require('../../../images/Group 61.png')} alt="" />
                            </div>
                        </div>
                        <p className={`font-400 mt-3 d-block d-md-none ${main.content}`}>
                            These men have taken care of their body, health, and appearance early on, and that’s how they can sustain their prime for a longer period of time. They have the luxury of having the time and resources to diet, exercise, and maintain their performance and health for decades, and that’s why they are still at the top of their game – and you can sure bet that these men can still get intimate when they want.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className={`container-fluid `}>
            <div className="container">
                <div className={`row py-4`}>
                    <p className={`font-400  text-start ${classes.content}`}>
                        <span className='font-700'>How about you?</span>  
                        <br />
                        Is it too late for the average man to catch up and enjoy <span className={`${classes.footerBold} font-900`}>PERFECTION, GREATNESS, and EXCELLENCE</span> once more?<br />
                        Can you turn back the hands of time and be <span className={`${classes.footerBold} font-900`}>GREAT</span> one more time? <br />
                        Men who are driven to be better deserve another shot at their prime.
                    </p>
                    <p className='font-400'>
                        That’s why we created THE <span className={`${classes.footerBold} font-900`}>PLATINUM PRO SYSTEM</span>.

                        </p>
                </div>
            </div>
        </div>
        <div className="container text-center py-4">
            <div className='text-center d-flex justify-content-center '>
                <a href="" className='text-center'>
                    <img className='d-sm-block d-none img-fluid ' src={require('../../../images/BANNER.png')} alt="" />


                    <img className={`d-sm-none d-block ls-auto img-fluid `} src={require('../../../images/Group57.png')} alt="" />

                </a>
            </div>

        </div>
        <div className={`container-fluid  ${classes.back}`}>
            <div className="container-lg">
                <div className="row  py-md-5 py-4  ">
                    <p className={`font-700 text-white text-center ${main.h1}`}>THE ULTIMATE MALE PERFECTION SYSTEM</p>
                    <div className="col-md-4 d-flex flex-column justify-content-center">
                        <div className="row  my-3 my-md-2">
                            <div className="col-2 text-center px-0">
                                <img className={`${section6.list_item__tick_logo}  `} src={require('../../../images/tick.png')} alt="" />
                            </div>
                            <div className="col-10">
                                <span className={`text-white ${classes.listItem} font-400 `}> NATURAL TEST-BOOSTING CYCLE
                                </span>
                            </div>
                        </div>

                        <div className="row my-3  ">
                            <div className="col-2 text-center px-0">
                                <img className={`${section6.list_item__tick_logo}  `} src={require('../../../images/tick.png')} alt="" />
                            </div>
                            <div className="col-10  ">
                                <span className={`text-white ${classes.listItem} text-break font-400 `}> REVOLUTIONARY PERFORMANCE-ENHANCING SYSTEM
                                </span>
                            </div>
                        </div>


                    </div>
                    <div className="col-md-4 order-md-0 order-3 text-center" >
                        <img className={` ${classes.productImg} my-md-0 my-3`} src={require('../../../images/B11.png')} alt="" />
                    </div>
                    <div className="col-md-4  d-flex flex-column justify-content-center ">

                        <div className="row  my-3 my-md-2">
                            <div className="col-2 text-center px-0  ">
                                <img className={`${section6.list_item__tick_logo}  `} src={require('../../../images/tick.png')} alt="" />
                            </div>
                            <div className="col-10 ">
                                <span className={`text-white ${classes.listItem} font-400 `}> EXCEPTIONAL ENERGY, STRENGTH, STAMINA, and LIBIDO
                                </span>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-2 text-center px-0">
                                <img className={`${section6.list_item__tick_logo} `} src={require('../../../images/tick.png')} alt="" />
                            </div>
                            <div className="col-10">
                                <span className={`text-white ${classes.listItem} font-400 `}> MAXIMUM RESULTS GUARANTEED

                                </span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <p className={`font-400 text-white text-center ${classes.footerContent}`}>
                        THE PLATINUM PRO SYSTEM is the FUTURE of men’s performance enhancement supplements, and now it’s time for <span className={`${classes.footerBold} font-900`}>YOU</span> <br /> to unleash your TRUE POTENTIAL.
                    </p>
                </div>
            </div>
        </div>
        <div className="container-fluid" >
            <div className="container-sm px-0  ">
                <div className="row  ">
                    <p className={`${main.h1} d-md-none text-center my-3 d-block  font-700`}>
                        WHY MEN BREAK DOWN
                    </p>
                    <div className={`col-md-6 d-flex flex-column justify-content-center }`}>

                        <img className={`img-fluid d-none d-md-block`} src={require('../../../images/Group58.png')} alt="" />
                        <img className={`img-fluid d-md-none`} src={require('../../../images/Group58.png')} alt="" />
                    </div>
                    <div className="col-md-6 py-md-3 py-1">
                        <p className={`${main.h1}   d-none d-lg-block font-700`}>
                            WHY MEN BREAK DOWN
                        </p>
                        <p className={`font-400 my-3 ${main.content}`} >
                            Years of stress, fatigue, and exhaustion can take their toll on your body. You may not notice it yet, but your daily routine can accelerate the deterioration of your health and performance. As men get older, testosterone levels drop, and this hastens your decline even more. </p>
                        <p className={`font-400 ${main.content}`}> You slowly lose the drive and energy that once pushed you to be competitive. You gradually lose muscle and gain weight, weakening your body bit by bit, and the worst is when you can’t get an erection like you normally would. Every man is at risk of testosterone-related decline. That’s why some of the most expensive elective treatments available for men involve artificial testosterone enhancement.</p>
                        <p className={`font-400 ${main.content}`}> Regaining normal testosterone levels is so crucial for men that most would pay top dollar to get the best treatments. Not everyone has the luxury of spending thousands of dollars every year just to get within reach of their prime, and not everyone is okay with the risks associated with such treatments.</p>
                        <p className={`font-400 ${main.content}`}>
                            For men who want <span className='font-700'>TRUE PERFECTION</span> , getting within reach of your absolute best is not good enough. Only the best results matter. We turned to science to learn the secrets of men’s performance and discover the  <span className='font-700'>GREATEST</span>   men’s performance system the world has ever seen.
                        </p>
                        <br className='d-none d-md-block' />
                    </div>
                </div>
            </div>
        </div>
        <div className={`container-fluid pt-4  pt-md-0  text-white ${classes.maskBack}`}  >
            <div className="container-lg">
                <div className="row">
                    <div className="col-md-4 d-flex flex-column justify-content-center " >
                        <span className={`font-700 text-md-center ${main.h1} `} style={{ fontWeight: 'bold' }}>
                            THE PLATINUM PRO ADVANTAGE
                        </span>
                    </div>
                    <div className="   order-md-0 order-3 col-md-3 text-center">
                        <img className={`${classes.maskmiddle}  `} src={require('../../../images/B12.png')} alt="" />
                    </div>
                    <div className={`col-md-5 d-flex flex-column py-4 justify-content-around ${classes.gradient_box} `}>
                        <Gradient title='INCREASED TESTOSTERONE LEVELS ' />
                        <Gradient title='SUPERIOR STAMINA' />
                        <Gradient title='IMPROVED ENERGY' />
                        <Gradient title='INCREASED LIBIDO' />
                        <Gradient title='ENHANCED MUSCLE GROWTH' />
                    </div>
                </div>
            </div>
        </div>

        <div className='container-fluid pt-3' style={{ backgroundColor: '#F4F4F4' }}>
            <div className="container px-0 py-md-5" >
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10">
                        <p className={`text-center font-700 ${classes.world_heading} `}>
                            What can the WORLD’s #1 Testosterone Boosting Supplement do for You?</p>
                    </div>
                    <p className={`text-center  mt-md-5 font-700 ${classes.sub_heading}`}>Are You a Man that Cares about Your Manhood, as you approach your late 30s, 40s and even way past your 50s?</p>
                </div>

                <p className={`text-start font-400 ${main.content}`}>
                    Do you fear getting losing that sex-drive, not having that intense desire to experience great sexual pleasure? What do you truly know about Testosterone Replacement Therapy?
                </p>
                <p className={`text-start ${main.content} font-700 `}>
                    Do you know how to keep your testosterone production at a peak level?
                </p>




                {/* new */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-xxl-7 ">
                            <p className={`text-start font-400 ${main.content}`}>
                                Men, there are thousands of supplements out there that promise to raise your body’s natural testosterone production.
                            </p>
                            <p className={`text-start font-400 ${main.content}`}>
                                Why? Because NOTHING can be more damaging to a man’s ego, and confidence than low testosterone levels.
                            </p>
                            <p className={`text-start  font-400 ${main.content}`}>
                                Sure, low test levels will mean low energy, a feeling of depression, a lack of desire to do anything, poor muscle definition, an increase in body fat, making it harder to stay or get into physical shape, and of course a lack of sex-drive and even smaller and weaker erections!
                            </p>
                            <p className={`text-start font-400 ${main.content}`}>
                                Platinum Pro is NOT your typical, on the shelf testosterone supplement.  There’s thousands of these subpar supplements.  All of them contain the same, similar ingredients that are clinically tested to boost total and free testosterone.
                            </p>
                        </div>
                        <div className="col-md-6 col-xxl-5 my-3 d-flex align-items-center">
                            <div className={` ${classes.banner_container}  `}>
                                <div className={` ${classes.banner_container_row} text-center row`}>
                                    <div className="col-xl-3">
                                    <img className={`${classes.what_supplement_banner_img}`} src={require('../../../images/what_platinum_do.png')} alt="" />
                                    </div>
                                    <div className=" ps-lg-5 col-xl-9 d-flex flex-column justify-content-center  align-middle  text-white">
                                   
                                        <ul className={`${classes.what_supplement_do_ul} text-start `}>
                                        <h1 className={`font-700 text-md-start text-xl-center ${classes.what_supplement_title} `}>
                                        The Platinum Pro System
                                        </h1>
                                            <li className='font-400'> - 4 Revolutionary Performance Enhancing Formulas</li>

                                            <li className='font-400'>- Progressive Testosterone  Enhancement</li>

                                            <li className='font-400'>- Dramatically Increase Physical Performance</li>

                                            <li className='font-400'>- Maximum Vigor, Energy, and Libido</li>

                                            <li className='font-400'>- Slow Down Aging – Look and Feel Young!</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* new */}
                <p className={`text-start font-400 ${main.content}`}>
                    Platinum Pro is on a level above anything you’ve ever
                    seen. Platinum Pro is a true supplement system, with
                    every element of the system designed to maximize your
                    testosterone levels month after month. This is the ONLY
                    true way to maximize your body’s production of total and
                    free testosterone.
                </p>
                <p className={`text-start font-400 ${main.content}`}>
                    Just like us men, not all supplements are created equally. At the very least, it has to make sense to you. You need to know how the supplement affects your body, and what you can do to maximize its benefits.
                </p>
                <p className={`text-start font-400 ${main.content}`}>
                    If boosting your testosterone levels are of extreme importance to you, wouldn’t you want to understand more about the ingredients and formulations that would give you the MOST optimal results?
                </p>
                <p className={`text-start font-400 ${main.content}`}>
                    Platinum Pro is for men who understand what real performance enhancement is. Every Platinum Pro customer saw the extreme advantages of Platinum Pro compared to every supplement in the market.   They looked at the label, the formulation and they discovered what so many of us ought to know. There is a drastic difference between a supplement that is proven to deliver dramatic results and the thousands of supplements on the shelves that contain a low dose and poor combination of ingredients that will only deliver minimum results.
                </p>
            </div>
        </div>
        <div className="container text-md-center py-md-5 py-2 ">
            <div className='text-md-center d-flex mb-5 justify-content-center '>
                <a href="" className='text-md-center'>
                    <img className='d-sm-block d-none img-fluid ' src={require('../../../images/BANNER.png')} alt="" />


                    <img className={`${classes.test} d-sm-none d-block ls-auto img-fluid `} src={require('../../../images/Group57.png')} alt="" />

                </a>
            </div>
            <div className="row">
                <div className={`text-start ${main.content}`}>
                    <p className={`font-700 text-start ${classes.world_heading} `}>Learn the truth about Testosterone Enhancement</p>
                    <p className={`text-start mt-2 mt-md-4 font-700 ${classes.sub_heading}`}>Take the 10 minutes to inform yourself about how a superior men’s supplement like Platinum Pro will deliver dramatric man-boosting results and we promise you, you’ll never look at supplements the same way again, and you’ll for the first time in your life discover what a true, superior man-boosting, testosterone boosting supplement can do for your life.</p>
                </div>
                <p className={`text-start font-400 ${main.content}`}>
                    <span className={`${main.content} font-700`}>It will indeed Change your manhood forever!</span> <br />
                    Platinum Pro is not your average supplement. If you want to experience results beyond anything you’ve ever seen, this is it.  We’re talking about a supplement made with natural ingredients, that will increase your body’s natural production of testosterone.  We made it possible, through years of research, testing, and development, to give you an extremely superior, premium, high-quality supplement, made with cutting-edge technology.
                </p>
                <p className={`text-start font-400 ${main.content}`}>
                    Testosterone will indeed make a man stronger, give a man more lean muscle, cut a mans body fat, give that man a higher sex-drive and even increase a man’s peak erection size!  Some Platinum Pro customers have shown to gain inches on their peak erection! And have witnessed and experienced a higher sex drive than they had in decades.
                </p>
                <p className={`text-start font-400 ${main.content}`}>
                    All of this is done through the power of your body’s ability to produce higher testosterone!
                </p>
                <p className={`text-start font-400 ${main.content}`}>
                    When it comes to these lfe-changing results, ONLY a superior supplement can deliver!
                </p>
                <p className={`text-start font-400 ${main.content}`}>
                    Lets Dig into Platinum Pro and discover what makes is to unique, special and different.
                </p>
            </div>
        </div>
        <div className="container py-2 py-md-5 ">
            <div className="row">
                <div className="col">
                    <p className={`font-700 text-center ${main.h1}`}>
                        PLATINUM PRO REINVENTS THE WHEEL
                    </p>
                    <p className={`${main.content} text-start font-400`}>
                        Make no mistake about it. We are now in the golden age of health and nutrition. Through science, we understand more about health and performance, and that’s why we’ve seen some of the greatest performance-enhancing supplements in the last decade.
                    </p>
                    <p className={`${main.content} text-start font-400`}>
                        Studies by reputable institutions prove beyond doubt that performance enhancement is 100% possible and attainable with dietary supplements, and there have been a handful of products that are truly capable of boosting performance – but only to a certain degree.
                    </p>
                    <p className={`${main.content} text-start font-400`}>
                        Performance enhancement, much like muscle growth, needs progression. Once you hit the peak capabilities of a supplement formula, there’s nothing more to look forward to. You reach the “FLAT ZONE” where your progress stalls indefinitely.
                    </p>
                    <ComparisonChart />
                    <br />
                    <p className={`${main.content} text-start font-400`}>
                        Conventional supplements are only designed to fill in nutritional deficiencies to help your body function at a normal level. If you want to experience EXCEPTIONAL results, then you need a system designed to compound its effects and develop a progressive overload that continuously evolves until you reach PERFECTION.
                    </p>


                </div>
                <p className={`${main.sub_heading}  mt-2 mt-md-3 font-700 text-start`}>
                    Platinum Pro utilizes a revolutionary system that cycles supplement formulas to prevent supplement resistance and allow your performance to continuously develop through a supplement cycle. The Platinum Pro System effectively eliminates the FLAT ZONE, allowing you to push the boundaries of your performance.

                </p>
            </div>
        </div>
    </Fragment>
        ;
}

export default Section2;
