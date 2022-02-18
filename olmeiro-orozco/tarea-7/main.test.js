const fs = require("fs");
document.body.innerHTML = fs.readFileSync("./index.html");
// const initialHtml = fs.readFileSync("index.html"); 

const { getByText } = require('@testing-library/dom');

const {
  onlyLettersNumbers,
  matchPasswords,
  validateName,
  validatePassword,
  validateConfirm,
  validateForm,
} = require("./main");

// beforeEach(() => {
//   document.body.innerHTML = initialHtml;
// })

describe('main unit tests', () => {

  test('test function validateName without special characteres', () => {
    const userName = 'olmeiroorozco';
    expect(validateName(userName)).toBe(true);
  });

  test('test function validatePassword', () => {
    const password = 'olme';
    expect(validatePassword(password)).toBe(false);
  });

  test('function validatePassword have return true', () => {
    //const validatePassword = jest.fn(() => true);
    const password = 'olmeiro1234';
    expect(validatePassword(password)).toBe(false);
  });

  test('function validatePassword have return false', () => {
    //const validatePassword = jest.fn(() => true);
    const password = 'alñkdjfkajñdfkajñlkfjañldkfjañlkfjlañ';
    expect(validatePassword(password)).toBe(false);
  });
 
  test('function validatePassword have return false', () => {
    //const validatePassword = jest.fn(() => true);
    const password = 'alñkdjfkajñdfkajñlkfjañldkfjañlkfjlañ';
    expect(validatePassword(password)).toBe(false);
  });
 
  test('function validatePassword have return false', () => {
    //const validatePassword = jest.fn(() => true);
    const password = '12345';
    expect(validatePassword(password)).toBe(true);
  });
  
  test('function validatePassword have return false with empty input', () => {
    //const validatePassword = jest.fn(() => true);
    const password = '';
    expect(validatePassword(password)).toBe(false);
  });
 
  test('function validateConfirm have return false', () => {
    //const validatePassword = jest.fn(() => true);
    const password = '123';
    //validatePassword(password);
    expect(validateConfirm(password)).toBe(false);
  });
 
  test('function validateConfirm have return true', () => {
    //const validatePassword = jest.fn(() => true);
    const password = '1234567';
    //validatePassword(password);
    expect(validateConfirm(password)).toBe(true);
  });

  test('function validateConfirm have return false with empty input', () => {
    //const validatePassword = jest.fn(() => true);
    const password = '';
    //validatePassword(password);
    expect(validateConfirm(password)).toBe(false);
  });

  test('errorUserName span shouldbe empty.', () => {

    const errorUserName = document.getElementById('errorUserName');
    expect(getByText(errorUserName, '')).toBeTruthy();
  });

  test('testing function matchPasswords with same password and confirm', () => {
    const pwd1 = '12345';
    const pwd2 = '12345';

    expect(matchPasswords(pwd1, pwd2)).toBe(true);
  })
 
  test('testing function matchPasswords with diferent inputs values', () => {
    const pwd1 = '12345';
    const pwd2 = '23456';

    expect(matchPasswords(pwd1, pwd2)).toBe(false);
  });
 
  test('testing function matchPasswords with incorrect values', () => {
    const pwd1 = 'mipassword';
    const pwd2 = '';

    expect(matchPasswords(pwd1, pwd2)).toBe(false);
  });


 
});
