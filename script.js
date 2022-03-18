
const ageBttn = document.getElementById('sbmtBttn')
const introCard = document.getElementById('introCard')
const selectionBox = document.getElementById('selectionBox')

// var now = confirm("Yes")



ageBttn.addEventListener('click', () => {
  introCard.setAttribute('style', 'display:none');
  selectionBox.setAttribute('style', 'visibility:visible');
  // document.getElementsByName('questoion')[0].focus;
  
});
