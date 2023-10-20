const inputField = document.getElementById('inputField');
const form = document.getElementById('myForm');


form.addEventListener('submit', function(event) {
  event.preventDefault();
  const inputValue = inputField.value;
  const numericalphabetThingy = /^[a-zA-Z0-9]+$/;
  
  if (numericalphabetThingy.test(inputValue)) {
    alert('Form Submitted Successfully');
  } else {
    alert('Input must be alphanumeric');
  }
});