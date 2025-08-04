import { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";

const API_URL = "http://localhost:3000/links";

const LinkContainer = () => {
  const [favLinks, setFavLinks] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setFavLinks)
      .catch(console.error);
  }, []);

  const handleRemove = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
      .then(() => setFavLinks(favLinks.filter((link) => link.id !== id)))
      .catch(console.error);
  };

  const handleSubmit = (newLink) => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newLink),
    })
      .then((res) => res.json())
      .then((savedLink) => setFavLinks([...favLinks, savedLink]))
      .catch(console.error);
  };

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>

      <Table
        linkData={favLinks}
        removeLink={(i) => handleRemove(favLinks[i].id)}
      />
      <br />
      <h3>Add New</h3>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};

export default LinkContainer;
