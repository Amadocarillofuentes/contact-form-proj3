const formElement = document.getElementById("contact-form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const query = document.querySelector('input[name="query"]:checked');
  const message = document.getElementById("message");
  const agreement = document.getElementById("agree");

  validateField(firstName, "First Name");
  validateField(lastName, "Last Name");
  validateEmail(email);
  validateQuery(query);
  validateField(message, "Message");
  validateAgreement(agreement);

  // show success msg

  if (
    validateField(firstName, "First Name") === true &&
    validateField(lastName, "Last Name") === true &&
    validateEmail(email) === true &&
    validateQuery(query) === true &&
    validateField(message, "Message") === true &&
    validateAgreement(agreement) === true
  ) {
    document.querySelector(".success-msg").classList.add("active-animation");
    setTimeout(() => {
      document
        .querySelector(".success-msg")
        .classList.remove("active-animation");
    }, 3000);
  }
});

function validateField(field, name) {
  let check = field.value;
  if (check == "") {
    alert(`${name} must be filled out`);

    //activate error messge here depending on the field, remove alert msg
    return false;
  } else {
    //if the field is valid then you can get value of email here
    console.log(check);
    return true;
  }
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    alert("Email is not valid");
    //activate error message for email, remove alert msg
    return false;
  } else {
    //if the email is valid then you can get value of email here
    console.log(email.value);
    return true;
  }
}

function validateQuery(query) {
  if (!query) {
    alert("Please select a Query");
    //activate error message for query here, remove alert msg
    return false;
  } else {
    //if the query is selected then you can get value of email here
    console.log(query.value);
    return true;
  }
}

function validateAgreement(checked) {
  let agree = checked;
  if (!agree.checked) {
    alert("Please check agreement");
    //activate error message for agreement checkbox, remove alert msg
    return false;
  } else {
    //if checked then continue
    console.log(agree.checked);
    return true;
  }
}

//showing error state

function checkEmptyFields() {
  const fieldNames = [
    "first-name",
    "last-name",
    "email",
    "query",
    "message",
    "agree",
  ];

  fieldNames.forEach((field) => {
    let isEmpty = true;
    let input = document.getElementById(field);
    let inputs = document.getElementsByName(field);

    const errorDiv = document.querySelector(`.hide.${field}`);

    if (input) {
      if (input.type === "checkbox") {
        isEmpty = !input.checked;
      } else {
        isEmpty = input.value.trim() === "";
      }

      if (inputs.length > 0 && inputs[0].type === "radio") {
        isEmpty = !Array.from(inputs).some((radio) => radio.checked);
      }
    }

    if (errorDiv) {
      errorDiv.style.display = isEmpty ? "block" : "none";
    }

    if ((isEmpty = input.value.trim() === "")) {
      input.style.border = "1px solid var(--red)";
    } else {
      input.style.border = "1px solid var(--light-grey)";
    }
  });
}

document.querySelectorAll("input, textarea, select").forEach((element) => {
  element.addEventListener("change", checkEmptyFields);
});

// active state

function changeBg(clickedRedio) {
  const OptionBtns = document.querySelectorAll(".option");

  OptionBtns.forEach((btn) => {
    btn.style.background = "var(--white)";
    btn.style.border = "1px solid var(--light-grey)";
  });

  clickedRedio.closest(".option").style.background = "var(--light-green)";
  clickedRedio.closest(".option").style.border = "1px solid var(--green)";
}
