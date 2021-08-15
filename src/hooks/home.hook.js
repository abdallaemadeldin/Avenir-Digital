import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from 'src/redux/features/home.feature';

export const useHome = () => {
    const { setOptions, navigate } = useNavigation();
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const screenOptions = {
        headerStyle: { backgroundColor: '#f1f1f1' },
        headerTintColor: "#000",
        headerTitle: "Users List",
    };

    const { list, error, loading, loadMore, isRefreshing } = useSelector(state => state.home);

    const onEndReached = () => {
        if (!loadMore && !loading) {
            const nextPage = page + 1;
            if (nextPage > 10) return;
            setPage(nextPage);
            dispatch(fetchUsers({ page: nextPage, loadMore: true }));
        }
    }

    const refresh = () => {
        setPage(1);
        dispatch(fetchUsers({ page: 1, reload: true }));
    }

    useEffect(() => {
        setOptions(screenOptions);
        dispatch(fetchUsers({ page }));
    }, []);

    return { list, error, loading, loadMore, isRefreshing, refresh, onEndReached, navigate };
}