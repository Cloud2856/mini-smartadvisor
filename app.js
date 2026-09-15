const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const course = document.getElementById("course").value;
    const crn = document.getElementById("crn").value;
    const days = document.getElementById("days").value;
    const startTime = document.getElementById("startTime").value;
    const endTime = document.getElementById("endTime").value;

    console.log("Course:", course);
    console.log("CRN:", crn);
    console.log("Days:", days);
    console.log("Start Time:", startTime);
    console.log("End Time:", endTime);

    alert("Course added!");
});
