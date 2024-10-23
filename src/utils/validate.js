export const checkForValidation = (email,password)=>{
    const isEmailIsValid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    const isPasswordIsValid = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)
    // const isFullNameIsValid = /^[a-zA-Z\u00C0-\u00FF .'-]+$/.test(name);
    
    // if(!isEmailIsValid) return "Email is not valid"
    // if(!isPasswordIsValid)  return " Password is not valid"
    // // if(!isFullNameIsValid) return "Name is not valid"

  if(!isEmailIsValid && !isPasswordIsValid){
    return "Email and password is not valid"
  }

  else if (!isEmailIsValid){
    return "Email is not valid"
  }
  else if (!isPasswordIsValid){
    return " Password is not valid"
  }
  else {
     // if they are valid return null otherwise have this strings in them
    return null
  }
}

