//TODO Cara menggunakan asynchronuous function (Implementasi Redux Thunk), Menunggu waktu 2 detik maka actionUserName dijalankan pada dispatch. Tanpa redux thunk fungsi async ini tidak berjalan
export const actionUserName = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({type: 'CHANGE_USER', value: 'Ridar'})
    }, 2000);
}