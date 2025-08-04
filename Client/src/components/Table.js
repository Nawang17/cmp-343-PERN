import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>URL</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
};

const TableBody = ({
  linkData,
  editingIndex,
  editForm,
  setEditForm,
  startEdit,
  cancelEdit,
  saveEdit,
  handleRemove,
}) => {
  return (
    <tbody>
      {linkData.map((link, index) => (
        <tr key={link.id}>
          <td>
            {editingIndex === index ? (
              <input
                value={editForm.name}
                onChange={(e) =>
                  setEditForm({ ...editForm, name: e.target.value })
                }
              />
            ) : (
              link.name
            )}
          </td>
          <td>
            {editingIndex === index ? (
              <input
                value={editForm.url}
                onChange={(e) =>
                  setEditForm({ ...editForm, url: e.target.value })
                }
              />
            ) : (
              link.url
            )}
          </td>
          <td>
            {editingIndex === index ? (
              <>
                <button onClick={saveEdit}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <button onClick={() => startEdit(index)}>Edit</button>
                <button onClick={() => handleRemove(link.id)}>Delete</button>
              </>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const Table = ({
  linkData,
  editingIndex,
  editForm,
  setEditForm,
  startEdit,
  cancelEdit,
  saveEdit,
  handleRemove,
}) => {
  return (
    <table>
      <TableHeader />
      <TableBody
        linkData={linkData}
        editingIndex={editingIndex}
        editForm={editForm}
        setEditForm={setEditForm}
        startEdit={startEdit}
        cancelEdit={cancelEdit}
        saveEdit={saveEdit}
        handleRemove={handleRemove}
      />
    </table>
  );
};

export default Table;
