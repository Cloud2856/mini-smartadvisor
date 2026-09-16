const supabaseUrl = "https://zdotifrlhcuempmbzppx.supabase.co";
const supabaseKey = "sb_publishable_oNL-OUsQQTSe0BIUq3c8Cg_v1nPjvNz";

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
const form = document.querySelector("form");
const courseList = document.getElementById("courseList");

async function loadCourses() {
    courseList.innerHTML = "";

    const { data, error } = await supabaseClient
        .from("Courses")
        .select("*")
        .order("id", { ascending: true });

    if (error) {
        console.error("Error loading courses:", error);
        return;
    }

    data.forEach(course => {
        displayCourse(course);
    });
}

function displayCourse(course) {
    const courseItem = document.createElement("div");

    courseItem.innerHTML = `
        <p>
            <strong>${course.course}</strong><br>
            CRN: ${course.crn}<br>
            Days: ${course.days}<br>
            Time: ${course.start_time} - ${course.end_time}
        </p>
    `;

    courseList.appendChild(courseItem);
}

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const course = document.getElementById("course").value;
    const crn = document.getElementById("crn").value;
    const days = document.getElementById("days").value;
    const startTime = document.getElementById("startTime").value;
    const endTime = document.getElementById("endTime").value;

    const { data, error } = await supabaseClient
        .from("Courses")
        .insert([
            {
                course: course,
                crn: crn,
                days: days,
                start_time: startTime,
                end_time: endTime
            }
        ])
        .select();

    if (error) {
        console.error("Error adding course:", error);
        alert("There was an error adding the course.");
        return;
    }

    displayCourse(data[0]);

    form.reset();
});

loadCourses();
