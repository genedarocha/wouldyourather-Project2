
  /*     File Name   : app.js
          Date        : 31st May 2020
          Description : This is the Redux logging tool that lets you replay problems as if they happened in your own browser.
  */
 

const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.log('The action: ', action);
    const returnValue = next(action);
    console.log('The new state: ', store.getState());
    console.groupEnd();
    return returnValue
  };
  
  export default logger