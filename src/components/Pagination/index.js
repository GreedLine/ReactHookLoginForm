import React from 'react';
import {useDispatch, useSelector} from "react-redux";

export function Pagination() {

    // TODO: Переписать на useState пагинацию.

    const dispatch = useDispatch();
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
        if (countPages <= 5) {
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

        dispatch(updateStore(panel, 'SET_PAGINATION_PANEL'))
    }

    function updateStore(item, type) {
        switch (type) {
            case 'SET_PAGINATION_PANEL':
                let paginationPanel = item
                return {
                    type: type,
                    paginationPanel
                }
            case 'SET_CURRENT_PAGE':
                let currentPage = item
                return {
                    type: type,
                    currentPage
                }
            default:
                throw new Error('Error on dispatch function in store. Type dispatch: ' + type);
        }
    }



    function updateCurrentPage(item) {
        dispatch(updateStore(item, 'SET_CURRENT_PAGE'))
        updatePaginationPanel(item)
    }

    const countPages = useSelector(state => state.countPages);
    const currentPage = useSelector(state => state.currentPage);
    const paginationPanel = useSelector(state => state.paginationPanel);

    return (
        <div className='pagination'>
            <div className='pagination__container'>
                {range(1, countPages).map((item, index) =>
                    <button
                        key={index}
                        className={`pagination__button ${index + 1 === currentPage ? 'pagination__button_active' : ''}`}
                        onClick={() => dispatch(updateStore(index + 1, 'SET_CURRENT_PAGE'))}
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
            <p className='pagination__p'>
                <button onClick={() => updatePaginationPanel(currentPage)}>Сделать так, что бы всё заработало.</button>
            </p>
        </div>
    )
}

export default Pagination;

