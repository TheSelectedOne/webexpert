import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLoaderData, useNavigate } from "react-router-dom"

export const UserProfile = () => {
    const user = useLoaderData()
    const navigate = useNavigate()

    const navigateToEdit = () => {
        navigate(`/user/${user.id}/edit`)
    }

    const navigateToList = () => {
        navigate(`/`)
    }

    const deleteUser = () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this user?')
        if (confirmDelete) {
            const users = JSON.parse(localStorage.getItem('users'))
            const updatedUsers = users.filter((u) => u.id !== user.id)
            localStorage.setItem('users', JSON.stringify(updatedUsers))
            navigateToList()
        }
    }
    return (
        <div className="w-full flex justify-center items-center">
            <Card className="w-[800px] text-left">
                <CardHeader className="flex flex-row justify-between items-center" >
                    <Button onClick={navigateToList}>Back</Button>
                    <CardTitle>User Profile</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <span className="font-semibold">Username:</span> {user.username}
                        </div>
                        <div>
                            <span className="font-semibold">Name:</span> {user.name}
                        </div>
                        <div>
                            <span className="font-semibold">Email:</span> {user.email}
                        </div>
                        <div>
                            <span className="font-semibold">Phone:</span> {user.phone}
                        </div>
                        <div>
                            <span className="font-semibold">Website:</span> {user.website}
                        </div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Address</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div>
                                    <div>
                                        <span className="font-semibold">Street:</span> {user.address.street}
                                    </div>
                                    <div>
                                        <span className="font-semibold">Suite:</span> {user.address.suite}
                                    </div>
                                    <div>
                                        <span className="font-semibold">City:</span> {user.address.city}
                                    </div>
                                    <div>
                                        <span className="font-semibold">Zipcode:</span> {user.address.zipcode}
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
                                        <span className="font-semibold">Name:</span> {user.company.name}
                                    </div>
                                    <div>
                                        <span className="font-semibold">Catch Phrase:</span> {user.company.catchPhrase}
                                    </div>
                                    <div>
                                        <span className="font-semibold">BS:</span> {user.company.bs}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex justify-between mt-5">
                        <Button onClick={navigateToEdit}>Edit</Button>
                        <Button onClick={deleteUser} className="bg-red-500">DELETE</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}