const baseURL = `http://localhost:3001`;

const token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Accepts: "application/json",
  Authorization: token
};

// household id hashkey (6 characters) //

var Hashids = require("hashids");
export var hashids = new Hashids("Household", 6);
// console.log(hashids.encode(1, 2, 3)); // Z4UrtW

// ==== USERS ==== //

export function getCurrentUser() {
  return dispatch => {
    dispatch({ type: "ASYNC_START" });

    return fetch(`${baseURL}/current_user`, {
      headers: headers
    })
      .then(res => res.json())
      .then(user => {
        dispatch({ type: "SET_CURRENT_USER", user });
        dispatch({ type: "SET_SELECTED_USER", user });
        dispatch({ type: "SET_HOUSEHOLD", user });
      });
  };
}

export function loginUser({ email, password }) {
  return dispatch => {
    dispatch({ type: "ASYNC_START" });

    return fetch(`${baseURL}/auth`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(user => {
        localStorage.setItem("token", user.token);
        dispatch({ type: "SET_CURRENT_USER", user });
        dispatch({ type: "SET_SELECTED_USER", user });
        // dispatch({ type: "SET_HOUSEHOLD", user });
        return user;
      });
  };
}

export function logoutUser() {
  return dispatch => {
    localStorage.removeItem("token");
    dispatch({ type: "LOG_OUT_USER" });
  };
}

export function signup({
  first_name,
  last_name,
  username,
  household_key,
  email,
  password
}) {
  return dispatch => {
    dispatch({ type: "ASYNC_START" });
    return fetch(`${baseURL}/users`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        first_name,
        last_name,
        username,
        household_id: hashids.decode(household_key),
        email,
        password
      })
    })
      .then(res => res.json())
      .then(user => {
        localStorage.setItem("token", user.token);
        dispatch({ type: "CREATE_USER", user });
        dispatch({ type: "SET_CURRENT_USER", user });
        // dispatch({ type: "SET_HOUSEHOLD", user });
        return user;
      });
  };
}

export function getAllUsers() {
  return dispatch => {
    dispatch({ type: "ASYNC_START" });

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
    dispatch({ type: "SET_LOADING" });
    dispatch({ type: "ASYNC_START" });

    return fetch(`${baseURL}/users/${user.id}`)
      .then(res => res.json())
      .then(selectedUser =>
        dispatch({ type: "SET_SELECTED_USER", selectedUser })
      );
  };
}

export function addUserToHousehold(user, household) {
  return dispatch => {
    dispatch({ type: "SET_LOADING" });
    dispatch({ type: "ASYNC_START" });

    return fetch(`${baseURL}/users/${user.id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({ household_id: household.id })
    })
      .then(res => res.json())
      .then(currentUser =>
        dispatch({ type: "SET_USER_HOUSEHOLD", currentUser })
      );
  };
}

export function updateUserDetails(user) {
  return dispatch => {
    dispatch({ type: "SET_LOADING" });
    dispatch({ type: "ASYNC_START" });

    return fetch(`${baseURL}/users/${user.id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({ user })
    })
      .then(res => res.json())
      .then(user => dispatch({ type: "UPDATE_USER", user }));
  };
}

export function removeUserFromHousehold(user) {
  return dispatch => {
    dispatch({ type: "SET_LOADING" });
    dispatch({ type: "ASYNC_START" });

    return fetch(`${baseURL}/users/${user.id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({ household_id: 1 })
    })
      .then(res => res.json())
      .then(user => dispatch({ type: "REMOVE_HOUSEHOLD_USER", user }));
  };
}

// ==== HOUSEHOLD ==== //

export function createHousehold(nickname) {
  return dispatch => {
    dispatch({ type: "ASYNC_START" });

    return fetch(`${baseURL}/households`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ nickname })
    })
      .then(res => res.json())
      .then(household =>
        dispatch({
          type: "CREATE_HOUSEHOLD",
          household: {
            ...household,
            household_key: hashids.encode(household.id)
          }
        })
      );
  };
}

export function getHousehold(user) {
  return dispatch => {
    dispatch({ type: "SET_LOADING" });
    dispatch({ type: "ASYNC_START" });

    return fetch(`${baseURL}/households/${user.household.id}`)
      .then(res => res.json())
      .then(household => dispatch({ type: "GET_HOUSEHOLD", household }));
  };
}

// ==== LISTS ==== //

export function createList(household, name, category) {
  return dispatch => {
    dispatch({ type: "SET_LOADING" });
    dispatch({ type: "ASYNC_START" });

    return fetch(`${baseURL}/lists`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ household_id: household.id, name, category })
    })
      .then(res => res.json())
      .then(list => dispatch({ type: "CREATE_LIST", list }))
      .then(list => dispatch({ type: "SET_LOADING" }));
  };
}

export function updateList(list) {
  return dispatch => {
    dispatch({ type: "SET_LOADING" });
    dispatch({ type: "ASYNC_START" });

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
    dispatch({ type: "SET_LOADING" });
    dispatch({ type: "ASYNC_START" });

    return fetch(`${baseURL}/lists/${list.id}`, {
      method: "DELETE",
      headers: headers,
      body: JSON.stringify(list)
    })
      .then(res => res.json())
      .then(lists => dispatch({ type: "DELETE_LIST", lists }));
  };
}

export function getLists(household) {
  return dispatch => {
    dispatch({ type: "SET_LOADING" });
    dispatch({ type: "ASYNC_START" });

    return fetch(`${baseURL}/households/${household.id}`)
      .then(res => res.json())
      .then(lists => dispatch({ type: "GET_ALL_LISTS", lists }));
  };
}

// ==== LIST ITEMS ==== //

export function createListItem(name, description, due_date, user, list) {
  return dispatch => {
    dispatch({ type: "SET_LOADING" });
    dispatch({ type: "ASYNC_START" });

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
    dispatch({ type: "SET_LOADING" });
    dispatch({ type: "ASYNC_START" });

    return fetch(`${baseURL}/list_items/${list_item.id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({ ...list_item, completed: true })
    })
      .then(res => res.json())
      .then(list_item => dispatch({ type: "UPDATE_LIST_ITEM", list_item }));
  };
}

export function forceRender() {
  return dispatch => {
    dispatch({ type: "SET_LOADING" });
  };
}
