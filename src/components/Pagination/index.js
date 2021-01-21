import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import axios from "axios";
import updateStore from "../../store/updateStore";

export function Pagination({testCurrentPage, countPages}) {

    const [currentPage, setCurrentPage] = useState(testCurrentPage);
    const [paginationPanel, setPaginationPanel] = useState([]);

    if(paginationPanel.length === 0){
        updatePaginationPanel(currentPage)
    }

    const range = (from, to, step = 1) => {
        let i = from;
        const range = [];
        while (i <= to) {
            range.push(i);
            i += step;
        }
        return range;
    }

    function updatePaginationPanel(item) {
        let panel = [];
        let thisCurrentPage = item;
        if (countPages <= 7) {
            panel = range(1, countPages);
        } else {
            if (thisCurrentPage !== 1 && thisCurrentPage - 1 !== 1) {
                panel.push(1);
            }
            if (thisCurrentPage - 2 !== 1 && thisCurrentPage !== 2 && thisCurrentPage !== 1) {
                panel.push('...', thisCurrentPage - 2, thisCurrentPage - 1);
            } else {
                if (thisCurrentPage !== 1) panel.push(thisCurrentPage - 1);
            }
            if (thisCurrentPage + 2 !== countPages && thisCurrentPage + 1 !== countPages && thisCurrentPage !== countPages) {
                panel.push(thisCurrentPage, thisCurrentPage + 1, thisCurrentPage + 2, '...', countPages);
            } else {
                if (thisCurrentPage + 1 !== countPages && thisCurrentPage !== countPages) panel.push(thisCurrentPage, thisCurrentPage + 1, countPages);
                else if (thisCurrentPage !== countPages) panel.push(thisCurrentPage, countPages);
                else panel.push(thisCurrentPage);
            }
        }
        setPaginationPanel(panel)
    }
    const dispatch = useDispatch();

    //TODO: Переписать, как только будет API.
    function updateCurrentPage(item) {
        setCurrentPage(item)
        updatePaginationPanel(item)

        axios.get('https://jsonplaceholder.typicode.com/posts').then((resp) => {
            dispatch(updateStore(resp.data, 'SET_DATA_USERS'))
        });
    }

    return (
        <div className='pagination'>
            <div className='pagination__container'>

                {/*TODO: Определиться, какую навигацию будем использовать. Убрать лишнюю.*/}
                {range(1, countPages).map((item, index) =>
                    <button
                        key={index}
                        className={`pagination__button ${index + 1 === currentPage ? 'pagination__button_active' : ''}`}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                )}
            </div>
            <div className='pagination__container'>
                {paginationPanel.map((item, index) =>
                    <button
                        key={index}
                        className={`pagination__button ${item === currentPage ? 'pagination__button_active' : ''} ${item === '...' ? 'pagination__button_disabled' : ''}`}
                        disabled={item === '...'}
                        onClick={() => updateCurrentPage(item)}
                    >
                        {item}
                    </button>
                )}
            </div>
        </div>
    )
}

export default Pagination;

