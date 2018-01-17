const baseURL = `http://localhost:3001`;

const token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Accepts: "application/json",
  Authorization: token
};

const login = (email, password) => {
  return fetch(`${baseURL}/auth`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ email, password })
  }).then(res => res.json());
};

const signup = (first_name, last_name, email, password) => {
  return fetch(`${baseURL}/users`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      first_name,
      last_name,
      email,
      password
    })
  });
};

const getCurrentUser = () => {
  return fetch(`${baseURL}/current_user`, {
    headers: headers
  }).then(res => res.json());
};

const getAllUsers = () => {
  return fetch(`${baseURL}/users`, {
    headers: headers
  }).then(res => res.json());
};

const addUserToHousehold = (user, household) => {
  return fetch(`${baseURL}/users/${user.id}`, {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify({ household_id: household.id })
    // }).then(res => res.json())
  });
};

const removeUserFromHousehold = user => {
  return fetch(`${baseURL}/users/${user.id}`, {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify({ household_id: 1 })
    // }).then(res => res.json())
  });
};

const createHousehold = nickname => {
  return fetch(`${baseURL}/households`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ nickname })
    // }).then(res => res.json())
  });
};

const getHousehold = user => {
  return fetch(`${baseURL}/households/${user.household.id}`, {
    headers: headers
  }).then(res => res.json());
};

const createList = (household, name, category) => {
  return fetch(`${baseURL}/lists`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ household_id: household.id, name, category })
    // }).then(res => res.json())
  });
};

const updateList = list => {
  return fetch(`${baseURL}/lists`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ list })
    // }).then(res => res.json())
  });
};

const deleteList = list => {
  return fetch(`${baseURL}/lists/${list.id}`, {
    method: "DELETE",
    headers: headers,
    body: JSON.stringify(list)
    // }).then(res => res.json())
  });
};

const getLists = household => {
  return fetch(`${baseURL}/users/${household.id}`)
    .then(res => res.json())
    .then(console.log);
};

const createListItem = (name, description, due_date, user, list) => {
  return fetch(`${baseURL}/list_items`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      name,
      description,
      due_date,
      user_id: user.id,
      list_id: list.id,
      completed: false
    })
    // }).then(res => res.json())
  });
};

const updateListItem = list_item => {
  return fetch(`${baseURL}/list_items`, {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify({ list_item })
    // }).then(res => res.json())
  });
};

export default {
  auth: {
    token,
    login,
    getCurrentUser,
    signup
  },
  users: {
    getAllUsers,
    addUserToHousehold,
    removeUserFromHousehold
  },
  households: {
    createHousehold,
    getHousehold
  },
  lists: {
    createList,
    updateList,
    getLists,
    deleteList
  },
  listItems: {
    createListItem,
    updateListItem
  }
};
