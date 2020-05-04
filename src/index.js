/** @format */

import { useContext } from 'react';
import { isArray } from './utils';

const defaultValidation = (val) => val !== undefined;

const checkContext = (context) => {
  if (!context.Provider || !context.Consumer) {
    throw new Error('getHook was provided a value which is not a context');
  }
};

const createHook = (context, validateFn) => {
  checkContext(context);
  checkReactVersion();

  const value = useContext(context);
  if (!validateFn(value)) {
    throw new Error('Using a context hook outside of the context provider');
  }
  return value;
}

export const getHook = (contexts, validateValue = defaultValidation) => () => {
  //naive sanity checks that provided context is in fact a context
  if(isArray(contexts)){
    return contexts.map((context) => createHook(context, validateValue));
  }
  return createHook(contexts, validateValue);
};
