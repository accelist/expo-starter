import { atom } from 'jotai';

export const AuthAtom = {
    accessToken: atom(''),
    expiresAt: atom(new Date()),
};
