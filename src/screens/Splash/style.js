import { StyleSheet } from 'react-native';

export const style = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center'
        },
        logo: {
            tintColor: 'rgb(58, 151, 244)'
        }
    });
}