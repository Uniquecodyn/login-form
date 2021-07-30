const myform = document.querySelector('.myform');
console.log(myform);
const email = document.querySelector('.myemail');
console.log(email);
const password = document.querySelector('.mypwd');
myform.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValue = email.value.trim();
  const paswd = password.value.trim();
  let myemail = emailValue.replace(/ /g, "");
  let userpassword = paswd.replace(/ /g, "");
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
  if (myemail === "" || myemail.length < 15 || myemail.length > 20) {
    alert(`Email must be btw 15 and 20 characters`);
    return false;
  } else if (userpassword === "" || userpassword === null) {
    alert('Password cannot be empty');
    return false;
  } //else if (pass < 8 || pass > 20) {
  //   alert("Password must be more than 8 and less than 20")
  // }
  else if (regex.test(userpassword) === false) {
    alert("password must be between 8 to 20 characters, password must contain at least capital letter, number, special character(@$!%*?&) and small letter");
    return false;
  } else {
    alert("Login Successfull");
    document.querySelector('.myemail').value = "";
    document.querySelector('.mypwd').value = "";
    return true;
  }
})

