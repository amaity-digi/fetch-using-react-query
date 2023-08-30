import React, { useState } from 'react'
import { useQuery } from 'react-query'

const Users = () => {

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');

    const { data, error, isLoading } = useQuery("users", () =>
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
    )

    if (error) return "An error has occurred:" + error.message;
    if (isLoading) return "it's Loading...";

    console.log(data, 'dataaaaa');

    return (
        <div>
            <h3>Users List</h3>
            <ul>
                {
                    data && data?.map(items => (
                        <li key={items.id} >
                            <div>Name: {items.name}</div> ,
                            <div>Email: {items.email}</div>
                        </li>
                    ))
                }
            </ul>
            {/* <h3>Add New User</h3>
            <form>
                <div>
                    <label>Name:</label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <button type='submit'>Add User</button>
                </div>
            </form> */}
        </div>
    )
}

export default Users