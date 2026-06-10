function ProductRow({ product }) {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.price} ₫</td>
      <td>
        <span
          className={
            product.status === "Còn hàng"
              ? "badge success"
              : "badge danger"
          }
        >
          {product.status}
        </span>
      </td>
    </tr>
  );
}

export default ProductRow;