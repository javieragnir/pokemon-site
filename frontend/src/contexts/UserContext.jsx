import { createContext } from 'react';

export const UserContext = createContext();

function UserProvider({ user, children }) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export default UserProvider;
