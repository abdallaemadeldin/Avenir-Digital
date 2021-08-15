import { StyleSheet } from 'react-native';

export const style = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            paddingVertical: '4%',
            paddingHorizontal: '12.5%',
            alignItems: 'center',
        },
        avatar: {
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: '#0004',
            borderRadius: 4,
        },
        userAge: {
            borderRadius: 4,
            width: 30,
            height: 30,
            backgroundColor: 'orange',
            borderWidth: 1,
            borderColor: 'yellow',
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{ rotate: '45deg' }],
            position: 'absolute',
            bottom: -10,
            right: -15,
        },
        age: {
            fontWeight: 'bold',
            fontSize: 12,
            transform: [{ rotate: '-45deg' }],
            color: '#000'
        },
        separator: {
            width: '100%',
            height: StyleSheet.hairlineWidth,
            backgroundColor: '#000',
            borderRadius: StyleSheet.hairlineWidth / 2
        },
        textStyle: {
            fontWeight: 'bold',
            color: '#000',
            lineHeight: 24,
        },
        title: {
            textAlign: 'left',
            width: '100%',
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 6,
        },
        infoHolder: {
            alignSelf: 'flex-start',
            marginVertical: 20
        }
    });
}