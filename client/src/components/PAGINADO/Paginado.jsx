import React from 'react';
import styles from '../PAGINADO/Paginado.module.css'

export default function Paginado ({ videogamesPerPage, allVideogames, paginado, currentPage, setCurrentPage }){
    const pageNumbers = []
    const activePage = currentPage;

    for (let i=1; i<Math.ceil(allVideogames/videogamesPerPage); i++){
        pageNumbers.push(i)
    }

    const nextPage = (event) => {
        if (currentPage < pageNumbers.length) {
            setCurrentPage(currentPage + 1);
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    console.log('current', currentPage);

    return (
        <nav>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <button className={styles.a} onClick={ ((event) => prevPage(event))} disabled={currentPage === 1}>◄</button>
                </li>
                { pageNumbers && pageNumbers.map((number) => (
                    <li className={styles.li} key={number} >
                    <a className={`${styles.a} ${activePage === number ? styles.active : ""}`} onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
                <li className={styles.li}>
                    <button className={styles.a} onClick={nextPage} disabled={currentPage === pageNumbers.length}>►</button>
                </li>
            </ul>
        </nav>
        
    )
};
