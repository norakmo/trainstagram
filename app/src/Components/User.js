
class User {
    
    //tlf og email også?
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
    }

    removeFriend(friend) {
        index = this.friends.indexOf(friend);
        this.friends.splice(index, 1);
    }

    get name() {
        return this.name;
    }

    get experience() {
        return this.experience;
    }
}