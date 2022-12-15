import { add } from 'date-fns';
import { useAtom } from 'jotai';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { AuthAtom } from './AuthAtom';

export const LoginScreen: React.FC = () => {

    const [, setAccessToken] = useAtom(AuthAtom.accessToken);
    const [, setExpiresAt] = useAtom(AuthAtom.expiresAt);

    function signIn() {
        setAccessToken('abc123');
        const inTenSeconds = add(new Date(), {
            seconds: 10,
        });
        setExpiresAt(inTenSeconds);
    }

    return (
        <View style={styles.container}>
            <Button mode="contained" onPress={signIn}>Sign in</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
