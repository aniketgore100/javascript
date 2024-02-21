document.addEventListener("DOMContentLoaded", function() {
    const data = {
        person_name : "",
        person_email : "",
        person_age : "",
        person_position : "",
        person_address : "" 
    };

    function updateData() {
        data.person_name = document.getElementById("name").value;
        data.person_email = document.getElementById("email").value;
        data.person_age = document.getElementById("age").value;
        data.person_position = document.getElementById("position").value;
        data.person_address = document.getElementById("address").value;

        console.log(data);
    }

    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        input.addEventListener('input', updateData);
    });

    // Initial log
    console.log(data);
});
