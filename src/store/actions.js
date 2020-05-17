import {VIEW_NAV,VIEW_FOOT,VIEW_LOADING,UPDATE_USER} from "./types";

export default{
  [VIEW_NAV]:({commit,state},payload)=>{commit(VIEW_NAV,payload)},
  [VIEW_FOOT]:({commit,state},payload)=>{commit(VIEW_FOOT,payload)},
  [VIEW_LOADING]:({commit,state},payload)=>{commit(VIEW_LOADING,payload)},
  [UPDATE_USER]:({commit,state},payload)=>{commit(UPDATE_USER,payload)},
}