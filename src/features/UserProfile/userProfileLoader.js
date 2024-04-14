export const userProfileLoader = async ({ params }) => {
    if (localStorage.getItem('users')) {
        return JSON.parse(localStorage.getItem('users')).filter((user) => user.id == params.id)[0];
    }
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id).then((res) => res.json());
    return response;
}