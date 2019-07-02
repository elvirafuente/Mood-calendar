import React from 'react';
import './styles.scss';
import EditPage from '../EditPage';
import CalendarPage from '../CalendarPage';
import { Route, Switch } from 'react-router-dom';



function Main(props) {
  const { methodGetInput, state, methodSaveObject, methodCancel } = props;

  return (
    <main className="page__main">
      <Switch >
        <Route
          exact path="/"
          render={() => {
            return (
              <CalendarPage
                savedMoods={state.savedDates}
              />
            )
          }}
        />
        <Route
          exact path="/edit"
          render={() => {
            return (
              <EditPage
                methodGetInput={methodGetInput}
                state={state}
                methodSaveObject={methodSaveObject}
                methodCancel={methodCancel}
              />
            )
          }}
        />
      </Switch>
    </main>
  );
}

export default Main;
