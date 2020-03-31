import React, {createContext, useReducer} from 'react';

const initialState = {}
const mailContext = createContext(initialState);
const {Provider} = mailContext;

const SendMailContext = ( { children } ) => {
    const [state, dispatch] = useReducer((state, action) => {
        const setForm = (setState) => (form) => {
            setState(form)
            localStorage.setItem("demandeCreation.form", form)
          }

      switch(action.type) {
        case 'action description':
          const newState = '';// do something with the action
          return newState;
        default:
          throw new Error();
      };
    }, initialState);
  
    return <Provider value={{ state, dispatch }}>{children}</Provider>;

  };
  
  export { mailContext, SendMailContext }