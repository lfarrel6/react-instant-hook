# react-instant-hook
A lightweight module to instantly create hooks for your contexts

# Motivation
I find that hooks make for much cleaner components in react, and custom context hooks maximise the readability. Writing these custom context hooks ends up being largely boilerplate (`useContext`, validate something is returned, return the value).

This module removes that boilerplate, and lets you create custom hooks for your context with one line. 

# Install
`npm i react-instant-hook`

# Usage
Simply declare your contexts as normal, and then pass them into `getHook` to receive your context hook.

`getHook` can also take a validation function as a second parameter, which you can use to force errors when using your hook inappropriately.
The default validation throws an Error if the value is undefined (assumes you are using it outside of a provider)

## Example

Declare your context and pass it into `getHook`
```js
// SampleContext.js

import React from 'react';
import { getHook } from 'react-instant-hook';

export const SampleContext = React.createContext(undefined);
export const SampleContextProvider = ({ children }) => (
  <SampleContext.Provider value={{ number: 7 }}>
    {children}
  </SampleContext.Provider>
);
export const useSample = getHook(SampleContext);
```

Then use the context with your custom hook
```js
// SampleComponent.js

import React from 'react';
import { SampleContextProvider, useSample } from './SampleContext';

const SampleComponent = () => {
  const { number } = useSample();

  return <h1>The magic number is: {number}</h1>
}

export default () => (
  <SampleContextProvider>
    <SampleComponent />
  </SampleContextProvider>
);
```
