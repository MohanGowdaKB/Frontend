function showSection(type) {
  const content = document.getElementById("sectionContent");
  document.getElementById("eduBtn").style.backgroundColor = "#007BFF";
  document.getElementById("certBtn").style.backgroundColor = "#007BFF";

  if (type === "education") {
    content.innerHTML = `
      <ul>
        <li>B.E. in Electronics and communication, VTU</li>
        <li>PUC – PCMC, XYZ College</li>
      </ul>
    `;
    document.getElementById("eduBtn").style.backgroundColor = "#0056b3";
  } else if (type === "certifications") {
    content.innerHTML = `
      <ul>
        <li>AI & ML Specialization - Coursera</li>
        <li>Web Development Bootcamp - Udemy</li>
      </ul>
    `;
    document.getElementById("certBtn").style.backgroundColor = "#0056b3";
  }
}

function improveBio() {
  const bio = document.getElementById("bio").value;

  // Simulate AI backend response
  setTimeout(() => {
    const improvedText = "I am an enthusiastic developer skilled in AI and IoT, dedicated to building innovative tech solutions.";
    document.getElementById("improvedBio").innerText = improvedText;
    document.getElementById("improvedBio").style.display = "block";
  }, 1000);
}