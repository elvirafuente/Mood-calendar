import React, {Fragment} from 'react';
import './styles.scss';

function EditPage(props) {
  const { methodGetInput, state } = props;

  return (
    <Fragment>
      <form>
        <fieldset>
          <label htmlFor="date">Choose a date</label>
          <input 
            type="date" 
            id="date"
            min="2019-01-01" 
            max="2019-12-31"
            name="date"
            required
            onChange={methodGetInput}
            
          />
        </fieldset>
        <fieldset>
          <label htmlFor="happy">
              <input
                id="happy"
                type="radio"
                value="happy"
                name="mood"
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
                onChange={methodGetInput}
              />
              {`:( Sad`}
            </label>
        </fieldset>
        {state.mood === 'happy' 
          ?
          <fieldset>
            <label htmlFor="message">Message</label>
            <input 
              type="text" 
              id="message"
              name="message"
              onChange={methodGetInput}
            />
          </fieldset>
        :
        '' }
        <fieldset>
          <input 
            type="submit" 
            id="submit" 
            value="Guardar"
          />
        </fieldset>
      </form>
    </Fragment>
  );
}

export default EditPage;
