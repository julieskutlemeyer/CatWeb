import React from 'react'
import { useSelector } from 'react-redux'
import { selectPostById } from './CatsSlice'

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

    // const cat = useSelector(state => selectPostById(state, catId))
    // const post = useSelector( (state: RootState )  =>
    //  state.posts.find( (post: any)  => post.id === postId)
    //)

    if (!cat) {
        return (
            <section>
                <h2>cat not found!</h2>
            </section>
        )
    }

    return (
        <section id="single-cat">
            <article className="post">
                <h2>{cat.cat.cat_name}</h2>

                <div className="owner">
                    <p>{cat.owner.first_name}</p>
                    <p>{cat.owner.last_name}</p>
                    <p>{cat.owner.email}</p>
                    <p>{cat.owner.phone}</p>
                </div>

                <div className="cat">
                    <p>{cat.cat.cat_name}</p>
                    <p>{cat.cat.cat_gender}</p>
                    <p>{cat.cat.cat_birthdate}</p>
                    <p>{cat.cat.cat_race}</p>
                    <img src={cat.cat.cat_img_rel_adr} />
                </div>

                <div className="Back">
                    <Link to="/">Back</Link>
                </div>

                {/* <div className = "post">
            <p>{cat.post.first_name}</p>
            <p>{cat.post.last_name}</p>
            <p>{cat.post.email}</p>
            <p>{cat.post.phone}</p>
        </div> */}


                <p className="post-content">{cat.content}</p>
            </article>
        </section>
    )
}

