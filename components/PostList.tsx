import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import PostSingle from './PostSingle';

const PostList = (props) => {
  // const [users, setUsers] = useState([])
  let [ postData ] = props.postData;
//   console.log(props)

  const router = useRouter()
  // Set users from postData
  useEffect(() => {
    if (postData) {
      if (postData.error) {
        // Handle error
      } else {
      }
    }
  }, [postData])
  return (
    <>
      <ul className="post-list">
        {props.postData.length > 0 &&
          props.postData.map((post, i) => {
            return (
              <PostSingle {...post} key={i} />
            )
          })}
      </ul>
    </>
  )
}
export default PostList;