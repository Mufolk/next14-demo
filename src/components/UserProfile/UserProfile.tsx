import React, { useEffect } from 'react'
import s from './UserProfile.module.css'

interface User {
  name: string
  email: string
}

async function fetchUser(userId: number): Promise<User> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  )
  return res.json()
}

interface UserProfileProps {
  userId: number
}

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
  const [user, setUser] = React.useState<User | null>(null)

  useEffect(() => {
    fetchUser(userId).then(setUser)
  }, [userId])

  if (!user) return <div>Loading...</div>

  return (
    <div className={s.wrapper}>
      <div className={s.data_wrapper}>
        <p>Username</p>
        <h1>{user.name}</h1>
      </div>

      <div className={s.data_wrapper}>
        <p>Email</p>
        <h3>{user.email}</h3>
      </div>

    </div>
  )
}

export default UserProfile
