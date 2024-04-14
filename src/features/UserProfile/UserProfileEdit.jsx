import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Form } from "react-router-dom"
import { Link, useLoaderData, useNavigate } from "react-router-dom"


export const UserProfileEdit = () => {
    const user = useLoaderData()
    const navigate = useNavigate()

    const navigateBack = () => {
        navigate(`/user/${user.id}`)
    }

    const [formData, setFormData] = useState({
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
        phone: user.phone,
        website: user.website,
        address: {
            street: user.address.street,
            suite: user.address.suite,
            city: user.address.city,
            zipcode: user.address.zipcode
        },
        company: {
            companyName: user.company.name,
            catchPhrase: user.company.catchPhrase,
            bs: user.company.bs
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleChangeCompany = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            company: {
                ...prevData.company,
                [name]: value
            }
        }));
    }

    const handleChangeAddress = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            address: {
                ...prevData.address,
                [name]: value
            }
        }));
    }

    return (
        <div className="w-full flex justify-center items-center">
            <Form method="post">
                <Card className="w-[800px] text-left">
                    <CardHeader>
                        <CardTitle>Edit User Profile</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col space-y-4">
                            <div>
                                <span className="font-semibold">Username:</span>
                                <Input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <span className="font-semibold">Name:</span>
                                <Input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <span className="font-semibold">Email:</span>
                                <Input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <span className="font-semibold">Phone:</span>
                                <Input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <span className="font-semibold">Website:</span>
                                <Input
                                    type="text"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                />
                            </div>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Address</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div>
                                        <div>
                                            <span className="font-semibold">Street:</span>
                                            <Input
                                                type="text"
                                                name="street"
                                                value={formData.address.street}
                                                onChange={handleChangeAddress}
                                            />
                                        </div>
                                        <div>
                                            <span className="font-semibold">Suite:</span>
                                            <Input
                                                type="text"
                                                name="suite"
                                                value={formData.address.suite}
                                                onChange={handleChangeAddress}
                                            />
                                        </div>
                                        <div>
                                            <span className="font-semibold">City:</span>
                                            <Input
                                                type="text"
                                                name="city"
                                                value={formData.address.city}
                                                onChange={handleChangeAddress}
                                            />
                                        </div>
                                        <div>
                                            <span className="font-semibold">Zipcode:</span>
                                            <Input
                                                type="text"
                                                name="zipcode"
                                                value={formData.address.zipcode}
                                                onChange={handleChangeAddress}
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Company</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div>
                                        <div>
                                            <span className="font-semibold">Name:</span>
                                            <Input
                                                type="text"
                                                name="companyName"
                                                value={formData.company.companyName}
                                                onChange={handleChangeCompany}
                                            />
                                        </div>
                                        <div>
                                            <span className="font-semibold">Catch Phrase:</span>
                                            <Input
                                                type="text"
                                                name="catchPhrase"
                                                value={formData.company.catchPhrase}
                                                onChange={handleChangeCompany}
                                            />
                                        </div>
                                        <div>
                                            <span className="font-semibold">BS:</span>
                                            <Input
                                                type="text"
                                                name="bs"
                                                value={formData.company.bs}
                                                onChange={handleChangeCompany}
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="flex justify-between mt-5">
                            <Button className="bg-red-500" onClick={navigateBack}>CANCEL</Button>
                            <Button type="submit">SAVE</Button>
                        </div>
                    </CardContent>
                </Card>
            </Form>
        </div>
    )
}