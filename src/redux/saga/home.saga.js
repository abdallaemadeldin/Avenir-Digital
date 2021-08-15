import axios from 'axios';
import { fetchUsers, recivedUsers } from 'src/redux/features/home.feature';
import { call, takeLatest, put } from 'redux-saga/effects';

const loadUsers = (page) => axios.get(`https://randomuser.me/api/?page=${page}&results=10`);

function* handleLoadedUsers({ payload: { page, reload } }) {
    const { data } = yield call(loadUsers, page);
    yield put(recivedUsers({ ...data, reload }));
}

export default function* watchUsers() {
    yield takeLatest(fetchUsers.toString(), handleLoadedUsers);
}