function incfollowers(users,id){
    for(let i=0;i<users.length;i++){
        if(users[i].id === id){
            users[i].followers++;
            return users;
        }
    }
}

const users = [
    { id: 1, name: 'Alice', age: 25, active: true, followers: 100 },
    { id: 2, name: 'Bob', age: 17, active: false, followers: 50 },
    { id: 3, name: 'Charlie', age: 30, active: true, followers: 200 },
    { id: 4, name: 'David', age: 15, active: false, followers: 75 },
    { id: 5, name: 'Eve', age: 22, active: true, followers: 150 }
];

console.log(incfollowers(users,1));