import userEmailToId from "../utils/userEmailToId";




async function handleGetComments(email, session){
    const userID = await userEmailToId(email);

}

export default handleGetComments;