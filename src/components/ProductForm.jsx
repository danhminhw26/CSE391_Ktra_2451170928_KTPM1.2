function ProductForm() {
  return (
    <div className="card">
      <h2>Thêm sản phẩm mới</h2>

      <div className="form-group">
        <label>Tên sản phẩm</label>
        <input type="text" placeholder="Nhập tên sản phẩm" />
      </div>

      <div className="form-group">
        <label>Danh mục</label>
        <select>
          <option>-- Chọn danh mục --</option>
          <option>Điện thoại</option>
          <option>Laptop</option>
          <option>Phụ kiện</option>
        </select>
      </div>

      <div className="form-group">
        <label>Giá</label>
        <input type="number" placeholder="Nhập giá" />
      </div>

      <div className="form-group">
        <label>Trạng thái</label>
        <select>
          <option>Còn hàng</option>
          <option>Hết hàng</option>
        </select>
      </div>

      <div className="button-group">
        <button className="btn-primary">Thêm sản phẩm</button>
        <button className="btn-secondary">Làm mới form</button>
      </div>
    </div>
  );
}

export default ProductForm;