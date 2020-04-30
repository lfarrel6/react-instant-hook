# react-instant-hook
A lightweight module to instantly create hooks for your contexts

# Usage
Simply declare your contexts as normal, and then pass them into `getHook` to receive your context hook.

`getHook` can also take a validation function as a second parameter, which you can use to force errors when using your hook inappropriately.
The default validation throws an Error if the value is undefined (assumes you are using it outside of a provider)

## Example
```js
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