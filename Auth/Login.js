import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
        // Here you would typically validate user credentials before navigating
        navigation.replace('Home'); // Using replace to avoid going back to login screen
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleLogin}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Login;
