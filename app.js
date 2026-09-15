const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const course = document.getElementById("course").value;
    const crn = document.getElementById("crn").value;
    const days = document.getElementById("days").value;
    const startTime = document.getElementById("startTime").value;
    const endTime = document.getElementById("endTime").value;

    const courseList = document.getElementById("courseList");

    const courseItem = document.createElement("div");

    courseItem.innerHTML = `
        <p>
            <strong>${course}</strong><br>
            CRN: ${crn}<br>
            Days: ${days}<br>
            Time: ${startTime} - ${endTime}
        </p>
    `;

    courseList.appendChild(courseItem);

    form.reset();
});
