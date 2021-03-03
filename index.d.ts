/**
 @example
 ```
import generateRandomString = require('generate-random-string');

const newMultiFactorUserUid = generateRandomString(20);
//=> 
 ```
 */
declare function generateRandomString(length: string, allowNumbers: boolean): string;

export = generateRandomString;