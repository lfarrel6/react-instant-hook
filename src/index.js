/** @format */

import { useContext } from 'react';

const defaultValidation = (val) => !!val;

const checkContext = (context) => {
  if (!context.Provider || !context.Consumer) {
    throw new Error('getHook was provided a value which is not a context');
  }
};

const checkReactVersion = () => {
  if (typeof useContext !== 'function') {
    throw new Error('You must be using React >= 16.8 to use getHook');
  }
};

export const getHook = (context, validateValue = defaultValidation) => () => {
  //naive sanity checks that provided context is in fact a context
  checkContext(context);
  checkReactVersion();

  const value = useContext(context);
  if (!validateValue(value)) {
    throw new Error('Use a context hook outside of the context provider');
  }
  return value;
};
