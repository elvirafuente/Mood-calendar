import React, {Fragment} from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

function EditPage(props) {
  const { methodGetInput, state, methodSaveObject, methodCancel } = props;

  return (
    <Fragment>
      <form className="main__form">
        <h2 className="main__title">Edit mood ^___^</h2>
        <fieldset className="form__fieldset">
          <label htmlFor="date" className="fieldset__title">Choose a date</label>
          <input 
            className="form__input--date"
            type="date" 
            id="date"
            name="date"
            required
            onChange={methodGetInput}
            value={state.inputData.date}
          />
        </fieldset>
        <fieldset className="fieldset__check">
          <legend className="fieldset__title">Choose your mood</legend>
          <label htmlFor="happy" className="form__input--radio">
              <input
                id="happy"
                type="radio"
                value="happy"
                name="mood"
                checked={state.inputData.mood.includes('happy')}
                onChange={methodGetInput}

              />
              {`:) Happy`}
            </label>
            <label htmlFor="sad" className="form__input--radio">
              <input
                id="sad"
                type="radio"
                value="sad"
                name="mood"
                checked={state.inputData.mood.includes('sad')}
                onChange={methodGetInput}
              />
              {`:( Sad`}
            </label>
        </fieldset>
        {state.inputData.mood === 'happy' 
          ?
          <fieldset className="form__fieldset">
            <label htmlFor="message" className="fieldset__title">Message to remember</label>
            <input
              className="form__input--text"
              type="text" 
              id="message"
              name="message"
              onChange={methodGetInput}
              value={state.inputData.message}
            />
          </fieldset>
        :
        '' }
        <p className="form__feedback">{state.feedBack}</p>
        <fieldset className="form__fieldset">
          {!state.inputData.date || !state.inputData.mood ||state.alreadySaved === true
            ?  
            <button
              className="form__input--button save" 
              type="button" 
              id="submit" 
              onClick={methodSaveObject}
            >
              Save
            </button>
            : 
            <Link to='/'
                className="form__input--button save" 
                type="button" 
                id="submit" 
                onClick={methodSaveObject}
              >
                Save
            </Link>
          }
          
          <Link to='/'>
            <input
              className="form__input--button cancel" 
              type="button" 
              id="cancel" 
              value="Cancel"
              onClick={methodCancel}
            />
          </Link>
        </fieldset>

      </form>

    </Fragment>
  );
}

export default EditPage;
