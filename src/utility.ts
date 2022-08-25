// const fs = require('fs');
// const path = require('path');
import fs from 'fs';
import path from 'path';
import { FileType } from './model';

export const readPrincipleFile = async (
  principleKey: string,
  type: FileType
) => {
  const text = await fetch(
    `./solid-codes/${principleKey}/${principleKey}.${type}.code.ts`
  );
  const reader = await text.text();
  return reader;
};

export const readCreditsFile = async () => {
  const text = await fetch('./solid-codes/credits.txt');
  const reader = await text.text();
  return reader;
};
