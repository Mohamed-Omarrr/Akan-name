
var gender1 = document.getElementById("gender");
var male1 = document.getElementById("male")
var female1 = document.getElementById("female")
var week = document.getElementById("week")
var monday = document.getElementById("monday")
var tuesday = document.getElementById("tuesday")
var wednesday = document.getElementById("wednesday")
var thursday = document.getElementById("thursday")
var friday = document.getElementById("friday")
var saturday = document.getElementById("saturday")
var sunday = document.getElementById("sunday")

event.preventDefault()



function start() {



if (gender1 == male1 ) {
    var gender = "male";
    
}
else if ( gender1 == female1)  
  var gender = "female";

  else{
      return false;
  };

  switch(gender){
      case "male":
          
          if (week == monday ) {
              alert(" Your akan name is Kwadwo")
              
          }
      
          else if (week == tuesday){
              alert("Your akan name is Kwabena")
          }
          else if (week == wednesday){
              alert("Your akan name is Kwaku")
          }
          else if (week == thursday){
              alert("Your akan name is Yaw")
          }
          else if (week == friday){
              alert("Your akan name is Kofi")
          }
          else if (week == saturday){
            alert("Your akan name is Kwame")
          }
          else if (week == sunday){
            alert("Your akan name is Kwasi")
        }
        else{
            return false;
        }

          

  };
  switch (gender) {
      case "female":
        if (week == monday ) {
            alert(" Your akan name is Adwoa")
            
        }
    
        else if (week == tuesday){
            alert("Your akan name is Abena")
        }
        else if (week == wednesday){
            alert("Your akan name is Akua")
        }
        else if (week == thursday){
            alert("Your akan name is Yaa")
        }
        else if (week == friday){
            alert("Your akan name is Afua")
        }
        else if (week == saturday){
          alert("Your akan name is Ama")
        }
        else if (week == sunday){
          alert("Your akan name is Akosua")
      }
      else{
          return false;
      }

};
}
