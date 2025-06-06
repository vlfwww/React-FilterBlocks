import style from './MainPage.module.scss'
import Block from '../Component/Block/Block'
import Pagination from '../Component/Pagination/Pagination'
import Header from "../Component/Header/Header";
import vacancies from '../arr';
import { useRef, useState } from 'react';
function MainPage(){
    const numbers = ['<','1','2','3','>'];
    const [inp,setInp] = useState('');
    const inpVal = useRef('');
    const [arr,setArr] = useState(vacancies);
    const search = ()=>{
        setArr(vacancies.filter((el)=>(el.title.toLowerCase()).includes(inp.toLowerCase())));
        inpVal.current.value='';
    }
    return (
        <>
         <Header />
        <div className={style.wrapper}>
            <div className={style.search}>
                <input placeholder='Введите название вакансии' ref={inpVal} onChange={(e)=>setInp(e.target.value)}></input>
                <button onClick={search}>Поиск</button>
            </div>
            <div className={style.blocks}>
                {arr.map((el)=><Block  id = {el.id} title={el.title} salary={el.salary} schedule={el.schedule} location={el.location}></Block>)}
            </div>
            <div className={style.pagination}>
                {numbers.map((el)=><Pagination num = {el}></Pagination>)}
            </div>
        </div>
        </>
    )
}
export default MainPage;