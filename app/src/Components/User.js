
class User {

    constructor(name, age, height, weigth, gender, experience) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weigth = weigth;
        this.gender = gender;
        this.experience = experience;
    }

    friends = [];

    addFriend(friend) {
        this.friends.push(friend);
        friend.push(this);
    }

    removeFriend(friend) {
        this.friends.splice(this.friends.indexOf(friend), 1);
    }

    name() {
        return this.name;
    }

    
    experience() {
        return this.experience;
    }

    friends() {
        return this.friends;
    }
}

module.exports = User;


