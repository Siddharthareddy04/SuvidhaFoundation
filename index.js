let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let d3 = document.getElementById("d3");
let context = document.getElementById("content");
context.style.lineHeight = "2";
function id1() {
    d1.style.color = "#cf843e";
    d2.style.color = "black";
    d3.style.color = "black";
    context.style.lineHeight = "2";
    context.innerHTML = "Suvidha Mahila Mandal, established on September 8, 1995, is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future. The organization has provisions of student internships, student mentorship, and the scope to volunteer. Through these programs, the organization aims to achieve the vision of imparting innovative education that stays with the students forever and equips them for the unforeseen future."
};
function id2() {
    d2.style.color = "#cf843e";
    d1.style.color = "black";
    d3.style.color = "black";
    context.style.lineHeight = "2";
    context.innerHTML = "<b>Imparting Education:</b><br> Suvidha Foundation strives to bridge the educational gap by providing access to quality education, particularly for underprivileged children and those facing financial challenges.<br><b>Empowering Communities:</b><br> We aim to empower individuals and communities through social awareness campaigns, healthcare initiatives, and vocational training programs.<br><b>Building a Sustainable Future:</b><br>The foundation actively promotes environmental sustainability through tree plantation drives and fostering greener practices."
};
function id3() {
    d3.style.color = "#cf843e";
    d2.style.color = "black";
    d1.style.color = "black";
    context.style.lineHeight = "2";
    context.innerHTML = "Suvidha Foundation envisions a future of equal opportunities, quality education, and a sustainable, healthy environment.<br><b>Key Activities:</b><br><b>Education:</b> Scholarships, student internships, mentorship programs, and enhancing educational access in communities.<br><b>Social Awareness:</b> Campaigns on hygiene, healthcare, and environmental sustainability.<br><b>Healthcare:</b> Facilitating access to affordable, quality healthcare services.<br><b>Tree Plantation:</b> Promoting environmental sustainability through tree plantation drives.<br><b>Women Empowerment:</b> Initiatives for research, skill development, and supporting women’s growth."
};
id1();
document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("#donationTable tbody");

    function addDonation(name, amount) {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${name}</td><td>${amount}</td>`;
        tableBody.appendChild(row);
    }

    // Example data to populate table dynamically
    addDonation("Sandeep", "1000");
    addDonation("Rahul", "1500");
    addDonation("Arthi", "2000")
});

function showSection(sectionId) {
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("helpnowSection").style.display = "none";
    document.getElementById("eventSection").style.display = "none";
    document.getElementById("galarySection").style.display = "none";
    document.getElementById("donarSection").style.display = "none";
    document.getElementById("contactSection").style.display = "none";
    document.getElementById(sectionId).style.display = "block";
}

document.getElementById("mainLogo").addEventListener("click", function () {
    showSection("homeSection");
});

document.getElementById("navItem2").addEventListener("click", function () {
    showSection("helpnowSection");
});

document.getElementById("navItem3").addEventListener("click", function () {
    showSection("eventSection");
});

document.getElementById("navItem4").addEventListener("click", function () {
    showSection("galarySection");
});

document.getElementById("navItem5").addEventListener("click", function () {
    showSection("donarSection");
});

document.getElementById("navItem6").addEventListener("click", function () {
    showSection("contactSection");
});

showSection("homeSection");

function openMessageForm() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfAaaHU-k256CY6_83JPBOYeVFtKuKBvqMJb7oBIsDLKRmwNg/viewform", "_blank");
}