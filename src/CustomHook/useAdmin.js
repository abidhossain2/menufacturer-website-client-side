import { useEffect, useState } from 'react'

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        const email = user?.email;
        console.log(email)
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setAdmin(data.admin)
                    console.log(data.admin)
                })
        }
    }, [user])
    return [admin]
}

export default useAdmin;