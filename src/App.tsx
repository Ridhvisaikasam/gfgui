import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ConfigureStore } from './AppState';
import Gbutton from './Gbutton';
import Home from './Home';
import ListNote from './ListNote';
import LogIn from './LogIn';
import MaterialUI from './MaterialUI';
import PersonDisplay from './PersonDisplay';
import ReactHookFormUI from './ReactHookFormUI';
import ReducerUI from './ReducerUI';
import RouteA from './RouteA';
import RouteB from './RouteB';
import RouteC from './RouteC';
import SignUp from './SignUp';
import SimpleState from './SimpleState';
import UseEffectMultiple from './UseEffectMultiple';
import UseEffectOnce from './UseEffectOnce';
import UseRef from './UseRef';
import WriteContext from './WriteContext';
import WriteReducer from './WriteReducer';
import './FirebaseSetup'
import UserContext from './UserContext';
import Profile from './Profile';

export default function App() {
  return (
    <Provider store={ConfigureStore()}>
    <BrowserRouter>
    <UserContext>
       <Routes>
           <Route path="/Routecheck" element={<RouteA/>}/> 
           <Route path="/RouteB/:name" element={<RouteB/>}/> 
           <Route path="/RouteC" element={<RouteC name="world"/>}/>
           <Route path="/SubmitButton" element={<Gbutton name='submit' label='submit' onClick={()=>alert("submit button invoked")}/>}/>
           {/* not working render way of calling component*/}
           <Route path="/ResetButton" element={()=><Gbutton name='reset' label='reset' onClick={()=>alert("reset button invoked")}/>}/>

           <Route path="/SimpleState" element={<SimpleState/>}/>
           <Route path="/ListNote" element={<ListNote/>}/>

           <Route path="/UseEffectOnce" element={<UseEffectOnce/>}/>
           <Route path="/UseEffectMultiple" element={<UseEffectMultiple/>}/>
           <Route path="/PersonDisplay" element={<PersonDisplay/>}/>
           <Route path="/UseRef" element={<UseRef/>}/>
           <Route path="/WriteContext" element={<WriteContext />} />

           <Route path="/WriteReducer" element={<WriteReducer />} />
           <Route path="/ReducerUI" element={<ReducerUI />} />

           <Route path="/ReactHookFormUI" element={<ReactHookFormUI />} />

           <Route path="/MaterialUI" element={<MaterialUI />} />

           <Route path="/SignUp" element={<SignUp />} />
           <Route path="/LogIn" element={<LogIn />} />
           <Route path="/Profile" element={<Profile />} />
           <Route path="/Home" element={<Home />} />
           <Route path="/" element={<LogIn />} />




       </Routes>
       </UserContext>
    </BrowserRouter>
    </Provider>
  );
}


