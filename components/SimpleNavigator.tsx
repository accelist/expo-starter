import { useAuthContext } from './AuthContext';
import { LoginScreen } from './LoginScreen';
import { MainScreen } from './MainScreen';

export const SimpleNavigator: React.FC = () => {

    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated){
        return <LoginScreen />;
    }

    return (
        <MainScreen />
    );
};
