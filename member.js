function skillsMemmber() {
    var skills = ["HTML", "CSS", "JS", "React"];
    var member = {
        name: "Nguyen Van A",
        age: 20,
        skills: skills,
    };
    console.log(member.skills);
    console.log(member.skills[1]);
    console.log(member.skills[3]);
    console.log(member.skills[4]);
    console.log(member.skills.length);
    console.log(member.skills[member.skills.length - 1]);
    console.log(member.skills[member.skills.length - 2]);
    console.log(member.skills[member.skills.length - 3]);
    console.log(member.skills[member.skills.length - 4]);
}