function skillsMember() {
  var member = document.getElementById("member");
  var skills = document.getElementById("skills");
  var projects = document.getElementById("projects");
  var contact = document.getElementById("contact");
  var about = document.getElementById("about");
  var memberContent = document.getElementById("memberContent");
  var skillsContent = document.getElementById("skillsContent");
  var projectsContent = document.getElementById("projectsContent");
  var contactContent = document.getElementById("contactContent");
  var aboutContent = document.getElementById("aboutContent");
  var memberBtn = document.getElementById("memberBtn");
  var skillsBtn = document.getElementById("skillsBtn");
  var projectsBtn = document.getElementById("projectsBtn");
  var contactBtn = document.getElementById("contactBtn");
  var aboutBtn = document.getElementById("aboutBtn");
  var memberBtn = document.getElementById("memberBtn");
  var skillsBtn = document.getElementById("skillsBtn");
  var projectsBtn = document.getElementById("projectsBtn");
  var contactBtn = document.getElementById("contactBtn");
  var aboutBtn = document.getElementById("aboutBtn");

  memberBtn.addEventListener("click", function() {
    member.classList.add("active");
    skills.classList.remove("active");
    projects.classList.remove("active");
    contact.classList.remove("active");
    about.classList.remove("active");
    memberContent.classList.add("active");
    skillsContent.classList.remove("active");
    projectsContent.classList.remove("active");
    contactContent.classList.remove("active");
    aboutContent.classList.remove("active");
  });
}
