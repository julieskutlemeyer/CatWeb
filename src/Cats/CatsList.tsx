import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from "./CatsSlice"
import React, { useEffect } from 'react'

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

    const postStatus = useSelector((state: any) => state.cats.status)

    const CatsPost = useSelector((state: any) => state.cats.cats)


    // https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
    function capitalize(str: string) {
        return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()
    }

    function catAge(input: string) {
        let date = new Date();
        let now = date.getUTCDate();
        let then = new Date(input);
        let thenUTC = then.getUTCDate();

        return Math.floor(now - thenUTC);
    }



    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    console.log("hello")
    console.log(CatsPost[0])
    console.log("hello")


    const renderedCats = CatsPost.map((post: Posts) => (
        <Col>
            <div className="post-div" key={post._id}>
                <div className="top-bar-post">
                    <h3 className="cat-name"> {post.cat.cat_name}</h3>
                    <h3 className="cat-age"> {catAge(post.cat.cat_birthdate)}</h3>
                </div>
                <img className="cat-img" style={{ width: '100%' }} src={post.cat.cat_img_rel_adr} />
                <p className="owner"> Eier: {post.owner.first_name} {post.owner.last_name}</p>
                <p className="county-name"> Kommune: {capitalize(post.post.county_name)} </p>
                <p className="cat-race"> Rase: {post.cat.cat_race} </p>


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
