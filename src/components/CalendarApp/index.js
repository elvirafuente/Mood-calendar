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
      feedBack: '',
      alreadySaved: false,
    }
    this.getInput = this.getInput.bind(this);
    this.saveObject = this.saveObject.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  getInput(event) {
    const { value } = event.target;
    const { name } = event.target;
    this.saveState(name, value);
    this.checkDate(name, value);
    // if(name === 'date'){
    //   if(this.compareArrayDates(value) !== undefined){
    //     this.setState({
    //       alreadySaved: true,
    //     });
    //     this.writeFeedback('Sorry, but the date that you checked has been already saved');
    //   } else {
    //     this.setState({
    //       alreadySaved: false,
    //     });
    //   }
    // }
  }

  checkDate(name, value){
    if(name === 'date'){
      if(this.compareArrayDates(value) !== undefined){
        this.setState({
          alreadySaved: true,
        });
        this.writeFeedback('Sorry, but the date that you checked has been already saved');
      } else {
        this.setState({
          alreadySaved: false,
        });
      }
    }
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

  saveObject() {
    const { mood } = this.state.inputData;
    const { date } = this.state.inputData;

    if (!mood || !date) {
      this.writeFeedback('Fill out all form fields, please');
    } else if(this.compareArrayDates(date) !== undefined ){
      this.writeFeedback('Sorry, but the date that you checked has been already saved');
    } else {
      this.setState(prevState => {
        return {
          savedDates: [
            ...prevState.savedDates,
            prevState.inputData
          ],
        }
      })
      this.resetStateData();
    }
  }


  resetStateData() {
    this.setState({
      inputData: {
        date: '',
        mood: '',
        message: '',
      },
      alreadySaved:false,
      message:'',
    })
  }

  writeFeedback(feedbackText){
    this.setState({
      feedBack: feedbackText,
    })
  }
  
  compareArrayDates(date){
    // const { date } = this.state.inputData;
    const { savedDates } = this.state;
    const indexDate = savedDates.find( savedDate => savedDate.date === date )
    return indexDate
  }



  cancel(){
    this.resetStateData();
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
