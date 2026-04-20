import { useEffect, useState } from "react";

function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments") // ЗАМІНИ 1 НА СВІЙ ВАРІАНТ
      .then(res => res.json())
      .then(data => {
        setComments(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Відгуки</h2>

      {comments.map(comment => (
        <div key={comment.id} style={{border: "1px solid gray", margin: "10px", padding: "10px"}}>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </div>
      ))}

    </div>
  );
}

export default Reviews;