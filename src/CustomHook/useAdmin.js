import { useEffect, useState } from 'react'

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        const email = user?.email;
        console.log(email)
        if (email) {
            fetch(`https://dry-wave-47967.herokuapp.com/user/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data?.admin)
                })
        }
    }, [user])
    return [admin]
}

export default useAdmin;