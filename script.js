// Sample student details
var students = [
    {
        roll: "101",
        name: "Arun Kumar",
        course: "BCA",
        marks: [85, 78, 90]
    },
    {
        roll: "102",
        name: "Priya",
        course: "BCA",
        marks: [92, 88, 95]
    },
    {
        roll: "103",
        name: "Rahul",
        course: "B.Sc Computer Science",
        marks: [35, 28, 65]
    }
];

function checkResult() {
    var rollInput = document.getElementById("rollNumber").value.trim();
    var message = document.getElementById("message");
    var resultBox = document.getElementById("result");

    message.innerHTML = "";
    resultBox.style.display = "none";

    if (rollInput === "") {
        message.innerHTML = "Please enter your roll number.";
        return;
    }

    var studentFound = null;

    for (var i = 0; i < students.length; i++) {
        if (students[i].roll === rollInput) {
            studentFound = students[i];
            break;
        }
    }

    if (studentFound === null) {
        message.innerHTML = "No student found. Try 101, 102 or 103.";
        return;
    }

    document.getElementById("studentName").innerHTML = studentFound.name;
    document.getElementById("studentRoll").innerHTML = studentFound.roll;
    document.getElementById("studentCourse").innerHTML = studentFound.course;

    var subjects = ["English", "Mathematics", "Computer Science"];
    var tableContent = "";
    var total = 0;
    var passed = true;

    for (var j = 0; j < studentFound.marks.length; j++) {
        tableContent += "<tr><td>" + subjects[j] + "</td><td>" +
            studentFound.marks[j] + "</td></tr>";
        total = total + studentFound.marks[j];

        if (studentFound.marks[j] < 35) {
            passed = false;
        }
    }

    document.getElementById("marksTable").innerHTML = tableContent;

    var percentage = (total / 300) * 100;
    var grade;

    if (!passed) {
        grade = "F";
    } else if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "E";
    }

    document.getElementById("total").innerHTML = total;
    document.getElementById("percentage").innerHTML = percentage.toFixed(2) + "%";
    document.getElementById("grade").innerHTML = grade;
    document.getElementById("status").innerHTML = passed ? "PASS" : "FAIL";
    document.getElementById("status").style.color = passed ? "green" : "red";

    resultBox.style.display = "block";
}
