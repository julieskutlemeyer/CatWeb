import React from 'react';
import { Search } from 'semantic-ui-react'
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../Cats/CatsSlice';
import { searchClicked } from '../Cats/ParamsSlice';

function SearchBar() {
    const dispatch = useDispatch()
    const params = useSelector((state: any) => state.params)

    // Hver gang søkeresultatet endrer seg så endres parameterne for søkingen
    const onSearchChange = (e: any) => {
        dispatch(searchClicked(e.target.value));
    }

    return (
        // https://react.semantic-ui.com/modules/search/#types-standard
        <Col id="search-col">
            <Search
              onSearchChange={onSearchChange}
              placeholder="Search on cat race"
              showNoResults={false}
            />
        </Col>
           

    );
};

export default SearchBar;
