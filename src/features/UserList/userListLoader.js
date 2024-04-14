export const userListLoader = async () => {
    if (localStorage.getItem('users')) {
        return JSON.parse(localStorage.getItem('users'));
    }
    const response = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
    localStorage.setItem('users', JSON.stringify(response));
    return response;
}