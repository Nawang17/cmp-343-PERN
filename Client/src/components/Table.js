import React from "react";

const TableHeader = () => {
  // boilerplate table header functional component
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>URL</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = ({ linkData, removeLink }) => {
  return (
    <tbody>
      {linkData.map((link, index) => (
        <tr key={index}>
          <td>{link.name}</td>
          <td>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.url}
            </a>
          </td>
          <td>
            <button
              style={{
                backgroundColor: "red",
              }}
              onClick={() => removeLink(index)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const Table = ({ linkData, removeLink }) => {
  return (
    <table>
      <TableHeader />
      <TableBody linkData={linkData} removeLink={removeLink} />
    </table>
  );
};

export default Table;
