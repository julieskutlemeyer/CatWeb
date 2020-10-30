import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { pageClicked, searchClicked, filterClicked, sortClicked } from './ParamsSlice'
import { fetchPosts } from './CatsSlice'

export function PageButton() {
    const dispatch = useDispatch()
    const params = useSelector((state: any) => state.params)

    const [filter, setFilter] = useState("begge")

    return (
        <div>
            <button onClick={() => { dispatch(pageClicked()); dispatch(fetchPosts({ params })) }}>Next
        </button>
            <input onChange={(e) => { dispatch(searchClicked(e.target.value)); console.log("CHANGE", params); dispatch(fetchPosts({ params })) }}>
            </input>

            <select onChange={e => { dispatch(filterClicked(e.target.value)); dispatch(fetchPosts({ params })) }}>
                <option value="">All</option>
                <option value="male">Only male cats</option>
                <option value="female">Only female cats</option>
            </select>

            <select onChange={e => { dispatch(sortClicked(e.target.value)); dispatch(fetchPosts({ params })) }}>
                <option value="owner.first_name">Sort by owner's first name</option>
                <option value="cat.cat_birthdate">Sort by birthdate</option>
                <option value="post.county_code">Sort by county</option>
            </select>



        </div>
    )
}


// import React, { useState } from 'react'
// import ButtonToggle from 'react-bootstrap/Button'
// import Col from 'react-bootstrap/Col';

// const types = ['Both', 'Male', 'Female'];

// function Filter() {

//     // Code from https://react.school/ui/button
//     const [active, setActive] = useState(types[0]);
//     return (
//         <Col className="filter-col">
//             {types.map(type => (
//                 <ButtonToggle
//                     key={type}
//                     active={active === type}
//                     onClick={() => setActive(type)}
//                     variant="primary"
//                 >
//                     {type}
//                 </ButtonToggle>
//             ))}
//         </Col>
//     );
// }


// export default Filter;