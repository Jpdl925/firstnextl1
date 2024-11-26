
interface User{
  id: number,
  name: string
}

const UsersPage = async () => {
  // Fetching list of users from endpoint and saving it into variable response
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    // Used for data that does not need to be cached (stored) if it is changing (ie. Chat logs)
    // cache: 'no-store'  

    // Every 10 seconds, the valid is invalid and needs to be revalidated, will revalidate only after 10 seconds
    // next: { revalidate: 10 }
  });
  // Saving our data from the fetch into an array of users with type User[] (User interface)
  const users: User[] = await response.json();

  return (
    <>
    <h1>Users</h1>

    <p>{new Date().toLocaleTimeString()}</p>

    <ul>
      {users.map(user => 
        <li key={user.id}>{user.name}</li>
      )}
    </ul>
    </>
  )
}

export default UsersPage;