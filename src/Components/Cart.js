import React from 'react'
import ChoiceSelected from './ChoiceSelected';
import Total from './Total'


export default function Cart(props) {
    const summary = Object.keys(props.selected).map((feature, idx) => {
       return <ChoiceSelected 
            feature={feature}
            idx={idx}
            selected={props.selected}
            currency={props.currency} />
      });
    return (
    <section className="main__summary">
        <h2>Your cart</h2>
        {summary} 
        <Total 
            selected={props.selected}
            currency={props.currency}
        />
    </section>
    )
}
    