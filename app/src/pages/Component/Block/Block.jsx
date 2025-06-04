import style from './Block.module.scss'
import img from './image/Icon.png';
import { Link } from 'react-router-dom';
function Block(obj){
    return (
        <>
        <div className={style.block}>
            <Link to={`/item/${obj.id}`}><p>{obj.title}</p></Link>
            <div className={style.info}>
                <p className={style.salary}>{obj.salary}</p>
                <p className={style.dot}>•</p>
                <p className={style.workDay}>{obj.schedule}</p>
            </div>
            <div className={style.location}>
                <img src={img} alt="img"/>
                <p>{obj.location}</p>
            </div>
        </div>
        </>
    )
}
export default Block;