'use client';

import Posts from './Posts';
import { UserContext } from './UserContext';

export default function Home() {
  return (
    <main>
      <UserContext.Provider value={{ user: { name: "Jon", email: "jonathansaleh@gmail.com" } }}>
        <Posts />
      </UserContext.Provider>
      <UserContext.Provider value={{ user: { name: "H", email: "h@gmail.com"} }}>
          <Posts />
      </UserContext.Provider>
    </main>
  )
}
