import React from 'react';
import "react-bulma-components/full";

interface IProps {
    tabName?: string,
    onTabChange: any,
    currentTabValue: string
}


const Tabs1 = (props: IProps) => {

    const changeActiveTab = (name: string) => {
        props.onTabChange(name);
    }

    return (
        <div>
            <div className="tabs is-centered is-boxed" id="tabs">
                <ul>
                    <li className={props.tabName === 'Text data' ? "is-active" : undefined} onClick={() => changeActiveTab('Text data')}><a>Text data</a></li>
                    <li className={props.tabName === 'Radio data' ? "is-active" : undefined} onClick={() => changeActiveTab('Radio data')}><a>Radio data</a></li>
                    <li className={props.tabName === 'Select data' ? "is-active" : undefined} onClick={() => changeActiveTab('Select data')}><a>Select data</a></li>
                    <li className={props.tabName === 'Checkbox data' ? "is-active" : undefined} onClick={() => changeActiveTab('Checkbox data')}><a>Checkbox data</a></li>
                </ul>
            </div>
            <div>{props.currentTabValue}</div>
        </div>
    );
}



export default Tabs1;