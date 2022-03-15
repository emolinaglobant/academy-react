import Swal from "sweetalert2";

export async function getQuestions (numberCategory, difficulty) {

  try {
    const url = `https://opentdb.com/api.php?amount=5&category=${numberCategory}&difficulty=${difficulty}&type=multiple`;
  
    const resp = await fetch(url);
    
    const { results } = await resp.json();
  
    return results;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: 'We have troubles with connection'
    })
  }
 

}