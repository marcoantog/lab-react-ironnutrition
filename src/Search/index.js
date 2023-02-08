import { Divider, Input } from 'antd';

export function Search(props) {
  const { search, setSearch } = props;

  function handleChange(e) {
    setSearch({ ...search, [e.target.name]: e.target.value });
  }
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={search.search}
        type="text"
        onChange={handleChange}
        name="search"
      />
    </>
  );
}
