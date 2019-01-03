// 1) TRANSFER IN GETUSER() FROM AUTHENTICATION.JS
// 2) GET REQUEST TO GET PROFILE PICTURE? - MODIFY ADMIN ACTIONS AND REDUCER APPROPRIATELY

// // GETUSER()

// // GETS USER ADMIN DATA
// // PROPS: CONTAINS SETUSER() FUNC

// const getUser = (props) => {
//     axios.get(`${WANT_URL}/api/user`, 
//         {
//             headers: { 
//                 Accept: 'application/json', 
//                 Authorization: `Bearer ${localStorage.getItem('token')}` 
//             }
//         })
//         .then((response) => {
//             // SEND POST REQUEST TO LOAD USER
//             props.setUser(response.data.user);
//         })
//         .catch((error) => {
//             console.log('Error: ' + error);
//         });
// }