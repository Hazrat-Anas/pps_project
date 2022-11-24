import React from 'react';
import classes from './chartSection.module.css'
import main from './main.module.css'
const AccordianBody = (props) => {
    return (
        <p className={`font-400 ${main.content} py-2 mb-0`}>
            {props.content}
        </p>
    )
}
const Accordian = () => {
    return (
        <div className="accordion" id="accordionExample">
            <div className={`accordion-item my-3`} style={{border:0}}>
                <h2 className="accordion-header  " id="headingOne">
                    <button className="accordion-button  text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Muira Puama 
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse show collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{padding:0}}>
                    <AccordianBody content='A natural, fast-acting testosterone booster' />
                    </div>
                </div>
            </div>
            <div className="accordion-item  my-3" style={{border:0}}>
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Damiana extract 
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{padding:0,border:0}}>
                       <AccordianBody content='A brain-boosting supplement that helps improve sexual pleasure and satisfaction.'/>
                    </div>
                </div>
            </div>
            <div className="accordion-item my-3"  style={{border:0}}>
                <h2 className="accordion-header bg-dark  " id="headingThree">
                    <button className="accordion-button text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Xanthoparmelia scabrosa  
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{padding:0}}>
                    <AccordianBody content='A natural ingredient that helps boost testosterone production.' />
                    </div>
                </div>
            </div>
            <div className="accordion-item my-3"  style={{border:0}}>
                <h2 className="accordion-header bg-dark  " id="headingFour">
                    <button className="accordion-button text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Saw Palmetto 
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{padding:0}}>
                    <AccordianBody content='A natural ingredient that helps boost testosterone production.' />
                    </div>
                </div>
            </div>
            <div className="accordion-item my-3"  style={{border:0}}>
                <h2 className="accordion-header bg-dark  " id="headingFive">
                    <button className="accordion-button text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    L-Citrulline  
                    </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{padding:0}}>
                    <AccordianBody content='An amino acid that acts as a precursor to L-Arginine.' />
                    </div>
                </div>
            </div>
            <div className="accordion-item my-3"  style={{border:0}}>
                <h2 className="accordion-header bg-dark  " id="headingSix">
                    <button className="accordion-button text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    Butea Superba   
                    </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{padding:0}}>
                    <AccordianBody content='A natural testosterone-boosting agent that prolongs the effects of the formula' />
                    </div>
                </div>
            </div>
            <div className="accordion-item my-3"  style={{border:0}}>
                <h2 className="accordion-header bg-dark  " id="headingSeven">
                    <button className="accordion-button text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                    Rhodiola Rosea    
                    </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{padding:0}}>
                    <AccordianBody content='A natural testosterone booster that prevents mental, physical, and sexual fatigue.' />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Accordian