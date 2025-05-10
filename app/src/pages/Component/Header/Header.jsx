import style from './Header.module.scss'
import img from './images/img.png';
function Header(obj){
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.logo}>
                    <img src={img} alt="img" />
                    <p>Jobored</p>
                </div>
                <div className={style.links}>
                    <p className={style.search}>Поиск Вакансий</p>
                    <p className={style.star}>Избранное</p>
                </div>
            </div>
        </>
    )
}
export default Header;