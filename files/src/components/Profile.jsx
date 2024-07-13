import {userContext} from '../context/userContext'
import { useContext } from 'react'

export default function Profile() {
    const {user}=useContext(userContext)
  return (
    <div>
      <h1>hello {user.userEmail}</h1>
      <h1>hello {user.password}</h1>
    </div>
  )
}
