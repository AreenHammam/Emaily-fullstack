import axios from 'axios';

export const getPostsApi = async () => {
    const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
    const response = await axios.get(POSTS_URL);
    return response.data;
}
export const fetchCurrentUser = async () => {
    // try{
        console.log(' i am in api fetchCurrentUser')
        const FETCH_USER_URL = '/api/current_user';
        const response = await axios.get(FETCH_USER_URL);
        return response;
    // }
  /*  catch (e) {
        return e;
    }*/
}

export const stripeTokenAPI = async (token)=>{
    console.log('i am in handleStripeTokeAPI');
    return  await axios.post('/api/stripe',token);


}
