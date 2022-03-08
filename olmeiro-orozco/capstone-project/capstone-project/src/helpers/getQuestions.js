
export async function getQuestions (numberCategory, difficulty) {
  const url = `https://opentdb.com/api.php?amount=5&category=${numberCategory}&difficulty=${difficulty}&type=multiple`;
  
  const resp = await fetch(url);
  
  const { results } = await resp.json();

  return results;

}