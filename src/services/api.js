const baseURL = `http://localhost:3001`;

const token = localStorage.getItem('token');

const headers = {
    'Content-Type': 'application/json',
    Accepts: 'application/json',
    Authorization: token
}

const login = (email, password) => {
    return fetch(`${baseURL}/auth`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ email, password })
    }).then(res => res.json())
  };

  const signup = (firstName, lastName, email, password) => {
      return fetch(`${baseURL}/users`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ firstName, lastName, email, password })
      })
    };

  const getCurrentUser = () => {
    return fetch(`${baseURL}/current_user`, {
      headers: headers
    }).then(res => res.json());
  };



export default {
    auth: {
        token,
        login,
        getCurrentUser,
        signup
    }
}
