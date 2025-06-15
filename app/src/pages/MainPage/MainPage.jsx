import style from './MainPage.module.scss';
import Block from '../Component/Block/Block';
import Pagination from '../Component/Pagination/Pagination';
import Header from "../Component/Header/Header";
import vacancies from '../arr';
import { useRef, useState } from 'react';

function MainPage() {
    const itemsPerPage = 5; 
    const [currentPage, setCurrentPage] = useState(1);
    const [inp, setInp] = useState('');
    const inpVal = useRef('');
    const [arr, setArr] = useState(vacancies);

    const search = () => {
        setArr(vacancies.filter((el) => (el.title.toLowerCase()).includes(inp.toLowerCase())));
        inpVal.current.value = '';
        setCurrentPage(1); 
    };

    const totalPages = Math.ceil(arr.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = arr.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNum) => {
        setCurrentPage(pageNum);
    };

    return (
        <>
            <Header />
            <div className={style.wrapper}>
                <div className={style.search}>
                    <input 
                        placeholder='Введите название вакансии' 
                        ref={inpVal} 
                        onChange={(e) => setInp(e.target.value)} 
                    />
                    <button onClick={search}>Поиск</button>
                </div>
                <div className={style.blocks}>
                    {currentItems.map((el) => (
                        <Block 
                            key={el.id} 
                            id={el.id} 
                            title={el.title} 
                            salary={el.salary} 
                            schedule={el.schedule} 
                            location={el.location} 
                        />
                    ))}
                </div>
                <div className={style.pagination}>
                    {[...Array(totalPages)].map((_, index) => (
                        <Pagination 
                            key={index + 1} 
                            num={index + 1} 
                            onClick={() => handlePageChange(index + 1)} 
                            isActive={currentPage === index + 1}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default MainPage;