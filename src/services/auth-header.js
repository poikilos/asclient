export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    // for Node.js Express back-end
    return { 'x-access-token': user.accessToken };
    // for other backend:
    // return { Authorization: 'Bearer ' + user.accessToken };
  } else {
    return {};
  }
}

// (BezKoder, 2019b)
