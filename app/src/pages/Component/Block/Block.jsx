import style from './Block.module.scss'
import img from './image/Icon.png';
function Block(obj){
    return (
        <>
        <div className={style.block}>
            <h1>{obj.title}</h1>
            <div className={style.info}>
                <p className={style.salary}>{obj.salary}</p>
                <p className={style.dot}>•</p>
                <p className={style.workDay}>{obj.workDay}</p>
            </div>
            <div className={style.location}>
                <img src={img} alt="img"/>
                <p>{obj.place}</p>
            </div>
        </div>
        </>
    )
}
export default Block;