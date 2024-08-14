import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Panigation = ({ pages, currentPage, onPageChange, totalRecord  }) => {
  const MAX_PAGES_DISPLAY = pages.length;
  const totalPages = Math.ceil(pages.length / MAX_PAGES_DISPLAY);
  const calculatePagesToShow = () => {
    let startPage = Math.max(1, currentPage - Math.floor(MAX_PAGES_DISPLAY / 2));
    let endPage = Math.min(pages.length, startPage + MAX_PAGES_DISPLAY - 1);

    if (endPage - startPage < MAX_PAGES_DISPLAY - 1) {
      startPage = Math.max(1, endPage - MAX_PAGES_DISPLAY + 1);
    }

    return { startPage, endPage };
  };

  const { startPage, endPage } = calculatePagesToShow();

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            onClick={() => onPageChange(currentPage - 1)}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            onClick={() => onPageChange(currentPage + 1)}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
            <p className="text-sm text-gray-700">
              Total{' '}             
              <span className="font-medium">{totalRecord}</span> results
            </p>
          </div>
          <div>
            <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
              <a
                href="#"
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </a>
              {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((page) => (
                <a
                  key={page}
                  href="#"
                  onClick={() => onPageChange(page)}
                  aria-current={page === currentPage ? 'page' : undefined}
                  className={`relative z-10 inline-flex items-center border ${
                    page === currentPage
                      ? 'bg-indigo-50 border-indigo-500 text-indigo-600'
                      : 'bg-white border-gray-300 text-gray-500'
                  } px-4 py-2 text-sm font-medium hover:bg-gray-50 focus:z-20`}
                >
                  {page}
                </a>
              ))}
              <a
                href="#"
                onClick={() => onPageChange(Math.min(pages.length, currentPage + 1))}
                className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
              >
                <span className="sr-only">Next</span>
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Panigation;
