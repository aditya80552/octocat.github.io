// script.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("crimeReportForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        // Send the form data to your server using AJAX or fetch API.
        fetch("/your-server-endpoint", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server (e.g., display a success message).
            console.log(data);
            alert("Report submitted successfully!");
            form.reset();
        })
        .catch(error => {
            console.error(error);
            alert("An error occurred while submitting the report.");
        });
    });
});
