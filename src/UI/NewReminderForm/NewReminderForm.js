import React , {Component, Fragment}from 'react';
import { connect } from 'react-redux';
import styles from './NewReminderForm.css';
import Backdrop from  '../Backdrop/Backdrop';
import * as actions from '../../store/actions/dates';


class NewReminderForm extends Component{ 

    state = {
        time: null,
        reminderText: null,
        reminderTime: null,
        formErrors: {reminderText: '', reminderTime: ''},
        reminderTextValid: false,
        reminderTimeValid: false,
        formValid: false
    }


    onReminderTextChange = (event) => {
         let name  = event.target.name;
         let value = event.target.value;
        this.setState({reminderText: event.target.value},
                        () => {this.validateField(name ,value )})
    }

    onReminderTimeChange = (event) => {

         let name  = event.target.name;
         let value = event.target.value;
        this.setState({reminderTime: event.target.value},
                        () => {this.validateField(name ,value )})
    }

    validateField(fieldName  ,value){
        let reminderTextValid = this.state.reminderTextValid;
        let reminderTimeValid = this.state.reminderTimeValid;

        switch(fieldName) {
            case 'reminderText':
                reminderTextValid = value.length > 0 && value.length <= 30;
                break;
            case 'reminderTime':
                reminderTimeValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(value);
                break;
            default:
                break;
        }

        this.setState({
            reminderTextValid: reminderTextValid,
            reminderTimeValid: reminderTimeValid
        }, this.validateForm);
      
    }

    validateForm () {
        this.setState({formValid: this.state.reminderTextValid && this.state.reminderTimeValid /*TODO: REPLACE WITH TIME VALIDATION WHEN COMPLETED*/})
    }

    onSubmitHandler = (event ) => {
        this.props.addReminder(this.props.workingIndex - 1, {reminderNote: this.state.reminderText, reminderTime:this.state.reminderTime });
        event.preventDefault();
        event.target.reset();
        
        this.setState({reminderText: ""})
        this.setState({reminderText: null,
                        reminderTimeValid: false,
                        formValid:false,
                        reminderTextValid: false})
        this.props.closeAddReminder();
    }



    render() {
        let index = 0;
        if( this.props.workingIndex){
            index = this.props.workingIndex - 1;
        }
        let classesForText = styles.formInputTextBox
        let classesForTextTotal = styles.formTotalText;
        let classesForTime = styles.formInputTime
        let classesForButton = styles.formSubmitButton;


        if(!this.state.reminderTextValid){
            classesForText = styles.formInputTextBox + " " + styles.formInputInvalidTextBox;
            classesForTextTotal = styles.formTotalText + " " + styles.formInvalidTotalText;
        }
        else{
            
            classesForText = styles.formInputTextBox + " " + styles.formInputValidTextBox;
            classesForTextTotal = styles.formTotalText + " " + styles.formValidTotalText;
        }

        if(!this.state.reminderTimeValid){
            classesForTime = styles.formInputTime + " " + styles.formInputInvalidTextBox;
        }
        else {
            classesForTime = styles.formInputTime + " " + styles.formInputValidTextBox;
        }

        if(this.state.formValid){
            classesForButton =  styles.formSubmitButtonValid; 
        }
        return(
           
            <Fragment>
                {this.props.children}
                <Backdrop show={this.props.show} clicked={this.props.reminderClosed}/>
                <div 
                    className={styles.NewReminderForm}
                    
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0',
                    }}>
                    <div className={styles.dateHeader}>{this.props.days[index].date}</div>
                    
                    <form className={styles.formStyle}  onSubmit={this.onSubmitHandler}>
                        <div className={styles.timeContainer}>
                        <p> Time: </p>
                            <input  className={classesForTime}
                                    onChange={this.onReminderTimeChange}
                                    type="time" 
                                    name="reminderTime"/>
                        </div>
                        <input className={classesForText} type="text" 
                                                            placeholder="ENTER MESSAGE"
                                                            value={this.state.reminderText}
                                                            onChange={this.onReminderTextChange}
                                                            name={'reminderText'}
                                                            autocomplete="false"/>
                        <span className={classesForTextTotal}> total text: {this.state.reminderText ? this.state.reminderText.length + '/30' : '0/30'} </span>
                        <button className={classesForButton}
                                type="submit" 
                                disabled={!this.state.formValid}
                           > ADD REMINDER </button>
                    </form>
                </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state => {
    return{
        workingIndex: state.currentIndex,
        days: state.daysOfTheMonth,
    }
}


const mapDispatchToProps = dispatch => {
    return{
        addReminder : (index,reminder) => dispatch(actions.addReminder(index, reminder))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(NewReminderForm);
