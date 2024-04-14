import { nanoid } from "nanoid";
import { redirect } from "react-router-dom";

export const userAddAction = async ({ request, params }) => {
    const data = await request.formData();
    const user = Object.fromEntries(data);
    const newUser = {
        id: nanoid(),
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
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
    } else {
        localStorage.setItem('users', JSON.stringify([newUser]));
    }
    return redirect(`/user/${newUser.id}`)
}