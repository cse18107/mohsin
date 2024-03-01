export default function validation(values) {
  let error = {};
  // const email_pattern = /^[^\s@]+@[^\s@]+\. [^\s@]+$/
  // const password_pattern = /^(?=.*\d) (?=.*[a-z]) (?=.*[A-Z]) [a-zA-Z0-9]{8,}$/

  if (values?.first_name === "") {
    error.first_name = "First Name should not be empty";
  } else if (values.first_name?.length > 100) {
    error.first_name = "First name too long";
  } else {
    error.first_name = "";
  }

  if (values.last_name === "") {
    error.last_name = "Last Name should not be empty";
  } else if (values?.last_name?.length > 100) {
    error.last_name = "Last name too long";
  } else {
    error.last_name = "";
  }

  if (values?.email === "") {
    error.email = "email should not be empty";
  }
  // else if(!email_pattern.test(values.email)) {
  //     error.email = "E-mail Didn't match"
  // }
  else {
    error.email = "";
  }

  if (values?.username === "") {
    error.username = "Username should not be empty";
  } else if (values?.username?.length > 100) {
    error.last_name = "Username too long";
  } else {
    error.username = "";
  }

  if (values?.password === "") {
    error.password = "Password should not be Wmpty";
  }
  // else if(!password_pattern.test(values.password)) {
  //     error.password = "Password didn't match"
  // }
  else {
    error.password = "";
  }

  if (values?.confirmPassword === "") {
    error.confirmPassword = "Password should not be empty";
  }
  // else if(!password_pattern.test(values.confirmPassword)) {
  //     error.confirmPassword = "Password didn't match"
  // }
  else if (values?.confirmPassword === values?.password) {
    error.confirmPassword = "";
  } else {
    error.confirmPassword = "Password didn't match";
  }
  return error;
}
