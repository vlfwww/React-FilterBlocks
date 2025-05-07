import style from './MainPage.module.scss'
import Block from '../Component/Block/Block'
import Pagination from '../Component/Pagination/Pagination'
function MainPage(){
    const numbers = ['<','1','2','3','>'];
    const arr = [
        {
            title:'Менеджер-дизайнер',
            salary:'з/п от 70000 rub',
            workDay:'Полный рабочий день',
            place:'Новый Уренгой',
        },
        {
            title:'Ведущий графический дизайнер НЕ УДАЛЕННО',
            salary:'з/п от 80000 rub',
            workDay:'Полный рабочий день',
            place:'Новый Москва',
        },
        {
            title:'Работник декорации, дизайнер (ТЦ Амбар)',
            salary:'з/п 29000 rub',
            workDay:'Сменный график работы',
            place:'Самара',
        },
        {
            title:'Менеджер-дизайнер',
            salary:'з/п 55000 - 95000 rub',
            workDay:'Полный рабочий день',
            place:'Тюмень',
        },
    ]
    return (
        <>
        <div className={style.wrapper}>
            <div className={style.search}>
                <input placeholder='Введите название вакансии'></input>
                <button>Поиск</button>
            </div>
            <div className={style.blocks}>
                {arr.map((el)=><Block title={el.title} salary={el.salary} workDay={el.workDay} place={el.place}></Block>)}
            </div>
            <div className={style.pagination}>
                {numbers.map((el)=><Pagination num = {el}></Pagination>)}
            </div>
        </div>
        </>
    )
}
export default MainPage;