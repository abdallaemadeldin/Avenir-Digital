import React, { memo } from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import format from 'date-fns/format';
import { useProfile } from 'src/hooks';
import { style } from './style';

const Profile = () => {
    const { container, avatar, userAge, age, separator, textStyle, title, infoHolder } = style();
    const { picture, size, dob, email, registerationFormattedDate, location } = useProfile();

    return (
        <ScrollView contentContainerStyle={container} showsVerticalScrollIndicator={false} bounces={false}>
            <View style={{ marginBottom: 25 }}>
                <Image source={{ uri: picture.large }} style={{ ...avatar, ...size }} />
                <View style={userAge}>
                    <Text style={age}>{dob.age}</Text>
                </View>
            </View>
            <View style={separator} />
            <View style={infoHolder}>
                <Text style={textStyle}>{`Email: ${email}`}</Text>
                <Text style={textStyle}>{`Date Joined: ${registerationFormattedDate}`}</Text>
                <Text style={textStyle}>{`DOB: ${format(new Date(dob.date), "dd MMM yyyy")}`}</Text>
            </View>
            <Text style={title}>Location</Text>
            <View style={separator} />
            <View style={infoHolder}>
                <Text style={textStyle}>{`City: "${location.city}"`}</Text>
                <Text style={textStyle}>{`State: "${location.state}"`}</Text>
                <Text style={textStyle}>{`Country: "${location.country}"`}</Text>
                <Text style={textStyle}>{`Postcode: "${location.postcode}"`}</Text>
            </View>
        </ScrollView>
    );
}
export default memo(Profile);