import React, {Component, Fragment} from 'react';
import './styles.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';


class CalendarApp extends Component{
  constructor(props){
    super(props);
    this.state = {
      savedDates: [],
      date: '',
      mood: '',
      message: '',
    }
    this.getInput = this.getInput.bind(this);
  }

  getInput(event){
    const { value } = event.target;
    const { name } = event.target; 
    this.saveState(name, value);
  }

  saveState(name, value){
    this.setState ({
      [name] : value,
    })
  }



  render(){
    return (
      <Fragment>
        <Header />
        <Main 
          methodGetInput={this.getInput}
          state={this.state}
        />
        <Footer />
      </Fragment>
    )
  }
}

export default CalendarApp;
