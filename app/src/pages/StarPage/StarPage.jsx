import style from './StarPage.module.scss'
import Block from '../Component/Block/Block'
import Pagination from '../Component/Pagination/Pagination'
import Header from "../Component/Header/Header";
import vacancies from '../arr';
import { useEffect, useRef, useState } from 'react';
function StarPage(){
    const [vacansy,setVacancy] = useState([{}])
    useEffect(()=>{
        const vac=localStorage.getItem('vacansy');
        setVacancy(JSON.parse(vac));
    },[])
   return (
    <>
    <Header />
       {vacansy.map((el)=> <Block  id = {el.id} title={el.title} salary={el.salary} schedule={el.schedule} location={el.location}></Block>)}
    </>
   )
}
export default StarPage;