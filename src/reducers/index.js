import { hashids } from "../actions";

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
        currentUser: action.user,
        household: {
          ...action.user.household,
          household_key: hashids.encode(action.user.household.id)
        }
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
        loading: !state.loading,
        currentUser: action.user
      };
    case "GET_ALL_USERS":
      return { ...state, users: action.users };
    case "SET_SELECTED_USER":
      return { ...state, loading: !state.loading, selectedUser: action.user };
    case "SET_USER_HOUSEHOLD":
      return { ...state, loading: !state.loading, selectedUser: action.user };
    case "LOG_OUT_USER":
      return {
        ...state,
        loading: !state.loading,
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
        loading: !state.loading,
        household: {
          ...action.user.household,
          household_key: hashids.encode(state.currentUser.household.id)
        }
      };
    case "REMOVE_HOUSEHOLD_USER":
      let newHouseholdMembers = [...state.household.members];

      let foundMember = newHouseholdMembers.find(
        member => member.id === action.user.id
      );
      let memberIndex = newHouseholdMembers.indexOf(foundMember);

      // newHouseholdMembers = newHouseholdMembers.splice(memberIndex, 1);

      return {
        ...state,
        loading: !state.loading,
        users: state.users,
        household: {
          ...action.user.household,
          members: [
            ...newHouseholdMembers.slice(0, memberIndex),
            newHouseholdMembers.slice(memberIndex + 1)
          ]
        }
      };
    case "CREATE_LIST":
      return {
        ...state,
        loading: !state.loading,
        household: {
          ...state.household,
          lists: [...state.household.lists, action.list]
        }
      };
    case "UPDATE_LIST":
      return { ...state, loading: !state.loading };
    case "DELETE_LIST":
      return {
        ...state,
        loading: !state.loading,
        household: {
          ...state.household,
          // lists: [
          //   ...state.household.lists.splice(
          //     state.household.lists.indexOf(action.list),
          //     1
          //   )
          // ]
          lists: action.lists
        }
      };
    case "GET_ALL_LISTS":
      // const householdLists = action.lists.filter(
      //   list => list.household_id === state.household.id
      // );
      return {
        ...state,
        loading: !state.loading,
        household: { ...state.household, lists: action.lists }
      };
    case "CREATE_LIST_ITEM":
      return {
        ...state,
        loading: !state.loading,
        household: {
          ...state.household,
          list_items: [...state.household.list_items, action.list_item]
        }
      };
    case "UPDATE_LIST_ITEM":
      //USER
      let newListItems = state.currentUser.list_items.slice();

      let foundCurrentUser = newListItems.find(
        li => li.id === action.list_item.id
      );
      let indexCurrentUser = newListItems.indexOf(foundCurrentUser);

      newListItems[indexCurrentUser] = action.list_item;
      //HOUSEHOLD
      let newHouseholdLIs = [...state.household.list_items];

      let foundHousehold = newHouseholdLIs.find(
        li => li.id === action.list_item.id
      );
      let indexHousehold = newHouseholdLIs.indexOf(foundHousehold);

      newHouseholdLIs[indexHousehold] = action.list_item;

      return {
        ...state,
        loading: !state.loading,
        currentUser: { ...state.currentUser, list_items: newListItems },
        household: { ...state.household, list_items: newHouseholdLIs }
      };
    case "SET_LOADING":
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
}
