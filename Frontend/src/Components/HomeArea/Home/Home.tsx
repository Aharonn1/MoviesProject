import "./Home.css";
import imageSource from "../../../Assets/Images/GiftShop.jpg";
import { type } from "os";
import { error } from "console";
import { useReducer } from "react";

// const initialState = {
//     counter: 100,
// };

// type ACTIONTYPES = 

// | {type: "increment"; payload:number}
// | {type: "decrement"; payload:number};

// function counterReducer(state:typeof initialState, action: ACTIONTYPES){
//     switch(action.type){
//         case "increment" : 
//         return{
//             ...state,
//             counter: state.counter + action.payload,
//         };
//         case "decrement" : 
//         return{
//             ...state,
//             counter: state.counter - action.payload,
//         };
//         default:
//             throw new Error("Bad Action");
//     }
// }

export class LikeComponent {
    constructor(private _likesCount: number, private _isSelected: boolean) {}
  
    get likesCount() {
      return this._likesCount;
    }
  
    get isSelected() {
      return this._isSelected;
    }
  
    onClick() {
      // Add 1 to likesCount
      // Otherwise, add -1 to likesCount, basically decrease the value of likesCount by 1
      this._likesCount += this._isSelected ? 1 : -1;
      // Toggle _isSelected field
      this._isSelected = !this._isSelected;
    }
  }

function Home(): JSX.Element {


    return (
        <div className="Home">
            <h1>home</h1>
           
       
       
        
        </div>
    );
}

export default Home;
