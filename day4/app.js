
function userinfo(user){
console.log(user.name);
console.log(user.role);
for(let i=0;i<(user.skills).length;i++){
console.log(user.skills[i]);
};
}

const user = {
    name: "Aman",
    age: 22,
    role: "Backend Engineer",
    skills: [
        "JavaScript",
        "Git",
        "Problem Solving"
    ]
};

(userinfo(user));
