import React from 'react';
import Pagination from 'react-bootstrap/Pagination'


// We need to define the active item
let isActive = true;

let firstPage: number;
let lastPage: number;
let currentPage: number;
let prevPage: number;
let prevPrevPage: number;
let nextPage: number;
let nextNextPage: number;

function Paging() {


    if(currentPage > 3 && currentPage - 3 < lastPage){
        prevPage = currentPage - 1;
        prevPrevPage = prevPage -1;
        nextPage = currentPage + 1;
        nextNextPage = nextPage + 1;
    }

    return (
        // TODO: This is not implemented yet
        // size can be set to "sm" or "lg" (small large)
        <Pagination id="pagination" size={undefined}>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{firstPage}</Pagination.Item>
            {/* <Pagination.Ellipsis /> */}

            <Pagination.Item>{prevPrevPage}</Pagination.Item>
            <Pagination.Item>{prevPage}</Pagination.Item>
            <Pagination.Item active={isActive}>{currentPage}</Pagination.Item>
            <Pagination.Item>{nextPage}</Pagination.Item>
            <Pagination.Item>{nextNextPage}</Pagination.Item>

            {/* <Pagination.Ellipsis /> */}
            <Pagination.Item>{lastPage}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    );
};

export default Paging;