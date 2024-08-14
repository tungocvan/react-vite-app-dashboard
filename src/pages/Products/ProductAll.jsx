import React, { useState } from 'react';
import Content from './Content';
import ProductsTable from './ProductsTable';
import Panigation from './Panigation';
import { PRODUCT_DATA } from './data'; // Giả sử bạn có một file chứa dữ liệu sản phẩm

const ProductsAll = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 3;
  const totalRecord = PRODUCT_DATA.length ;
  const totalPages = Math.ceil(totalRecord / PRODUCTS_PER_PAGE);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const recordPageNext = totalRecord - PRODUCTS_PER_PAGE*currentPage;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <ProductsTable 
        products={PRODUCT_DATA} 
        currentPage={currentPage} 
        productsPerPage={PRODUCTS_PER_PAGE} 
      />
      <Panigation
        pages={pages}
        currentPage={currentPage}
        onPageChange={handlePageChange}    
        totalRecord={totalRecord}     
      />
    </>
  );
};

export default ProductsAll;
