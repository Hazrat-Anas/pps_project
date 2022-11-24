import React from 'react'
import './card.css'
function Card() {
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                   <div className='images-div'>
                    <img src={require('../../images/user1.png')} className="card-img-top" alt="..." />
                    <img className='ratingLogo' style={{width:100}}  src={require('../../images/rating.png')} alt="..." />
                   <div className='imageFooter py-3 both-center text-center text-light'>
                        
                          <div className='align-top pb-4'>
                              <span  className='font-700 '>Ronald V</span>
                              <span className='font-700 ms-2'>. US</span>
                          </div>
                        
                   </div>

                   </div>
                    <div className="card-body">
                        {/* <h5 className="card-title">Card title</h5> */}
                        <p className="card-text font-400">“This is really good stuff, especially if you pair it with the booster drops, I’m getting amazing workouts”</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Card
