import React from 'react'
import Card from './CardComponennt'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../redux/actions/user'

const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)

    React.useEffect(() => {
        dispatch(getUser({
            id: 1,
            nama: "farhan ammar",
            company: {
                name: "clode.com",
                catchPhrase: "Multi-layered client-server neural-yet"
            }
        }))
    })
    return (
        <>
            {users.length}
            <Card />
        </>
    )
}