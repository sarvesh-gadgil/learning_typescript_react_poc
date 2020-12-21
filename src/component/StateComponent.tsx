import React from 'react'
import TextField from './TextField'
import RadioButton from './RadioButton'
import SelectField from './SelectField'
import Checkbox from './CheckBox'
import Tabs from './Tabs'
import Modal from './Modal'

interface IState {
    textFieldValue: string,
    radioButtonValue: string,
    selectFieldValue: string,
    checkedItems: any,
    tabName: string,
    modalStatus: boolean
}

class StateComponent extends React.Component<{}, IState> {

    state = {
        textFieldValue: '',
        radioButtonValue: 'r1',
        selectFieldValue: 'test1',
        checkedItems: new Map(),
        tabName: 'Text data',
        modalStatus: false
    }

    onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            textFieldValue: event.target.value
        });
    }

    onChangeRadioHandler = (event: any) => {
        this.setState({
            radioButtonValue: event.target.value
        });
    }

    onSelectFieldChange = (event: any) => {
        this.setState({
            selectFieldValue: event.target.value
        });
    }

    onCheckboxFieldChange = (event: any) => {
        const item = event.target.value;
        const isChecked = event.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    }

    onTabChange = (name: string) => {
        this.setState({
            tabName: name
        });
    }

    showModal = (val: boolean) => {
        this.setState({
            modalStatus: val
        });
    }

    render() {
        let currentTabValue: string = '';
        if (this.state.tabName === 'Text data') {
            currentTabValue = this.state.textFieldValue;
        } else if (this.state.tabName === 'Radio data') {
            currentTabValue = this.state.radioButtonValue;
        } else if (this.state.tabName === 'Select data') {
            currentTabValue = this.state.selectFieldValue;
        } else if (this.state.tabName === 'Checkbox data') {
            let arr: any = [];
            this.state.checkedItems.forEach((value, key) => {
                if (value === true) {
                    arr.push(key);
                }
            });
            currentTabValue = arr.join();
        }

        return (
            <div>
                <TextField value={this.state.textFieldValue} onChangeHandler={this.onChangeHandler} />
                <RadioButton radioButtonValue={this.state.radioButtonValue} onChangeRadioHandler={this.onChangeRadioHandler} />
                <SelectField onSelectFieldChange={this.onSelectFieldChange} />
                <Checkbox onCheckboxFieldChange={this.onCheckboxFieldChange} />
                <div><button className="button is-info is-rounded" onClick={this.showModal.bind(this, true)}>Show modal</button></div>
                <br />
                <Tabs tabName={this.state.tabName} onTabChange={this.onTabChange} currentTabValue={currentTabValue} />
                <Modal modalStatus={this.state.modalStatus} showModal={this.showModal} />
            </div>
        );
    }
}

export default StateComponent;