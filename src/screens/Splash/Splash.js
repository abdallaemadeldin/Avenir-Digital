import React, { memo } from 'react';
import { View, Image } from 'react-native';
import { style } from './style';

const Splash = () => {
    const { container, logo } = style();

    return (
        <View style={container}>
            <Image source={require('src/assets/logo.png')} style={logo} />
        </View>
    );
}

export default memo(Splash);