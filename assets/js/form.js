// const nameInput = document.querySelector("#name");
// const email = document.querySelector("#email");
// const subject = document.querySelector("#subject");
// const message = document.querySelector("#message")


document.querySelector("#contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let nameInput = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let subject = document.querySelector("#subject").value;
    let message = document.querySelector("#message").value;
    console.log(nameInput, email, subject, message);
  
    sendEmail(nameInput, email, subject, message);
  
    document.querySelector("#contact-form").reset();
  }

  // Send Email Info
  function sendEmail(nameInput, email, subject, message){
     Email.send({
         Host: "smtp.gmail.com",
         Username: 'natlisjo@gmail.com',
         Password: "fwbqvzahepehdefw",
         To: 'natlisjo@gmail.com',
         From: 'natlisjo@gmail.com',
         Subject: `${nameInput} skickade ett meddelande till dig`,
         Body: `Namn: ${nameInput} <br> Email: ${email} <br> Ämne: ${subject} <br> Meddelande: ${message}`,
     }).then((message) => alert("mail sent successfully"))

  }