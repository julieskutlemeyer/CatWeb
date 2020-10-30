import React from 'react';
// Semantic UI used here
import { Search } from 'semantic-ui-react'
import Col from 'react-bootstrap/Col';

function SearchBar() {

    return (
        // https://react.semantic-ui.com/modules/search/#types-standard
        <Col id="search-col">
            <Search
            //   loading={loading}
            //   onResultSelect={(e, data) =>
            //     dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
            //   }
            //   onSearchChange={handleSearchChange}
            //   results={results}
            //   value={value}
            />
        </Col>

    );
};

export default SearchBar;
