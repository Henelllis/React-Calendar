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
        reminderTime: null
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.show !== this.props.show || nextProps.children !== this.props.children)

    }

    onReminderTextChange = (event) => {
        console.log(event.target.value);
         
        this.setState({reminderText: event.target.value})
    }

    onSubmitHandler = (event ) => {
        this.props.addReminder(this.props.workingIndex - 1, {reminderNote: this.state.reminderText, reminderTime:this.state.reminderTime });
        event.preventDefault();
        event.target.reset();
        
        this.setState({reminderText: ""})
        this.setState({reminderText: null})
        //Invoke a function to set parent component to set show to false, at the end of course
        this.props.closeAddReminder();
    }



    render() {
        let index = 0;
        if( this.props.workingIndex){
            index = this.props.workingIndex - 1;
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
                    <p>{this.props.days[index].date}</p>
                    
                    <form className={styles.formStyle}  onSubmit={this.onSubmitHandler}>
                        <input  className={styles.formInput}type="time" placeholder="ENTER TIME"/>
                        {/* TODO: ADD VALIDATION OF IF CHAR > 0 AND <= 30 DO NOT NEED JSX */}
                        <input className={styles.formInput} type="text" 
                                                            placeholder="ENTER MESSAGE"
                                                            value={this.state.reminderText}
                                                            onChange={this.onReminderTextChange}/>
                        <button 
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
