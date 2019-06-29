import React, { Component, Fragment } from 'react';
import './styles.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';


class CalendarApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedDates: [],
      inputData: {
        date: '',
        mood: '',
        message: '',
      },
      feedBack: ''
    }
    this.getInput = this.getInput.bind(this);
    this.saveObject = this.saveObject.bind(this);
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
    event.preventDefault();

    if (!this.state.inputData.mood || !this.state.inputData.date) {
      this.setState({
        feedBack: 'Fill out all form fields, please'
      })
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
      this.resetFeedBack();
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

  resetFeedBack() {
    this.setState({
      feedBack: '',
    })
  }


  render() {
    return (
      <Fragment>
        <Header />
        <Main
          methodGetInput={this.getInput}
          state={this.state}
          methodSaveObject={this.saveObject}
        />
        <Footer />
      </Fragment>
    )
  }
}

export default CalendarApp;
