const formElement = document.getElementById('contact-form');

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target); 

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const query = document.querySelector('input[name="query"]:checked');
    const message = document.getElementById('message');
    const agreement = document.getElementById('agree');

    validateField(firstName, "First Name");
    validateField(lastName, "Last Name");
    validateEmail(email);
    validateQuery(query);
    validateField(message, "Message");
    validateAgreement(agreement);
});

function validateField(field, name) {
  let check = field.value;
  if (check == "") {
    alert(`${name} must be filled out`);
    //activate error messge here depending on the field, remove alert msg
    return false;
  }
   //if the field is valid then you can get value of email here
   console.log(check);
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email.value)){
    alert("Email is not valid");
    //activate error message for email, remove alert msg
    return false;
  }
  //if the email is valid then you can get value of email here
  console.log(email.value);
}

function validateQuery(query) {
  if (!query) {
    alert("Please select a Query");
    //activate error message for query here, remove alert msg
    return false;
  } 
  //if the query is selected then you can get value of email here
  console.log(query.value);
}

function validateAgreement(checked) {
  let agree = checked;
  if (!agree.checked) {
    alert("Please check agreement")
    //activate error message for agreement checkbox, remove alert msg
    return false;
  }
  //if checked then continue
  console.log(agree.checked);
}