import style from './Header.module.scss'
import img from './images/img.png';
import { Link } from 'react-router-dom';
function Header(obj){
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.logo}>
                    <img src={img} alt="img" />
                    <p>Jobored</p>
                </div>
                <div className={style.links}>
                    <Link to='/'><p className={style.search}>Поиск Вакансий</p></Link>
                    <Link to='/basket'><p className={style.star}>Избранное</p></Link>
                </div>
            </div>
        </>
    )
}
export default Header;