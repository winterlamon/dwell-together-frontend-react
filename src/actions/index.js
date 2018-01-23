const baseURL = `http://localhost:3001`;

const token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Accepts: "application/json",
  Authorization: token
};

// export const changeHi = () => {
//   return {
//     type: "CHANGE_HI"
//   };
// };

// ==== USERS ==== //

export function getCurrentUser() {
  return dispatch => {
    return fetch(`${baseURL}/current_user`, {
      headers: headers
    })
      .then(res => res.json())
      .then(currentUser => dispatch({ type: "SET_CURRENT_USER", currentUser }));
  };
}

export function loginUser({ email, password }) {
  return dispatch => {
    return fetch(`${baseURL}/auth`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(currentUser => {
        localStorage.setItem("token", currentUser.token);
        dispatch({ type: "SET_CURRENT_USER", currentUser });
        return currentUser;
      });
  };
}

export function signup(
  first_name,
  last_name,
  username,
  household_id,
  email,
  password
) {
  return dispatch => {
    return fetch(`${baseURL}/users`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        first_name,
        last_name,
        username,
        household_id,
        email,
        password
      })
    })
      .then(res => res.json())
      .then(user => {
        localStorage.setItem("token", user.token);
        dispatch({ type: "CREATE_USER", user });
        // this.props.history.push(
        //   `/profile/${this.state.auth.currentUser.username}`
      });
  };
}

export function getAllUsers() {
  return dispatch => {
    return fetch(`${baseURL}/users`, {
      headers: headers
    })
      .then(res => res.json())
      .then(users => {
        dispatch({ type: "GET_ALL_USERS", users });
      });
  };
}

export function getUserData(user) {
  return dispatch => {
    return fetch(`${baseURL}/users/${user.id}`)
      .then(res => res.json())
      .then(selectedUser =>
        dispatch({ type: "SET_SELECTED_USER", selectedUser })
      );
  };
}

export function addUserToHousehold(user, household) {
  return dispatch => {
    return fetch(`${baseURL}/users/${user.id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({ household_id: household.id })
    })
      .then(res => res.json())
      .then(user => dispatch({ type: "SET_USER_HOUSEHOLD", user }));
  };
}

export function removeUserFromHousehold(user) {
  return dispatch => {
    return fetch(`${baseURL}/users/${user.id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({ household_id: 1 })
    })
      .then(res => res.json())
      .then(user => dispatch({ type: "SET_USER_HOUSEHOLD", user }));
  };
}

// ==== HOUSEHOLD ==== //

export function createHousehold(nickname) {
  return dispatch => {
    return fetch(`${baseURL}/households`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ nickname })
    })
      .then(res => res.json())
      .then(household => dispatch({ type: "CREATE_HOUSEHOLD", household }));
  };
}

export function getHousehold(user) {
  return dispatch => {
    return fetch(`${baseURL}/households/${user.household.id}`, {
      headers: headers
    })
      .then(res => res.json())
      .then(household => dispatch({ type: "GET_HOUSEHOLD", household }));
  };
}

// ==== LISTS ==== //

export function createList(household, name, category) {
  return dispatch => {
    return fetch(`${baseURL}/lists`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ household_id: household.id, name, category })
    })
      .then(res => res.json())
      .then(list => dispatch({ type: "CREATE_LIST", list }));
  };
}

export function updateList(list) {
  return dispatch => {
    return fetch(`${baseURL}/lists/${list.id}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ list })
    })
      .then(res => res.json())
      .then(list => dispatch({ type: "UPDATE_LIST", list }));
  };
}

export function deleteList(list) {
  return dispatch => {
    return fetch(`${baseURL}/lists/${list.id}`, {
      method: "DELETE",
      headers: headers,
      body: JSON.stringify(list)
    })
      .then(res => res.json())
      .then(list => dispatch({ type: "DELETE_LIST", list }));
  };
}

export function getLists(household) {
  return dispatch => {
    return fetch(`${baseURL}/users/${household.id}`)
      .then(res => res.json())
      .then(lists => dispatch({ type: "GET_ALL_LISTS", lists }));
  };
}

// ==== LIST ITEMS ==== //

export function createListItem(name, description, due_date, user, list) {
  return dispatch => {
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
    })
      .then(res => res.json())
      .then(list_item => dispatch({ type: "CREATE_LIST_ITEM", list_item }));
  };
}

export function completeListItem(list_item) {
  return dispatch => {
    return fetch(`${baseURL}/list_items/${list_item.id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({ ...list_item, completed: true })
    })
      .then(res => res.json())
      .then(list_item => dispatch({ type: "UPDATE_LIST", list_item }));
  };
}
