import React, { useState, useEffect } from 'react'

function FooterCard(props) {
    const { title, id, buyHandler,removeHandler, purchased,price} = props
    const AddHandler = (title, id,price) => {
        buyHandler(title, id,price)
        props.itemHandler(1)
    }
    const RemoveHandler=(id)=>{
            // const index=purchasedList.((item)=>item==id)
            removeHandler(id)
            props.itemHandler(0)
    }
    return (
        <div className="text-center d-flex flex-column justify-content-between align-content-center" >
            <img className='mx-auto'
                style={{
                    width: 120
                }}
                src={require('../../images/Section6/Group61.png')} alt="" />
            <p className='font-400 my-3  text-light'>{title}</p>
            {purchased ? <button onClick={() =>RemoveHandler(id) }  className="text-center py-2 d-inline-block text-nowrap w-full  font-700 btnDanger" style={{
                borderRadius: 4
            }}>
                Remove
            </button> : <button onClick={() => AddHandler(title, id,price)} className="text-center py-2 d-inline-block w-full text-nowrap   text-light font-700 btnPrimary" style={{
                borderRadius: 4
            }}>
                Buy Now
            </button>}
        </div>
    )
}
export default FooterCard

