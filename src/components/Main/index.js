import React from 'react';
import './styles.scss';
import EditPage from '../EditPage';
import CalendarPage from '../CalendarPage';
// import { Route, Switch } from 'react-router-dom';



function Main(props) {
  const { methodGetInput, state, methodSaveObject } = props;

  return (
    <main>
      main
      <EditPage 
        methodGetInput={methodGetInput}
        state={state}
        methodSaveObject={methodSaveObject}
      />
      <CalendarPage />
    </main>
  );
}

export default Main;
