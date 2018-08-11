import React , {Component, Fragment}from 'react';
import { connect } from 'react-redux';
import styles from './NewReminderForm.css';
//import Aux from '../../../hoc/Auxillary';
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
        console.log(event.target.value);
         let name  = event.target.name;
         let value = event.target.value;
        console.log('name : ', name , ' value: ' , value);
        this.setState({reminderText: event.target.value},
                        () => {this.validateField(name ,value )})
    }

    validateField(fieldName  ,value){
        let reminderTextValid = this.state.reminderTextValid;
        let reminderTimeValid = this.state.reminderTimeValid;

        switch(fieldName) {
            case 'reminderText':
                reminderTextValid = value.length > 0 && value.length <= 30;
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
        this.setState({formValid: this.state.reminderTextValid && true /*TODO: REPLACE WITH TIME VALIDATION WHEN COMPLETED*/})
    }

    onSubmitHandler = (event ) => {
        this.props.addReminder(this.props.workingIndex - 1, {reminderNote: this.state.reminderText, reminderTime:this.state.reminderTime });
        event.preventDefault();
        event.target.reset();
        
        this.setState({reminderText: ""})
        this.setState({reminderText: null,
                        formValid:false})
        //Invoke a function to set parent component to set show to false, at the end of course
        this.props.closeAddReminder();
    }



    render() {
        let index = 0;
        if( this.props.workingIndex){
            index = this.props.workingIndex - 1;
        }
        let classesForText = styles.formInputTextBox
        let classesForTextTotal = styles.formTotalText;


        if(!this.state.reminderTextValid){
            classesForText = styles.formInputTextBox + " " + styles.formInputInvalidTextBox;
            classesForTextTotal = styles.formTotalText + " " + styles.formInvalidTotalText;
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
                            <input  className={styles.formInputTime}type="time" placeholder="ENTER TIME"/>
                        </div>
                        <input className={classesForText} type="text" 
                                                            placeholder="ENTER MESSAGE"
                                                            value={this.state.reminderText}
                                                            onChange={this.onReminderTextChange}
                                                            name={'reminderText'}
                                                            autocomplete="false"/>
                        <span className={classesForTextTotal}> total text: {this.state.reminderText ? this.state.reminderText.length + '/30' : '0/30'} </span>
                        <button className={styles.formSubmitButton}
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
