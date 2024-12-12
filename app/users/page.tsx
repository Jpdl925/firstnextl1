import Link from "next/link";
import UserTable from "./UserTable";
import { Suspense } from "react";

interface Props {
  searchParams: {sortOrder: string}
}


const UsersPage = async ({searchParams:{sortOrder}}:Props) => {

  console.log(sortOrder)

  return (
    <>
    <h1>Users</h1>
    {sortOrder}
    {/* Client side uses button, Server side (non-client side) uses link */}
    <Link href='/users/new' className="btn btn-primary">New Users</Link>

    {/* Make it into it's own component for use in other places (Not placed in components folder because it is linked to users, and components folder could become messy) */}
    <UserTable sortOrder={sortOrder}/>

    

    </>
  )
}

export default UsersPage;