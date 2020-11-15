function validate()
{
  var errors = [];

  //Ensures reed, swab, mouth gt/eq 0
  var reed = document.getElementById("reed").value;
  var swab = document.getElementById("swab").value;
  var mouth = document.getElementById("mouth").value;

  if(reed==""){
    errors.push("Must input a quantity of reed");
  }
  else if(reed<0){
    errors.push("Quantity of reed cannot be negative");
  }

  if(swab==""){
    errors.push("Must input a quantity of swab");
  }
  else if(swab<0){
    errors.push("Quantity of swab cannot be negative");
  }

  if(mouth==""){
    errors.push("Must input a quantity of mouth");
  }
  else if(mouth<0){
    errors.push("Quantity of mouth cannot be negative");
  }

  //email is non-empty, and in proper form

  var username = document.getElementById("username").value;

  if(username=="")
  {
    errors.push("Must input a User Name")
  }
  else if(username.includes("@")){
    var user_split = username.split("@");
    if(user_split[1].includes("."))
    {
      var email = user_split[0];
      var domain = user_split[1];
      user_split = domain.split("."); //reusing variables
      var extension = user_split[1];
      domain = user_split[0];
      if(email=="" || domain=="" || extension==""){
        errors.push("User Name must be a valid email address");
      }
    }
    else {
      errors.push("User Name must be a valid email address");
    }
  }
  else{
    errors.push("User Name must be a valid email address");
  }

  //password is not blank
  var password = document.getElementById("password").value;
  if(password=="")
  {
    errors.push("Must enter a Password");
  }

  //one of the shipping options is chosen
  var s1 = document.getElementById("s1");
  var s2 = document.getElementById("s2");
  var s3 = document.getElementById("s3");
  if(!(s1.checked || s2.checked || s3.checked)){
    errors.push("Must select a Shipping Option");
  }

  //display errors
  if(errors.length > 0)
  {
    var message = "Error:\n";
    errors.forEach(function(errMsg){
      message+=errMsg+"\n";
    })
    alert(message.replace(/\n$/,"")); //fancy method that removes last /n
    return false;
  }
  return true;
}