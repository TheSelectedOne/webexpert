import { redirect } from "react-router-dom";

export const userEditAction = async ({ request, params }) => {
    const data = await request.formData();
    const user = Object.fromEntries(data);
    const updatedUser = {
        id: params.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website,
        address: {
            street: user.street,
            suite: user.suite,
            city: user.city,
            zipcode: user.zipcode
        },
        company: {
            name: user.companyName,
            catchPhrase: user.catchPhrase,
            bs: user.bs
        }
    }

    if (localStorage.getItem('users')) {
        const users = JSON.parse(localStorage.getItem('users'));
        const index = users.findIndex((user) => user.id == params.id);
        users[index] = updatedUser;
        localStorage.setItem('users', JSON.stringify(users));
    }
    return redirect(`/user/${updatedUser.id}`)
}