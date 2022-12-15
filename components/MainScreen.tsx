import { StyleSheet, Text, View } from 'react-native';
import { useAuthContext } from './AuthContext';

export const MainScreen: React.FC = () => {

    const { name } = useAuthContext();

    return (
        <View style={styles.container}>
            <Text>You are logged in as {name}</Text>
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
