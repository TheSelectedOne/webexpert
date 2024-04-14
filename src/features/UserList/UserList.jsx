import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Link, useLoaderData, useNavigate } from "react-router-dom"
import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"

export const UserList = () => {
    const [search, setSearch] = useState('')
    const allUsers = useLoaderData()
    const filteredUsers = useMemo(() => {
        return allUsers.filter(user => {
            return user.username.toLowerCase().includes(search.toLowerCase()) ||
                user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.email.toLowerCase().includes(search.toLowerCase())
        })
    })
    const navigate = useNavigate()
    const navigateToUser = (id) => {
        navigate(`/user/${id}`)
    }
    const navigateToAddUser = () => {
        navigate(`/user/add`)
    }
    return (
        <div>
            <Button className="mb-5" onClick={navigateToAddUser}>Add user</Button>
            <Input onChange={e => setSearch(e.target.value)} value={search} placeholder="Search user by name, username or email" />
            <Table>
                <TableCaption>User list</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-1/4">Username</TableHead>
                        <TableHead className="w-1/4">Name</TableHead>
                        <TableHead className="w-1/4">Email</TableHead>
                        <TableHead className="w-1/4 text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {!filteredUsers.length && allUsers.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell className="text-left">{user.username}</TableCell>
                            <TableCell className="text-left" >{user.name}</TableCell>
                            <TableCell className="text-left">{user.email}</TableCell>
                            <TableCell className="text-left">{user.email}</TableCell>
                            <TableCell className="text-right"><Button onClick={() => navigateToUser(user.id)} >open</Button></TableCell>
                        </TableRow>
                    )) || filteredUsers.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell className="text-left">{user.username}</TableCell>
                            <TableCell className="text-left" >{user.name}</TableCell>
                            <TableCell className="text-left">{user.email}</TableCell>
                            <TableCell className="text-right"><Button onClick={() => navigateToUser(user.id)} >open</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}