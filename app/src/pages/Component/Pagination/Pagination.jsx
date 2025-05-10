import style from './Pagination.module.scss'
function Block(obj){
    return (
        <>
        <div className={style.one}>
            {obj.num} 
        </div>
        </>
    )
}
export default Block;