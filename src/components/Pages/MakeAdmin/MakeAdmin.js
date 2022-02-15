import { TextField, Button, Alert } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    onst[email, setEmail] = useState('');

    const [success, setSuccess] = useState(false)


    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleAdmin = e => {
        const user = { email };

        fetch('https://young-ravine-53752.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('')
                    setSuccess(true)
                }
                console.log(data)
            })
        e.preventDefault()
    };
    return (
        <div>
            <h2>Make Admin</h2>

            <form onSubmit={handleAdmin}>
                <TextField
                    level="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard">
                </TextField>

                <Button type="submit" variant="contained">Make Admin</Button>
                {
                    success && <Alert severity="success">Make Admin Success</Alert>
                }
            </form>
        </div>
    );
};

export default MakeAdmin;