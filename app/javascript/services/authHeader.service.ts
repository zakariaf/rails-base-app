export default function authHeader() {
  const token = localStorage.getItem('token');

  if (token) {
    return { Authorization: token };
  } else {
    return {
      Authorization: '',
      test: '',
    };
  }
}
