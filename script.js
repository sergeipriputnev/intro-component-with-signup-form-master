const email = document.querySelector('#email');
const form = document.querySelector('#form');
const emailWarn = document.querySelector('#email-warning')
const inputs = document.querySelectorAll('input');
const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function checkFunction(e){
  e.preventDefault();
  let notEmptyInputs = 0;
  for (let input of inputs){
    if (!input.value){
      input.parentElement.classList.add('warning');
    }
    else {
      input.parentElement.classList.remove('warning');
      notEmptyInputs++;

      if(notEmptyInputs == inputs.length&&email.value.match(validEmail)){
        for (let input of inputs){
          input.value='';
        }}
    }
  }
  if(!email.value.match(validEmail)&&(email.value != '')){
    email.parentElement.classList.add('warning');
    emailWarn.innerText = 'Looks like this is not an email';
  }
  else {emailWarn.innerText = 'Email cannot be empty';}
};


form.addEventListener('submit', checkFunction);
for (let input of inputs){
  input.addEventListener('input', function(){
    input.parentElement.classList.remove('warning');
  })
}

