import React from 'react';


interface IProps {
    onCheckboxFieldChange: any
}


const CheckBox = (props: IProps) => {
    return (
        <div>
            <input type="checkbox" name="checkboxFieldValue" value="test1" onChange={props.onCheckboxFieldChange} /> test1
            <input type="checkbox" name="checkboxFieldValue" value="test2" onChange={props.onCheckboxFieldChange} /> test2
        </div>
    );
}

export default CheckBox;