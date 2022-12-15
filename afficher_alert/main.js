


function getMessage(){
  let message = document.getElementById('message').value;
  if (message.length !== 0 && message.trim() !== "" ) {
    alert("le champ est le message:    " + message);
    
  } else {
    alert("le champ ne doit pas être vide");
    
  }

}

