import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export const useProfile = () => {
    const { setOptions, navigate } = useNavigation();
    const { params: { item } } = useRoute();
    const [size, setSize] = useState({ width: 0, height: 0 });
    const screenOptions = { headerTitle: `${item.name.first} ${item.name.last}`, };
    useEffect(() => {
        setOptions(screenOptions);
        Image.getSize(item.picture.large, (width, height) => setSize({ width, height }))
    }, []);

    return { navigate, ...item, size };
}