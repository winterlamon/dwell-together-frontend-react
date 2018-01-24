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

export function authReducer(
  state = {
    currentUser: {
      id: null,
      first_name: null,
      last_name: null,
      username: null,
      email: null,
      description: null,
      avatar_url: null,
      list_items: [],
      token: null
    }
  },
  action
) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.user
        // household: {
        //   ...action.currentUser.household,
        //   household_key: action.currentUser.household.household_key
      };
    case "UPDATE_USER":
      return {
        ...state,
        currentUser: action.user
      };
    case "LOG_OUT_USER":
      return {
        ...state,
        currentUser: {
          id: null,
          first_name: null,
          last_name: null,
          username: null,
          email: null,
          description: null,
          avatar_url: null,
          list_items: [],
          token: null
        }
      };
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
      members: [],
      household_key: ""
    }
  },
  action
) {
  switch (action.type) {
    case "CREATE_HOUSEHOLD":
      return { ...state, household: action.household };
    case "GET_HOUSEHOLD":
      return { ...state, household: action.household };
    case "SET_HOUSEHOLD":
      return { ...state, household: action.user.household };
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
        selectedUser: action.currentUser,
        users: [...state.users.push(action.currentUser)]
      };
    case "GET_ALL_USERS":
      return { ...state, users: action.users };
    case "SET_SELECTED_USER":
      return { ...state, selectedUser: action.user };
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
