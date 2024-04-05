import React from 'react';

const Table = ({ columns, data }) => {
  return (
    <div className="font-Poppins overflow-x-auto shadow-md sm:rounded-lg border-2 max-w-7xl mx-auto items-center">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            {columns.map((column, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {column.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b odd:bg-white even:bg-gray-50">
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-6 py-4">
                  {/* Check if Cell is a function and call it with the row as argument,
                  otherwise check if accessor is a function and call it with the row as argument,
                  if neither, access the row's property directly */}
                  {column.Cell ? (
                    column.Cell({ cell: { row } })
                  ) : typeof column.accessor === 'function' ? (
                    column.accessor(row)
                  ) : (
                    row[column.accessor]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
