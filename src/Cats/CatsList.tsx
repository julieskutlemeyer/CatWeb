import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts, putLike } from "./CatsSlice"
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Post {
    date_published: string,
    county_code: number,
    county_name: string,
    street_name: string,
    likes: number
}

interface Owner {
    first_name: string,
    last_name: string,
    email: string,
    phone: number
}

interface Cat {
    cat_name: string,
    cat_gender: string,
    cat_birthdate: string,
    cat_img_rel_adr: string,
    cat_race: string
}

interface Posts {
    _id: string,
    post: Post,
    owner: Owner
    cat: Cat
}

export default function CatsList() {
    const dispatch = useDispatch()

    // https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
    function capitalize(str: string) {
        return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()
    }

    const postStatus = useSelector((state: any) => state.cats.status)

    const CatsPost = useSelector((state: any) => state.cats.cats)

    const params = useSelector((state: any) => state.params)

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts({ params }))
        }
    }, [postStatus, dispatch])

    function catAge(input: string) {
        let date = new Date();
        let now = date.getUTCDate();
        let then = new Date(input);
        let thenUTC = then.getUTCDate();
        return Math.floor(now - thenUTC);
    }
    const renderedCats = CatsPost.map((post: Posts) => (
        <Col key={post._id}>
            <div className="post-div" style={{ backgroundColor: post.cat.cat_gender === "male" ? "#009688" : "#cfa084" }}>
                <div className="top-bar-post">
                    <h3 className="cat-name"> {post.cat.cat_name}</h3>
                    <h3 className="cat-age"> {catAge(post.cat.cat_birthdate)}</h3>
                </div>
                <img className="cat-img" alt="Catto.png" style={{ width: '100%' }} src={post.cat.cat_img_rel_adr} />
                <div className="info-post">
                    <div className="info">
                        <p className="owner"> Owner: </p>  <p> {post.owner.first_name} {post.owner.last_name}</p>
                    </div>
                    <div className="info">
                        <p className="county-name"> County: </p> <p>{capitalize(post.post.county_name)} </p>
                    </div>
                    <div className="info">
                        <p className="cat-race"> Race: </p> <p> {post.cat.cat_race} </p>
                    </div>
                    <div className="info">
                        <p className="cat-gender"> Gender: </p> <p> {post.cat.cat_gender === "male" ? "Hann" : "Hunn"} </p>
                    </div>
                    <div className="info2">
                        <svg id="favoriteStarIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={() => { dispatch(putLike({ id: post._id, likes: post.post.likes + 1 })) }}>
                            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                        </svg>
                        <p>Likes: {post.post.likes}</p>
                        
                    </div>
                    <Link to={`/posts/${post._id}`} className="button muted-button"> 
            View Cat
        </Link>
                </div>

            </div>
        </Col>

    ))

    return (
        <Container>
            <Row xs={1} sm={1} md={2} lg={2} xl={3} id="post-rows">
                {renderedCats}
            </Row>
        </Container>
    )
}
