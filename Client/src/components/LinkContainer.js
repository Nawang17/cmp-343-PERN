import { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";

const STORAGE_KEY = "favLinks";

const LinkContainer = () => {
  const [favLinks, setFavLinks] = useState(() => {
    // Load from localStorage initially
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    // Save to localStorage on change
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favLinks));
  }, [favLinks]);

  const handleRemove = (index) => {
    const updated = favLinks.filter((_, i) => i !== index);
    setFavLinks(updated);
  };

  const handleSubmit = (newLink) => {
    setFavLinks([...favLinks, newLink]);
  };

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>

      <Table linkData={favLinks} removeLink={handleRemove} />
      <br />
      <h3>Add New</h3>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};

export default LinkContainer;
