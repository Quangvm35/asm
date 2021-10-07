import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
export default function Add(props){
    let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://6153be7e3f4c430017159417.mockapi.io/products", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        props.onAdd(data);
        history.push("/product");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
        <label className="form-label">name</label>
        <input
        type="text"
        className="form-control"
        {...register("name", {require: true})}
        />
        {errors.name && <span>trường name không được để trống</span>}
            </div>
            <div className="mb-3">
            <label className="form-label">Price</label>
        <input type="number" className="form-control" {...register("price")} />
        {errors.price && <span>Trường price không được bỏ trống</span>}
            </div>
            <button type="submit" className="btn btn-info">thêm sản phẩm</button>
        </form>
    )
}