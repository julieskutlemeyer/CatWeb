import React from 'react'
import { useSelector } from 'react-redux'

//URL-en til en post vi trykker på vil ha 
//URLen: /posts/123, der 123 er IDen til posten.
//match er en ruter-objekt som inneholder url-infoen
//match.params er den siste delen av urlen
//altså /posts/123: 123-deler

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  const post = useSelector(state =>
    state.posts.find(post => post.id === postId)
  )

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
      </article>
    </section>
  )
}