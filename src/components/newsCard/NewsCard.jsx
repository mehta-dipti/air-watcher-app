import React from "react";
import { Link } from "react";

export default function NewsCard(props) {
  return (
    <div className="col-md-6 col-xs-12">
      <div
        className="card news-card"
        style={{
          width: "30rem",
          marginTop: "10px",
          backgroundColor: "black",
          color: "white",
          display: "inline-block",
        }}
      >
        <img src={props.urlToImage} className="card-img-top" alt="Image" />
        <div className="card-body">
          <h5 className="card-title">Title: {props.title}</h5>
          <div className="author-container my-2">
            <small className="text-muted"> {props.author}</small>
          </div>
          <p className="card-text">{props.description}</p>
          <div className="button-container text-right">
            <a
              href={props.url}
              className="btn btn-primary"
              style={{ color: "white" }}
            >
              Read Article
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="col-md-6 col-lg-4 m-2">
//   <div className="card" style={{ minWidth: "18rem;" }}>
//     <img src={props.urlToImage} className="card-img-top" alt="pic" />
//     <div className="card-body">
//       <h5 className="card-title">{props.title}</h5>
//       <h6> Author :{props.author}</h6>
//       <p className="card-text"> Description :{props.description}</p>
//       <div className="text-right">
//         <a
//           href={props.url}
//           class="btn btn-primary"
//           style={{ fontSize: "1.4em" }}
//         >
//           Read Article
//         </a>
//       </div>
//     </div>
//   </div>
// </div>
