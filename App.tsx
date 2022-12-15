import { StatusBar } from 'expo-status-bar';
import { AuthContextProvider } from './components/AuthContextProvider';
import { SimpleNavigator } from './components/SimpleNavigator';

export default function App() {
    return (
        <AuthContextProvider>
            <StatusBar style="auto" />
            <SimpleNavigator />
        </AuthContextProvider>
    );
}
