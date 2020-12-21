import React from 'react'

interface IProp {
    value: string,
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}


const TextField = (props: IProp) => {
    return (
        <div>
            <input type='text' value={props.value} onChange={props.onChangeHandler} name="textFieldValue"></input>
        </div>
    )
}

export default TextField;