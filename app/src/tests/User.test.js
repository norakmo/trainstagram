import User from "../classes/User";
import "@testing-library/jest-dom/extend-expect";

describe("Testing Userclass", () => {

    test("addFriends and removeFriends function", async () => {
        let user1 = new User("Daniel", "20", "180", "70", "mann", "10");
        let user2 = new User("Marius", "25", "190", "85", "mann", "7");
        expect(user1.friends).toHaveLength(0);

        user1.addFriend(user2);
        expect(user1.friends).toHaveLength(1);
        expect(user1.friends).toContain(user2);

        user1.removeFriend(user2);
        expect(user1.friends).toHaveLength(0);
    });
});