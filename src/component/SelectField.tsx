import React from 'react';

interface IProps {
    onSelectFieldChange: any
}


const SelectField = (props: IProps) => {
    return (
        <div className="select  is-primary">
            <select onChange={props.onSelectFieldChange}>
                <option value="test1">test1</option>
                <option value="test2">test2</option>
                <option value="test3">test3</option>
                <option value="test4">test4</option>
            </select>
        </div>
    );
}

export default SelectField;