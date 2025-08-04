import { useState } from "react";

const Form = ({ handleSubmit }) => {
  const [form, setForm] = useState({ name: "", url: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.url) {
      handleSubmit(form);
      setForm({ name: "", url: "" });
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={form.name}
        onChange={handleChange}
      />

      <label htmlFor="url">URL:</label>
      <input
        type="text"
        name="url"
        id="url"
        value={form.url}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
