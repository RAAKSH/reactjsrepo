import axios from 'axios';



const KEY ='AIzaSyCLUZEozl2UyL6WR8t3pOhbA2sbIEpQlY4';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResults:5,
        key:KEY,
    }
});