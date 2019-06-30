import React, {Fragment} from 'react';
import './styles.scss';

function EditPage(props) {
  const { methodGetInput, state, methodSaveObject } = props;

  return (
    <Fragment>
      <form>
        <fieldset>
          <label htmlFor="date">Choose a date</label>
          <input 
            type="date" 
            id="date"
            name="date"
            required
            onChange={methodGetInput}
            value={state.inputData.date}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="happy">
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
            <label htmlFor="sad">
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
          <fieldset>
            <label htmlFor="message">Message</label>
            <input 
              type="text" 
              id="message"
              name="message"
              onChange={methodGetInput}
              value={state.message}
            />
          </fieldset>
        :
        '' }
        <fieldset>
          <input 
            type="submit" 
            id="submit" 
            value="Guardar"
            onClick={methodSaveObject}
          />
        </fieldset>
      </form>
      <p>{state.feedBack}</p>
    </Fragment>
  );
}

export default EditPage;
