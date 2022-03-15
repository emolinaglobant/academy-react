import { getQuestions } from "../../helpers/getQuestions";

describe('Test helper getQuestions', () => {
  test('should receive questions game', async() => { 
    const questions = await getQuestions('26', 'easy');
    expect(questions).toHaveLength(5);
  });
 
  test('should not receive questions game', async() => { 
  const questions = await getQuestions();
  expect(questions).toHaveLength(0);
  });
})