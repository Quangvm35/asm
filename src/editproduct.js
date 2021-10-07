import { useHistory, useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
export default function Edit(props){
    let history = useHistory();
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch("https://6153be7e3f4c430017159417.mockapi.io/products/" + id)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        reset(data);
      });
  }, [reset]);
  const onSubmit = (data) => {
    fetch("https://6153be7e3f4c430017159417.mockapi.io/products/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        props.onUpdate(data);
        history.push("/product");
      });
  };
    return(
<form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          {...register("name")}
          defaultValue={product.name}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          type="number"
          className="form-control"
          {...register("price")}
          defaultValue={product.price}
        />
      </div>
      <button type="submit" className="btn btn-info">
        update product
      </button>
    </form>
    )
}