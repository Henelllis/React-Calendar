import React , {Component, Fragment}from 'react';
import { connect } from 'react-redux';
import styles from './NewReminderForm.css';
//import Aux from '../../../hoc/Auxillary';
import Backdrop from  '../Backdrop/Backdrop';

class NewReminderForm extends Component{ 

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.show !== this.props.show || nextProps.children !== this.props.children)

    }



    render() {
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
                    <p>{this.props.workingIndex}</p>
                    <form>
                        <input placeholder="ENTER TIME"/>
                        <input placeholder="ENTER MESSAGE"/>
                        <button> ADD REMINDER </button>
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

export default connect(mapStateToProps)(NewReminderForm);
