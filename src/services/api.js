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
      })
      .then(res => res.json());
  };

  const createHousehold = (nickname) => {
    return fetch(`${baseURL}/households`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({nickname: nickname})
    // }).then(res => res.json())
    })
  }

  const getHousehold = (user) => {
    return fetch(`${baseURL}/households/${user.household.id}`, {
      headers: headers
      })
      .then(res => res.json())
  }

  const createList = (household, name, category) => {
    return fetch(`${baseURL}/lists`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({household_id: household.id, name, category})
    // }).then(res => res.json())
    })
  }

  const getLists = (household) => {
    return fetch(`${baseURL}/users/${household.id}`)
      .then(res => res.json())
      .then(console.log)
  }

  const createListItem = (name, description, dueDate, user, list) => {
    return fetch(`${baseURL}/lists`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({name, description, due_date: dueDate, user_id: user.id, list_id: list.id, completed: false})
    // }).then(res => res.json())
    })
  }


export default {
    auth: {
        token,
        login,
        getCurrentUser,
        signup
    },
    households: {
      createHousehold,
      getHousehold
    },
    lists: {
      createList,
      getLists
    },
    listItems: {
      createListItem
    }
}
