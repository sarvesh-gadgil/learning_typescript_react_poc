import React from 'react';

interface IProps {
    radioButtonValue: string,
    onChangeRadioHandler: any
}

const RadioButton = (props: IProps) => {
    return (
        <div>
            <input id='r1' type="radio" name="radioButtonValue" value='r1' onChange={props.onChangeRadioHandler} checked={props.radioButtonValue==="r1"}/> r1
            <input id='r2' type="radio" name="radioButtonValue" value="r2" onChange={props.onChangeRadioHandler} checked={props.radioButtonValue==="r2"} /> r2
        </div>
    );
}

export default RadioButton;