import React, { useContext } from 'react';

export interface UserInfo {
    isAuthenticated: boolean;
    name?: string;
    accessToken?: string;
}

const defaultUserInfo: UserInfo = {
    isAuthenticated: false,
};

export const AuthContext = React.createContext(defaultUserInfo);

export const useAuthContext = () => useContext(AuthContext);
