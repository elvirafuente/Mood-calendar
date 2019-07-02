import React, { Component, Fragment } from 'react';
import './styles.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';


class CalendarApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedDates: JSON.parse(localStorage.getItem('savedDates')) || [],
      inputData: {
        date: '',
        mood: '',
        message: '',
      },
      feedBack: ''
    }
    this.getInput = this.getInput.bind(this);
    this.saveObject = this.saveObject.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  getInput(event) {
    const { value } = event.target;
    const { name } = event.target;
    this.saveState(name, value);
  }

  saveState(name, value) {
    this.setState(prevState => {
      return {
        inputData: {
          ...prevState.inputData,
          [name]: value,
        }
      }
    })
  }

  saveObject(event) {
    // event.preventDefault();
    
    if (!this.state.inputData.mood || !this.state.inputData.date) {
      this.writeFeedback('Fill out all form fields, please');
    } else if( this.compareArrayDates() !== -1 ){  
        this.writeFeedback('Sorry, but the date that you checked has beeen already saved')
    } else {
      this.setState(prevState => {
        return {
          savedDates: [
            ...prevState.savedDates,
            prevState.inputData
          ],
        }
      })
      this.resetInputData();
      // this.writeFeedback('Your mood has been saved');
    }
  }

  resetInputData() {
    this.setState({
      inputData: {
        date: '',
        mood: '',
        message: '',
      }
    })
  }

  writeFeedback(feedbackText){
    this.setState({
      feedBack: feedbackText,
    })
  }
  
  compareArrayDates(){
    const { date } = this.state.inputData;
    const { savedDates } = this.state;
    const indexDate = savedDates.findIndex( savedDate => savedDate.date === date )
    return indexDate
  }

  cancel(){
    this.resetInputData();
    this.writeFeedback('');

  }

  componentDidUpdate(){
    localStorage.setItem('savedDates', JSON.stringify(this.state.savedDates));
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Main
          methodGetInput={this.getInput}
          state={this.state}
          methodSaveObject={this.saveObject}
          methodCancel={this.cancel}
        />
        <Footer />
      </Fragment>
    )
  }
}

export default CalendarApp;
