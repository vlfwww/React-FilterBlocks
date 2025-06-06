import style from './BlockItem.module.scss'
import img from './image/Icon.png';
import { Link } from 'react-router-dom';
function Block(obj){
    function add(){
        const vacanciesInStorage =JSON.parse(localStorage.getItem('vacansy')) || [];
        if(vacanciesInStorage.length>0){
            const filterItem = vacanciesInStorage.filter((el)=>el.title!=obj.title)
            localStorage.setItem('vacansy',JSON.stringify([...filterItem,obj]));
        }
        else{
            localStorage.setItem('vacansy',JSON.stringify([obj]));
        }
    }
    return (
        <>
        <div className={style.block}>
            <Link to={'/item'}><p>{obj.title}</p></Link>
            <div className={style.info}>
                <p className={style.salary}>{obj.salary}</p>
                <p className={style.dot}>•</p>
                <p className={style.workDay}>{obj.schedule}</p>
            </div>
            <div className={style.location}>
                <img src={img} alt="img"/>
                <p>{obj.location}</p>
            </div>
            <button className={style.add} onClick={add}>Добавить в избранное</button>
        </div>
        </>
    )
}
export default Block;
