import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  {BrowserRouter, Routes, Route} from 'react-router-dom';
import TaskOne from './components/taskOne';
import TaskTwo from './components/taskTwo';
import TaskThree from './components/taskThree';
import TaskFour from './components/taskFour';
import TaskFive from './components/taskFive';
import TaskSix from './components/taskSix';
import TaskSeven from './components/taskSeven';
import TaskEight from './components/taskEight';
import TaskNine from './components/taskNine';
import TaskTen from './components/taskTen';
import TaskEleven from './components/taskEleven';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/taskOne' element={<TaskOne />}></Route>
      <Route path='/taskTwo' element={<TaskTwo />}></Route>
      <Route path='/taskThree' element={<TaskThree />}></Route>
      <Route path='/taskFour' element={<TaskFour/>}></Route>
      <Route path='/taskFive' element={<TaskFive />}></Route>
      <Route path='/taskSix' element={<TaskSix />}></Route>
      <Route path='/taskSeven' element={<TaskSeven />}></Route>
      <Route path='/taskEight' element={<TaskEight />}></Route>
      <Route path='/taskNine' element={<TaskNine />}></Route>
      <Route path='/taskTen' element={<TaskTen />}></Route>
      <Route path='/taskEleven' element={<TaskEleven />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
