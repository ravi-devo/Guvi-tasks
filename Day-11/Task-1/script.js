function additionalAttendee(value) {
    //console.log(value)
    if (value == '2') {
        //window.location.reload();
        //console.log(value)
        let createElement = document.createElement("p");
        createElement.innerHTML = `<label>Name of the attendee 2: <input type="text" /></label>`

        let formElement = document.getElementById("form-id");
        formElement.appendChild(createElement);
    }else{
        // console.log('false')
        // console.log(typeof value)
        window.location.reload();
    }
}