/** @format */
import React from 'react';

export function getHook(
  context: React.Context<T> | Array<React.Context<T>>,
  validateValue: (val: T) => boolean
): () => T | Array<T>;
