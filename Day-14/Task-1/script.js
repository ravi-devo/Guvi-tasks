function submitForm(){
    const firstname = document.getElementById("first-name");
    const lastname = document.getElementById("last-name");
    const address = document.getElementById("address");
    const pincode = document.getElementById("pincode");
    const data = document.getElementById("table-body");
    const element = document.createElement("tr")
    element.innerHTML = `<td>${firstname.value}</td><td>${lastname.value}</td><td>${address.value}</td><td>${pincode.value}</td>`;
    data.appendChild(element);
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        })
      })
  })()