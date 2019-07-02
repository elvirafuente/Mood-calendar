import React, { Fragment } from 'react';
import './styles.scss';
import SingleMood from '../SingleMood';
import { Link } from 'react-router-dom';

function CalendarPage(props) {
  const { savedMoods } = props;
  return (
    <Fragment>
      <Link to="/edit">
        <button className="form__input--button save">
          + mood
        </button>
      </Link>
      {savedMoods.length 
        ?
          <ul className="mood__list">
            {savedMoods.map((single, index) => {
              return (
                <li key={index}>
                  <SingleMood singleMood={single} />
                </li>
              )
            })}
          </ul>
        :
        <p>You have not moods saved yet</p>
      }
    </Fragment>
  );
}

export default CalendarPage;
