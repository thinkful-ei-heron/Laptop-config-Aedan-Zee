import React from 'react'
import RadioSelectors from './RadioSelectors'

export default function SelectHardware(props) {
    const featureHash = props.feature + '-' + props.idx;
    
    const options = props.features[props.feature].map(item => {
        return <RadioSelectors
        item={item} 
        feature={props.feature} 
        selected={props.selected} 
        updateFeature={props.updateFeature} 
        currency ={props.currency}
        />
    });

    return (
        <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
            <h3>{props.feature}</h3>
        </legend>
        {options}
        </fieldset>
    );
}