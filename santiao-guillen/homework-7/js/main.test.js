const {getName , getEmail , getNumberCard , verifyInput , makePayment}= require('./main');

test('Enter name', () => {
  expect(getName({ target: { value: 'santiago' }})).toBe('santiago');
});

test('Enter Email', () => {
  expect(getEmail({ target: { value: 'santiago@gmail.com' }})).toBe("santiago@gmail.com");
});

test('Check that the email includes @', () => {
  expect(getEmail({ target: { value: 'santiago@gmail.com' }})).toMatch(/@/);
});

test('Enter number card', () => {
  expect(getNumberCard({ target: { value: 12345678 }})).toBe(12345678);
});

test('Entering a string in the number card input must be in valid', () => {
  expect(getNumberCard({ target: { value: "santiago" }})).toBeNaN();
});

test('Verify that array contains certain values', () => {
  let array = ["santiago", "santiago@gmail.com", 12345678];
  expect(makePayment(...array)).toContain(12345678);
});

test('Alert of successful payment' , () => {
  const alert = {message: 'successful payment'};
  const getMeessage = jest.fn(alert => alert.message);

  getMeessage(alert);
  expect(getMeessage).toHaveReturnedWith('successful payment');
})

test('the function verifyInput return true', () => {
  const inputEmpty = jest.fn(verifyInput => true);
  inputEmpty();
  expect(inputEmpty).toHaveReturned();
});


test("the form button is pressed", () => {
  const btnPay = jest.fn();
  btnPay();
  expect(btnPay).toHaveBeenCalled();
})