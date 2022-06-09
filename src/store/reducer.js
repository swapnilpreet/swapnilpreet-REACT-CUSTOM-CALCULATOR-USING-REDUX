import { ADD_VALUE, CLEAR_VALUE, DECREMENT_VALUE, DIVIDE_VALUE, INCREMENT_VALUE, MULTIPLY_VALUE, SUBTRACT_VALUE } from "./action.type";


export const reducer=(state,action) =>{

     switch (action.type) {
         case ADD_VALUE:{
            state.count+=Number(state.payload)
            return{...state}
         }
         case INCREMENT_VALUE:{

            state.count++;
            return{...state}
         }
         case DECREMENT_VALUE:{

            state.count--;
            return{...state}
         }
         case SUBTRACT_VALUE:{

            state.count-=Number(state.payload)
            return{...state}
         }
         case MULTIPLY_VALUE:{

            state.count=state.count*Number(state.payload)
            return{...state}
         }
         case DIVIDE_VALUE:{

            state.count=state.count/Number(state.payload)
            return{...state}
         }
         case CLEAR_VALUE:{
            state.count=0
            state.payload=0
            return{state}
         }
         default:{
          return state;
         }
             
     }
}


//this function we will catch in store .js