import { useHistory,  useParams } from "react-router";
import { useEffect, useState } from "react";
export default function Load(){
  let history = useHistory();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch("https://6153be7e3f4c430017159417.mockapi.io/products/" + id)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
    return(
<div className="card" style={{ width: "18rem" }} align="center">
      <img src={product.img} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">Profile</h5>
        <p className="card-text">{product.desc}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{product.id}</li>
        <li className="list-group-item">{product.name}</li>
        <li className="list-group-item">{product.price}</li>
      </ul>
    </div>
    )
}