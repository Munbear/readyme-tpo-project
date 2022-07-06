import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SettingGender from "./pages/SettingGender";
import SettingStyle from "./pages/SettingStyle";
import SettingTime from "./pages/SettingTime";
import SettingLocation from "./pages/SettingLocation";
import Congratulation from "./pages/Congratulation";
import UserSetting from "./pages/UserSetting";
import Setting from './pages/Setting';

import Home from './pages/Main/Home'
import Login from './pages/Appinit/Login';
import Location from './pages/Main/Location';
import MoreContents from './pages/MoreContents';

function App() {

  const [gender, setGender] = useState()
  const [myStyle , setMyStyle] = useState<string[]>([]);
  const [minVal, setMinVal] = useState<number>(0);
  const [maxVal, setMaxVal] = useState<number>(24);
  const [userName, setUserName] = useState<string>();

  const changeGender = (props) => {
    setGender(props)
  }

  const changeStyle = (props) => {
    setMyStyle(props)
  }

  const startTime = (props) => {
    setMinVal(props)
  }

  const endTime = (props) => {
    setMaxVal(props)
  }

  const getUserName = (props) => {
    setUserName(props)
  }



  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/location' element={<Location />} />
          <Route path='/setting/gender' element={ <SettingGender gender={gender} changeGender={changeGender}/>}  />
          <Route path='/setting/style' element={ <SettingStyle myStyle={myStyle} changeStyle={changeStyle} />} />
          <Route path='/setting/time' element={ <SettingTime startTime={startTime} endTime={endTime} minVal={minVal} maxVal={maxVal} min={0} max={24}/>}/>
          <Route path='/setting/location' element={<SettingLocation />}/>
          <Route path='/setting/done' element={<Congratulation />} />
          <Route path='/setting/usersetting' element={<UserSetting
            gender={gender}
            changeGender={changeGender}
            myStyle={myStyle}
            changeStyle={changeStyle}
            startTime={startTime}
            endTime={endTime}
            minVal={minVal}
            maxVal={maxVal}
            userName={userName}
            getUserName={getUserName}
            min={0}
            max={24}
          />} />
          <Route path='setting' element={<Setting/>} />
          <Route path='contents' element={<MoreContents />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
