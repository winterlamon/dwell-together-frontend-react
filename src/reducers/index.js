// state = {
//   auth: {
//     currentUser: {
//       id: null,
//       first_name: null,
//       last_name: null,
//       username: null,
//       email: null,
//       description: null,
//       avatar_url: null,
//       list_items: [],
//       token: null
//     }
//   },
//   household: {
//     id: null,
//     nickname: null,
//     lists: [],
//     list_items: [],
//     members: []
//   },
//   users: [],
//   list_categories: [],
//   selectedUser: {
//     id: null,
//     first_name: null,
//     last_name: null,
//     username: null,
//     email: null,
//     description: null,
//     avatar_url: null,
//     list_items: []
//   }
// };

export function authReducer(state = { currentUser: {} }, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: action.currentUser };
    default:
      return state;
  }
}

export function householdReducer(
  state = {
    household: {
      id: null,
      nickname: null,
      lists: [],
      list_items: [],
      members: []
    }
  },
  action
) {
  switch (action.type) {
    case "CREATE_HOUSEHOLD":
      return { ...state, household: action.household };
    case "GET_HOUSEHOLD":
      return { ...state, household: action.household };
    default:
      return state;
  }
}

export function usersReducer(
  state = {
    users: [],
    selectedUser: {
      id: null,
      first_name: null,
      last_name: null,
      username: null,
      email: null,
      description: null,
      avatar_url: null,
      list_items: []
    }
  },
  action
) {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        selectedUser: action.user,
        users: [...state.users.push(action.user)]
      };
    case "GET_ALL_USERS":
      return { ...state, users: action.users };
    case "SET_SELECTED_USER":
      return { ...state, selectedUser: action.selectedUser };
    case "SET_USER_HOUSEHOLD":
      return { ...state, selectedUser: action.user };
    default:
      return state;
  }
}

export function listCategoriesReducer(
  state = {
    list_categories: []
  },
  action
) {
  switch (action.type) {
    default:
      return state;
  }
}
