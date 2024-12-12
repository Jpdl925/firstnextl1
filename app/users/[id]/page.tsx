import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: { id: number}
}

// Parameters page for id of user
// users/[id of user], will pop up with page of user id

const UserDetailsPage = ({params: {id}}:Props) => {

  if(id>10) notFound();

  return (
    <>
    
    <div>UsersDetailsPage {id}</div>

    </>
  )
}

export default UserDetailsPage