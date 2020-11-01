import React from 'react'
import { useSelector } from 'react-redux'
import { selectPostById } from './CatsSlice'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { catAge } from './CatsList';

import {
    BrowserRouter as Router,
    Link,
    RouteComponentProps,
} from "react-router-dom";


//match er en prop som inneholder URL (post/1)
//URLen blir da den vi trykker på
//og match.params er siste del av den, som er da 1, og IDen

//videre looper vi gjennom state.posts
//for å finne den posten som har samme ID som
//siste del av URL-pathen 

//denne komponenten renders på nytt
//hver gang useSelector forandres (altså at match forandres da)

function postAgeDays(input: string) {
    let date = new Date();
    let now = date.getMonth();
    let then = new Date(input);
    let thenUTC = then.getMonth();
    return Math.ceil(now - thenUTC);
}

function dateBorn(input: string) {
    let then = new Date(input);
    return then;
}

type Tparams = { catId: string };
// interface Tparams {catId: string };

interface RootState {
    posts: any;
}

export const SingleCatPage = ({ match }: RouteComponentProps<Tparams>) => {
    const catId = match.params.catId

    const cat = useSelector((state: any) =>
        state.cats.cats.find((cat: any) => cat._id === catId)
    )

    if (!cat) {
        return (
            <>
                <Container id="error-single-cat">
                    <h1>Cat not found! {">"}:3 </h1>
                </Container>
                <Link to="/" className="back-link">
                    Back
            </Link>
            </>
        )
    }


    return (
        <Container id="single-cat">
            <Link to="/" className="back-link">
                Back
            </Link>
            <Row sm={1} lg={2}>
                <Col>

                    <img className="cat-img" alt="Catto.png" style={{ width: '100%' }} src={cat.cat.cat_img_rel_adr} />
                </Col>
                <Col>
                    <h1>{cat.cat.cat_name}</h1>
                    <p>
                        {cat.cat.cat_name} is a beautiful {cat.cat.cat_gender} {cat.cat.cat_race.toLowerCase()} cat that has been a part of this world for {catAge(cat.cat.cat_birthdate)} years!
                        {" "} {cat.cat.cat_gender === "male" ? "His" : "Her"} birthday is on the {dateBorn(cat.cat.cat_birthdate).getDay()}/{dateBorn(cat.cat.cat_birthdate).getMonth()}/{dateBorn(cat.cat.cat_birthdate).getFullYear()}.
                        {cat.cat.cat_gender === "male" ? "His" : "Her"} owner is {cat.owner.first_name} {cat.owner.last_name} and is reachable by email: <b>{cat.owner.email}</b> and by phone: <b>{cat.owner.phone}</b>.
                        Currently they live in {cat.post.county_code}, {cat.post.county_name} on the street {cat.post.street_name}. {cat.cat.cat_name} would love to be your new companion,
                        he has been waiting for a new home for {postAgeDays(cat.post.date_published)} months.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

