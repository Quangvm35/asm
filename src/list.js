import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default function Product(props) {
  const removeProduct = async (id) => {
    try {
      await fetch(
        "https://6153be7e3f4c430017159417.mockapi.io/products/" + id,
        {
          method: "DELETE",
        }
      );
      props.onDelete(id);
    } catch (error) {}
  };
  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>
                <Link to={"/product/detail/" + product.id}>{product.name}</Link>
              </td>
              <td>{product.price}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => removeProduct(product.id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <div className="btn-group">
                  <Link
                    role="button"
                    className="btn btn-primary"
                    to={"/product/edit/" + product.id}
                  >
                    Update product
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
