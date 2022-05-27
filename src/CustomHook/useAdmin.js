import { useEffect, useState } from 'react'

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        const email = user?.email;
        console.log(email)
        if (email) {
            fetch(`https://fathomless-earth-48987.herokuapp.com/user/${email}`, {
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