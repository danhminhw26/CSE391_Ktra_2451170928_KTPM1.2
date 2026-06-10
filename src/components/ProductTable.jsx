import ProductRow from "./ProductRow";

function ProductTable({ products }) {
  return (
    <div className="card">
      <h2>Danh sách sản phẩm</h2>

      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>TÊN SẢN PHẨM</th>
            <th>DANH MỤC</th>
            <th>GIÁ</th>
            <th>TRẠNG THÁI</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;