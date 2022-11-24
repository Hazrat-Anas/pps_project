import React from 'react';
import classes from './chartSection.module.css'
import main from './main.module.css'
const Table = () => {
    return (
        <div className="table-months table-responsive">
            <table className="table-light  w-100">
                <thead>
                    <tr>
                        <th className={`font-700 text-center text-light`} scope="col">Month</th>
                        <th className={`font-700 text-light`} scope="col"> Package</th>
                        <th className={`font-700 text-light`} scope="col">Results </th>
                        {/* <th className={`font-700 text-light`} scope="col">Delta Edge</th>
                                    <th className={`font-700 text-light`} scope="col">Sigma Boost</th>
                                    <th className={`font-700 text-light`} scope="col">Omega Core</th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Platinum Pro + Platinum Alpha +Platinum Gamma</td>
                        <td>Dramatic Increase in testosterone and blood Flow</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Platinum Pro + Platinum Sigma</td>
                        <td>Maximum blood flow for increased erection quality and muscle
                            performance
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Platinum Pro + Platinum Alpha +Platinum Gamma</td>
                        <td>Sustained increase in testosterone
                            levels
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Platinum Pro+ Platinum Alpha +Platinum Gamma</td>
                        <td>Peak testosterone saturation</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Platinum Pro</td>
                        <td>Maintained peak testosterone saturation</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Platinum Pro + Platinum Alpha +Platinum Gamma</td>
                        <td>Exceed peak testosterone
                            saturation
                        </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Platinum Pro + Platinum Sigma</td>
                        <td>Surpass peak Wood flow and erection quality</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Platinum Pro + Platinum Alpha
                        </td>
                        <td>Saturate testosterone production</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Platinum Pro+ Platinum Alpha +Platinum Gamma</td>
                        <td>Re-establish new peak</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Platinum Pro</td>
                        <td>Peak testMaintain elevated
                            testosterone levels and blood flowosterone saturation
                        </td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Platinum Pro + Platinum Alpha +Platinum Gamma</td>
                        <td>Cycle restart - New level of
                            performance enhancement
                        </td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>Platinum Pro + Platinum Sigma</td>
                        <td>Cycle restarl - New level of peak
                            blood flow and erection size and
                            hardness
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
const AccordianBody = (props) => {
    return (
        <div className={`container border-primary py-3 upperAccordian  ${classes.accordianBodyBack}  `}>
            <div className="row align-items-center">
                <div className="col-md-8">
                    <div className={`font-400 ${main.content} text-white`}>
                        {props.content}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row ">
                        <div className="col-md-5 text-center">
                            <img className={`${classes.accordianrightImg}`} src={require('../../../images/accordianImg.png')} alt="" />
                        </div>
                        <div className="col-md-2 text-center d-flex">
                            <span className='my-auto mx-auto' style={{ fontSize: 40, color: 'green', fontWeight: 'bold' }}>
                                +
                            </span>
                        </div>
                        <div className="col-md-5 text-center">
                            <img className={`${classes.accordianrightImg}`} src={require('../../../images/accordianImg.png')} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Accordian = () => {
    return (
        <div className="upperAccordian accordion" id="accordionExample">
            <div className={`accordion-item my-3 ${classes.mainAccordian}`}>
                <h2 className="accordion-header " id="headingOne">
                    <button className="accordion-button text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        MONTH 1: SHOCK THE SYSTEM
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse  collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{ padding: 0 }}>
                        <AccordianBody key={1} content={[<p key={1}>Our most power-packed stack is taken during your first month to kick start your system. Much of the
                            heavy lifting is done during your first month to radically change the dynamics of your performance.
                            Transitioning from testosterone decline requires the peak saturation point that the body can handle.
                            The Platinum Pro System on your first month provides you with 5500mgs of our most potent
                            performance-enhancing supplements to dramatically improve your testosterone levels and give you
                            actual results you can see and feel.</p>,
                        <p key={2}>
                            Platinum Pro is the core formula designed to initiate the process of reinvigorating your testosterone
                            levels and blood flow. The formula utilizes multi-pathway performance-enhancing ingredients to regain
                            your youthful energy, vigor, libido, and erection quality.
                        </p>,
                        <p key={3}>
                            For the first 30 days, the Platinum Pro System saturates your body with high-potency compounds that
                            stimulate testosterone production and retention, including a formidable vasodilator complex to
                            strengthen your physical and sexual performance.
                        </p>
                        ]} />
                    </div>
                </div>
            </div>
            <div className="accordion-item my-3">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Month 2: INTENSE VASODILATION
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{ padding: 0 }}>
                        <AccordianBody key={2} content={[<p key={4}>
                            With your body fully saturated from the overload of testosterone-boosting components, you now have
                            the momentum to carry over to the next 30 days and continue your progress. The Platinum Pro System
                            shifts to focus on vasodilation and muscle performance to elevate the other elements of your
                            performance.
                        </p>,
                        <p key={5}>
                            Sigma Boost is the most advanced vasodilator complex designed to work in perfect synergy with
                            Platinum Pro to dramatically enhance blood flow and nutrient delivery. Increased blood flow allows you
                            to maximize muscle strength and endurance, and significantly enhance your erection quality.
                            Your second month of performance enhancement saturates your body’s blood flow threshold, allowing
                            you to experience a massive improvement in your muscle development, erection size, and hardness.
                        </p>
                        ]} />
                    </div>
                </div>
            </div>
            <div className="accordion-item my-3" >
                <h2 className="accordion-header bg-dark  " id="headingThree">
                    <button className="accordion-button text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Month 3: SYNCHRONOUS ENHANCEMENT
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{ padding: 0 }}>
                        <AccordianBody key={3} content={[
                            <p key={6}>
                                As you continue your progress, the body needs to sustain the revolutionary changes in your physical and
                                sexual performance. The Platinum Pro System transitions to a maintenance stack, combining Platinum
                                Pro with Platinum Sigma to further push the boundaries of your performance.
                            </p>,
                            <p key={7}>
                                Platinum Alpha is a specially formulated performance-enhancing supplement that features a powerful
                                combination of testosterone-boosting components and blood flow boosters, to work seamlessly with
                                Platinum Pro. Platinum Alpha engages contrasting performance-enhancing pathways to fully sustain
                                your upward trajectory.
                            </p>,
                            <p key={8}>
                                At this stage of progress, you can now expect to experience performance enhancement that surpasses
                                your limitations. You can anticipate extreme changes in your muscle definition, strength, stamina,
                                energy, libido, and most of all – your peak erection size and hardness.
                            </p>
                        ]} />
                    </div>
                </div>
            </div>
            <div className="accordion-item my-3" >
                <h2 className="accordion-header bg-dark  " id="headingFour">
                    <button className="accordion-button text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Month 4 Onwards:  UNLIMITED PERFORMANCE
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{ padding: 0 }}>
                        <AccordianBody key={4} content={[
                            <p key={9}>
                                The 4 th month of the system is where most supplement brands start to enter the flat zone. Taking nutrients for a longer period would trigger supplement resistance that would stall your progress.
                            </p>,
                            <p key={10}>
                                By taking all three major testosterone-boosting supplements of the Platinum Pro system, you begin to
                                create another barrage of nutrients that would create a new wave improvements to your muscle
                                growth, metabolism, energy, libido, and erection quality.
                            </p>

                        ]} />
                    </div>
                </div>
            </div>
            <div className="accordion-item my-3" >
                <h2 className="accordion-header bg-dark  " id="headingFive">
                    <button className="accordion-button text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Month 5: SUSTAINED PROGRESS
                    </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{ padding: 0 }}>
                        <AccordianBody key={5} content='Continuing your progress beyond your peak requires a calculated supplementing sequence that allows
your body to avoid supplement resistance. By maintaining your daily intake of Platinum Pro, you
dramatically alter the body’s intake of performance-enhancing nutrients without having to experience a
downturn or regression on your progress.' />
                    </div>
                </div>
            </div>
            <div className="accordion-item my-3" >
                <h2 className="accordion-header bg-dark  " id="headingSix">
                    <button className="accordion-button text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        Month 6: SYSTEM RESTART
                    </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{ padding: 0 }}>
                        <AccordianBody key={6} content={[
                            <p key={11}>
                                    After taking a month-long break from taking all three supplements, the Platinum Pro system restarts your progress by having another wave of testosterone-boosting nutrients to continue your upward progression.
                            </p>,
                            <p key={12}>
                                Month 6 marks the re-start of your cycle, and this stage essentially establishes a completely elevated base levels for your progress. Instead of experiencing the “flat zone”, restarting on Month 6 allows you to move forward and continue increasing your testosterone levels and blood flow, and developing an unprecedented increase in energy, libido, muscle development, and erection size and hardness. 
                            </p>
                             

                         ]} />
                    </div>
                </div>
            </div>
        </div>
    )
}
function ChartSection() {
    return <div className={`container-fluid pb-md-5 pb-3 ${classes.backImg}`} >
        <div className="container">
            <div className="row">
                <p className={`${main.h1} text-white font-700 text-center`}>
                    The Platinum Pro System
                </p>
                <p className={`${main.content} my-3 font-400 text-white text-center`}>
                    We designed not just ONE supplement formula, but an entire supplement system, to take advantage of the body’s natural process of regaining optimal testosterone levels. We mastered the optimal supplement progression to avoid the flat zone and allow you to continuously improve your performance, month after month.
                </p>
            </div>
            {/* table */}
            <div className="row ">
                <div className={`${classes.chart} mx-auto col-md-10 `}>
                    <Table />
                </div>
                <div className=' my-3 my-md-5'>
                    <Accordian />
                </div>
                <div className={`${classes.chart} mx-auto col-md-10`}>
                    <Table />
                </div>
            </div>
        </div>
    </div>;
}
export default ChartSection;
