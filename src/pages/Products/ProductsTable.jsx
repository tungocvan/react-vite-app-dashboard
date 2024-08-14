import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Edit, Search, Trash2, Plus, CircleMinus, Eye  } from "lucide-react";
import Modal from "~/components/common/Modal";
import Content from "./Content";

const ProductsTable = ({ products, currentPage, productsPerPage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setProduct([]);
    setIsModalOpen(false);
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
  
    if (term === "") {
      // Nếu không có từ khóa tìm kiếm, hiển thị toàn bộ sản phẩm
      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      setFilteredProducts(products.slice(startIndex, endIndex));
    } else {
      // Nếu có từ khóa tìm kiếm, lọc sản phẩm theo từ khóa
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(term) ||
          product.category.toLowerCase().includes(term)
      );
      setFilteredProducts(filtered);
    }
  };
  

  const handleEdit = (item) => {
    if (item) {
      setProduct(item);
    }
    openModal();
  };

  const handleDelete = (id) => {
    console.log("id:", id);
    openModal();
  };
  const handleView = (id) => {
    console.log("id:", id);
    openModal();
  };

  const handleDeleteAll = () => {
    console.log("Selected IDs:", selectedProducts);
    // Xử lý xóa các sản phẩm đã chọn
  };

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    setSelectAll(isChecked);
    if (isChecked) {
      setSelectedProducts(filteredProducts.map(product => product.id));
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSelectProduct = (e, id) => {
    const isChecked = e.target.checked;
    setSelectedProducts(prevSelected => {
      if (isChecked) {
        return [...prevSelected, id];
      } else {
        return prevSelected.filter(productId => productId !== id);
      }
    });
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    setFilteredProducts(products.slice(startIndex, endIndex));
  }, [products, currentPage, productsPerPage]);

  useEffect(() => {
    if (selectAll) {
      setSelectedProducts(filteredProducts.map(product => product.id));
    } else {
      setSelectedProducts([]);
    }
  }, [selectAll, filteredProducts]);

  return (
    <>
      <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleSearch}
              value={searchTerm}
            />
            <button
              onClick={openModal}
              className="absolute left-[-160px] top-0 text-gray-400 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200 border-b-2 p-2 rounded"
            >
              <Plus size={18} className="mr-2" /> Add Product
            </button>
            <button
              onClick={handleDeleteAll}
              className="absolute left-[-300px] top-0 text-gray-400 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200 border-b-2 p-2 rounded"
            >
              <CircleMinus size={18} className="mr-2" /> Delete All
            </button>
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className="mr-1"
                  />
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Sales
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-700">
              {filteredProducts.map((product) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                    <input
                      type="checkbox"
                      checked={selectedProducts.includes(product.id)}
                      onChange={(e) => handleSelectProduct(e, product.id)}
                      className="mr-2"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww"
                      alt="Product img"
                      className="size-10 rounded-full"
                    />
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {product.stock}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {product.sales}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <button
                      onClick={() => handleEdit(product)}
                      className="text-indigo-400 hover:text-indigo-300 mr-2"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-400 hover:text-red-300 mr-2"
                    >
                      <Trash2 size={18} />
                    </button>
                    <button
                      onClick={() => handleView(product.id)}
                      className="text-[#10B981] hover:text-red-300"
                    >
                      <Eye  size={18} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        Content={Content}
        Data={product}
      />
    </>
  );
};

export default ProductsTable;
