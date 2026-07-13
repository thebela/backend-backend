function getActiveUsers(users) {
    const activeUsers = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].active) {
            activeUsers.push(users[i]);
        }
    }
    return activeUsers;
}
    
function totalusers(users) {
    return users.length;
}

function getAdultusers(users){
    for(let i=0;i<users.length;i++){
        if(users[i].age>=18){
            console.log(users[i]);
        }
}
}

function getUserById(users, id) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            return users[i];
        }
    }
    return null;
}

function CountActiveUsers(users) {
    let count = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].active) {
            count++;
        }
    }
    return count;
}

function calculatestatistics(users) {
    let totalUsers = users.length;
    let activeUsers = CountActiveUsers(users);
    let inactiveUsers = totalUsers - activeUsers;
    let adultUsers = 0;
    let minorUsers = 0;

    for (let i = 0; i < users.length; i++) {
        if (users[i].age >= 18) {
            adultUsers++;
        } else {
            minorUsers++;
        }
    }

    return {
        totalUsers: totalUsers,
        activeUsers: activeUsers,
        inactiveUsers: inactiveUsers,
        adultUsers: adultUsers,
        minorUsers: minorUsers
    };
}

const users = [
    { id: 1, name: "Aman", age: 22, active: true },
    { id: 2, name: "Rahul", age: 17, active: false },
    { id: 3, name: "Priya", age: 25, active: true },
    { id: 4, name: "John", age: 30, active: false },
    { id: 5, name: "Neha", age: 20, active: true }
];