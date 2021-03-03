// import generateRandomString from '../'
const generateRandomString =require('../')

describe('test generate string function', () => {
    test('generateRandomString', () => {
		const uid = generateRandomString(20);
		// console.log(uid);
		//=>0kgStW1N1QDJi0IOfmhQ
      expect(uid).toBe(uid)
    });
  });
