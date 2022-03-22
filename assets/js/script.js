
const ageBttn = document.getElementById('ageBttn')

function askAge(radioInput){
  if(radioInput.checked){
    
    ageBttn.disabled = false;
  }
}


ageBttn.addEventListener('click', () => {
window.location.assign('index2.html');
 
  
});

