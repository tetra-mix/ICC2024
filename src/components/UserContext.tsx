import { createContext, useState } from "react";
import AppUser from '../firebase/user.ts';

type Props = {
    children: JSX.Element;
}

type UserContextType = {
    user: AppUser | null;
    setUser: (user: AppUser, callback:() => void) => void;
    
}

export const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => { }
});

export default function UserProvider({ children }: Props) {
    const [user, setUser] = useState<AppUser | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}