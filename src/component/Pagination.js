import React from 'react'
import _ from 'lodash'
import './Pagination.css'
function Pagination(props) {
    const {totalItems, pageSize, currentPage, onPageChange} = props
    const itemsCount = Math.ceil(totalItems / pageSize)
    if(itemsCount === 1) return null
    const pages = _.range(1,itemsCount+1)
    return (
        <React.Fragment>
            <nav >
                <ul className = 'pagination'>
                    {pages.map(page =>(
                        <li key = {page} className = {page === currentPage ? 'page-item active' : 'page-item'} >
                            <button className = 'page-link' onClick={() => onPageChange(page)}> {page}</button>
                        </li>
                    ))}
                    
                </ul>
            </nav>  
        </React.Fragment>  
    )
}
export default Pagination