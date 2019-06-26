import React, {Component, Fragment} from 'react';
import './styles.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';


class CalendarApp extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    )
  }
}

export default CalendarApp;
