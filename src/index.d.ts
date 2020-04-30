/** @format */
import React from 'react';

export function getHook(
  context: React.Context<T>,
  validateValue: (val: T) => boolean
): () => T;
