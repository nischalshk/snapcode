import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  CLEAR_PROFILE,
  PROFILE_ERROR
} from '../actions/types';

const initialState = {
  profile: null,
  profiles: [],
  repos:[],
  loading: true,
  error:{}

};




export default function(state = initialState, action) {
const{type,payload}=action;


  switch (type) {
    // case PROFILE_LOADING:
    //   return {
    //     ...state,
    //     loading: true
    //   };
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
      case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
      case CLEAR_PROFILE:
        return{
          ...state,
          profile:null,
          repos:[],
          loading:false

        };


    // case CLEAR_CURRENT_PROFILE:
    //   return {
    //     ...state,
    //     profile: null
    //   };
    default:
      return state;
  }
}
