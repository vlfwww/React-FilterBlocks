import style from './Pagination.module.scss';

function Pagination({ num, onClick, isActive }) {
    return (
        <button 
            className={isActive ? style.active : style.button} 
            onClick={onClick}
        >
            {num}
        </button>
    );
}

export default Pagination;