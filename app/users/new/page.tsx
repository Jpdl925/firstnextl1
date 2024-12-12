'use client'

import { useRouter } from "next/navigation"

const NewUserPage = () => {

  const router = useRouter();
  
  return (
    <>
    <div>NewUserPage</div>
    {/* Client side uses button, Server side (non-client side) uses link */}
    <button onClick={() => router.push('/users')} className="btn btn-secondary">Create</button>
    </>
  )
}

export default NewUserPage