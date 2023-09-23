const API = 'https://api.themoviedb.org/3';
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjEzNGU4MzQ4ODAzOTMyMjY0ZDgxYjU5MDM2NjI5OCIsInN1YiI6IjY1MDRiNWZhZDM4OGFlMDBmZTRiOTQwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qnV5j8rsQg20Mf0p56cN3tWgzRDHp649BLxCCeBN3sA';

export async function requestApi(path, req) {
    const options = {
        method: req,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        }
    };

    const res = await fetch(`${API}${path}`, options);
    return res.json();
}