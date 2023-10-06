const form = document.querySelector(".login-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const formData = new FormData(event.target);
  const formDataObject = {};

 
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  
  if (!formDataObject.email || !formDataObject.password) {
    alert("Please fill in all fields.");
    return; 
  }

  
  console.log(formDataObject);
  event.target.reset();
});

