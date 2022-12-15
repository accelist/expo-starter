import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { AuthAtom } from './AuthAtom';
import { AuthContext, UserInfo } from './AuthContext';

export const AuthContextProvider: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {

    const [accessToken] = useAtom(AuthAtom.accessToken);
    const [expiresAt] = useAtom(AuthAtom.expiresAt);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [name] = useState('John Smith');

    useEffect(() => {
        setIsAuthenticated(expiresAt > new Date());

        const interval = setInterval(() => {
            setIsAuthenticated(expiresAt > new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, [expiresAt]);

    const authContextValue: UserInfo = {
        isAuthenticated: isAuthenticated,
        name: name,
        accessToken: accessToken,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};
