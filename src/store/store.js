import {legacy_createStore} from "redux"; //compalsary line in store.js
import { reducer } from "./reducer";




const InitaialValueOfState={
    count:0,
    payload:0,
}

export const store = legacy_createStore(reducer,InitaialValueOfState)

