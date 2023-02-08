import { Divider, Input } from 'antd';
import { useState } from 'react';

export function AddFoodForm(props) {
  const { foods, setFoods } = props;
  const [form, setForm] = useState({
    name: '',
    calories: '',
    image: '',
    servings: '',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setFoods([...foods, form]);

    setForm({ name: '', calories: '', image: '', servings: '' });
  }

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={form.name}
        type="text"
        name="name"
        onChange={handleChange}
      />

      <label>Image</label>
      <Input
        value={form.image}
        type="text"
        name="image"
        onChange={handleChange}
      />

      <label>Calories</label>
      <Input
        value={form.calories}
        type="number"
        name="calories"
        onChange={handleChange}
      />

      <label>Servings</label>
      <Input
        value={form.servings}
        type="number"
        name="servings"
        onChange={handleChange}
      />

      <button type="submit" onClick={handleSubmit}>
        Create
      </button>
    </form>
  );
}
