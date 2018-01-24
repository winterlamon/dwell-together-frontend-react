import { hashids } from "../actions";

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
    loading: true,
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
    },
    household: {
      id: null,
      nickname: null,
      lists: [],
      list_items: [],
      members: [],
      household_key: ""
    },
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
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.user
        // household: {
        //   ...action.currentUser.household,
        //   household_key: action.currentUser.household.household_key
      };
    case "CREATE_USER":
      return {
        ...state,
        selectedUser: action.currentUser,
        users: [...state.users.push(action.currentUser)]
      };
    case "UPDATE_USER":
      return {
        ...state,
        loading: false,
        currentUser: action.user
      };
    case "GET_ALL_USERS":
      return { ...state, users: action.users };
    case "SET_SELECTED_USER":
      return { ...state, loading: false, selectedUser: action.user };
    case "SET_USER_HOUSEHOLD":
      return { ...state, loading: false, selectedUser: action.user };
    case "LOG_OUT_USER":
      return {
        ...state,
        loading: false,
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
        },
        household: {
          id: null,
          nickname: null,
          lists: [],
          list_items: [],
          members: [],
          household_key: ""
        },
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
      };
    case "CREATE_HOUSEHOLD":
      return {
        ...state,
        household: {
          ...action.household,
          household_key: hashids.encode(action.household.id)
        }
      };
    case "SET_HOUSEHOLD":
      return {
        ...state,
        loading: false,
        household: {
          ...action.user.household,
          household_key: hashids.encode(action.user.household.id)
        }
      };
    case "REMOVE_HOUSEHOLD_USER":
      return {
        ...state,
        loading: false,
        household: {
          ...action.user.household,
          members: [
            ...action.user.household.members.slice(
              0,
              action.user.household.members.indexOf(action.user)
            ),
            ...action.user.household.members.slice(
              action.user.household.members.indexOf(action.user) + 1
            )
          ]
        }
      };
    case "CREATE_LIST":
      return {
        ...state,
        loading: true,
        household: {
          ...state.household,
          lists: [...state.household.lists, action.list]
        }
      };
    case "UPDATE_LIST":
      return { ...state, loading: true };
    case "DELETE_LIST":
      return {
        ...state,
        loading: true,
        household: {
          ...state.household,
          // lists: [...state.household.lists]
          lists: [
            ...state.household.lists.splice(
              state.household.lists.indexOf(action.list),
              1
            )
          ]
        }
      };
    case "GET_ALL_LISTS":
      return { ...state, loading: true };
    case "CREATE_LIST_ITEM":
      return {
        ...state,
        loading: true,
        household: {
          ...state.household,
          list_items: [...state.household.list_items, action.list_item]
        }
      };
    case "UPDATE_LIST_ITEM":
      return { ...state, loading: true };
    case "SET_LOADING":
      return { ...state, loading: true };
    default:
      return state;
  }
}
