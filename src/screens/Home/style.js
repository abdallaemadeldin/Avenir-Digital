import { StyleSheet, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const style = () => {
    const { width } = useWindowDimensions();
    const { bottom } = useSafeAreaInsets();

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center'
        },
        userCard: {
            width: width,
            minHeight: 75,
            backgroundColor: '#fff',
            paddingHorizontal: '2.5%',
            flexDirection: 'row',
            alignItems: 'center',
        },
        contentContainerStyle: {
            paddingBottom: bottom + 15,
        },
        separator: {
            width: '95%',
            height: StyleSheet.hairlineWidth,
            alignSelf: 'center',
            backgroundColor: '#000'
        },
        avatar: {
            width: 50,
            height: 50,
            resizeMode: 'stretch',
            borderWidth: StyleSheet.hairlineWidth,
            borderRadius: 4,
            borderColor: '#0004',
            overflow: 'hidden'
        },
        infoHolder: {
            flex: 1,
            marginStart: '4%',
        },
        cardName: {
            fontSize: 14,
            color: "#000",
            fontWeight: 'bold',
            textAlign: 'left'
        },
        cardEmail: {
            fontSize: 12,
            color: "#000",
            marginVertical: 2,
        },
        cardBold: {
            fontSize: 12,
            fontWeight: 'bold',
            color: "#000",
        },
        cardCountry: {
            fontWeight: 'normal',
            color: "#000",
        },
        cardTime: {
            fontWeight: 'bold',
            fontSize: 10,
            color: 'gray',
        },
        cardArrow: {
            width: 24,
            height: 24,
            tintColor: 'gray'
        },
        emptyText: {
            marginTop: '50%',
            fontWeight: 'bold',
            color: 'red'
        },
        loadMoreIndicator: {
            marginVertical: 10
        },
        absoluteView: {
            flexDirection: 'row',
            position: 'absolute',
            right: '2.5%',
            top: 10,
            justifyContent: 'center',
            alignItems: 'center',
        }
    });
}