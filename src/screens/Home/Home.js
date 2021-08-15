import React, { memo } from 'react';
import { View, FlatList, TouchableOpacity, Image, Text, ActivityIndicator, RefreshControl } from 'react-native';
import diffInDays from 'date-fns/differenceInDays';
import format from 'date-fns/format';
import { useHome } from 'src/hooks';
import { style } from './style';

const Home = () => {
    const { container, userCard, contentContainerStyle, separator, avatar, infoHolder, cardName, cardEmail, cardBold, cardCountry, cardTime, cardArrow, emptyText, loadMoreIndicator, absoluteView } = style();
    const { list, error, loading, loadMore, isRefreshing, onEndReached, refresh, navigate } = useHome();

    const renderItem = ({ item }) => {
        const createdAt = new Date(item?.registered.date);
        const diffDays = diffInDays(new Date(), createdAt);
        const registerationFormattedDate = diffDays === 0 ? format(createdAt, 'HH:mm a') :
            diffDays === 1 ? `Yesterday, ${format(createdAt, 'HH:mm a')}` :
                diffDays === 2 ? `${diffDays} days ago` : format(createdAt, 'MMMM dd, yyyy');
        return (
            <TouchableOpacity style={userCard} onPress={() => navigate("Profile", { item: { ...item, registerationFormattedDate } })}>
                <Image source={{ uri: item.picture.thumbnail }} style={avatar} />
                <View style={infoHolder}>
                    <Text style={cardName}>{`${item.name.first} ${item.name.last}`}</Text>
                    <Text style={cardEmail}>{item.email}</Text>
                    <Text style={cardBold}>Country <Text style={cardCountry}>{item.location.country}</Text></Text>
                </View>
                <View style={absoluteView}>
                    <Text style={cardTime}>{registerationFormattedDate}</Text>
                    <Image source={require('src/assets/arrow.png')} style={cardArrow} />
                </View>
            </TouchableOpacity>
        );
    }

    const renderSeparator = () => {
        return (<View style={separator} />);
    }

    const renderEmpty = () => {
        return (
            <Text style={emptyText}>{error || "No items found."}</Text>
        );
    }

    const renderFooter = () => loadMore && <ActivityIndicator style={loadMoreIndicator} color="#000" />

    return (
        <View style={container}>
            {loading ? <ActivityIndicator color="#000" /> :
                <FlatList
                    data={list}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(_, i) => i.toString()}
                    ItemSeparatorComponent={renderSeparator}
                    ListEmptyComponent={renderEmpty}
                    onEndReachedThreshold={.1}
                    onEndReached={onEndReached}
                    contentContainerStyle={contentContainerStyle}
                    ListFooterComponent={renderFooter}
                    refreshControl={<RefreshControl onRefresh={refresh} refreshing={isRefreshing} colors={['#000']} tintColor="#000" />}
                />
            }
        </View>
    );
}
export default memo(Home);