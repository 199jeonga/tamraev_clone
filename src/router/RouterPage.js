import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Main from '../page/Main';
import Info from '../page/Info';
import ElectronicList from '../page/ElectronicList';
import NoticeList from '../page/NoticeList';



export default function RouterPage() {
  return (
    <Routes>
      <Route path="" element={ <Main /> } />
      <Route path="/" element={ <Main /> } />
      <Route path="/main" element={ <Main /> } />
      <Route path="/info" element={ <Info /> } />
      <Route path="/electroniclist" element={ <ElectronicList /> } />
      <Route path="/noticelist" element={ <NoticeList /> } />
    </Routes>
  )
}
