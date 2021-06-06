const store=Redux.createStore(
    (state={login:false})=>state
);

var currentState= store.getStore();

let action={
    type:'LOGIN'
  }

  function actionCreater(){
    return action;
  }

store.dispatch(actionCreater());

const reducer = (state = defaultState, action) => {
    // Change code below this line
    if(action.type==='LOGIN'){
      return{
        login:true
      };}
      else{
        return state;
  
        }
    };