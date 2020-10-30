import { useSelector, useDispatch } from 'react-redux'
import {fetchPosts} from "./CatsSlice"

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

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
    
interface Posts{ 
    _id : string, 
    post: Post,
    owner: Owner
    cat:Cat
    }



export const CatsList = () => {
    const dispatch = useDispatch()

    const postStatus = useSelector( (state:any) => state.cats.status)
    
    const CatsPost = useSelector( (state: any) => state.cats.cats)
    
    const params = useSelector((state: any) => state.params)

    const params2 = {
        page: "2"
    }
    
    

     useEffect(() => {
       if (postStatus === 'idle') {
         dispatch(fetchPosts({params2}))
       }
     }
     , [postStatus, dispatch])

     console.log("hello")
     console.log(CatsPost[0])
     console.log("hello")
     
     //link to: hva skirive i pathen når det trykkes på knappen
    
    const renderedCats = CatsPost.map( (post: Posts) => (
            // <h3 key= {post._id}>{post.cat.cat_name}</h3>
            <Col key= {post._id} >
                <img width="100%" src={post.cat.cat_img_rel_adr}/>
                <Link to={`/posts/${post._id}`} className="button muted-button"> 
            View Cat
        </Link>
                </Col>
          
      ))
    
      return (
        <section>
          <h2>Posts</h2>
          <Row>
          {renderedCats}
          </Row>
        </section>
      )
    }
