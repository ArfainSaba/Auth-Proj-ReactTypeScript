export default function authHeader() {
  const userStr = localStorage.getItem("token");
  let user = null;
  if (userStr)
    user = JSON.parse(userStr);

  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken }; 
    // return { 'x-access-token': user.accessToken };       
  } else {
    return { Authorization: '' }; 
    // return { 'x-access-token': null }; 
  }
}