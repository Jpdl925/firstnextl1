import { sort } from "fast-sort";
import Link from "next/link";

interface User{
  id: number,
  name: string,
  email: string,
}

interface Props{
  sortOrder:string;
}

const UserTable = async ({sortOrder}:Props) => {

    // Fetching list of users from endpoint and saving it into variable response
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      // Used for data that does not need to be cached (stored) if it is changing (ie. Chat logs)
      cache: 'no-store'  
  
      // Every 10 seconds, the valid is invalid and needs to be revalidated, will revalidate only after 10 seconds
      // next: { revalidate: 10 }
    });
    // Saving our data from the fetch into an array of users with type User[] (User interface)
    const users: User[] = await response.json();

    // Users are sorted in this array in ascending order (a,b,c), Sorts by sortOrder(last word of url, being either email or name)
    // Also replaced users.map with sortedUsers.map
    const sortedUsers = sort(users).asc(sortOrder === 'email' ? user => user.email: user => user.name)

  return (
    <>
    
    <table className="table">
      <thead>
        <tr>
          {/* If they are clicked then the list is sorted alphabetically from top to bottom by either email or name*/}
          <th><Link href='/users?sortOrder=name'>Name</Link></th>
          <th><Link href='/users?sortOrder=email'>Email</Link></th>
        </tr>
      </thead>
      <tbody>
      {sortedUsers.map(user => 

        <tr key={user.id}>
          <td>{user.name}</td>
        <td>{user.email}</td>
        </tr>

      )}
      </tbody>
    </table>
    
    </>
  )
}

export default UserTable