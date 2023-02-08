import foods from './foods.json';
import { useState } from 'react';
import { FoodBox } from './FoodBox';
import { Row, Divider, Button } from 'antd';
import { AddFoodForm } from './AddFoodForm';
import { Search } from './Search';

function App() {
  const [food, setFood] = useState(foods);
  const [search, setSearch] = useState({ search: '' });
  // console.log(search);

  return (
    <div className="App">
      <AddFoodForm foods={food} setFoods={setFood} />

      <Search search={search} setSearch={setSearch} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food.map((e, i) => {
          return (
            <FoodBox
              food={{
                name: e.name,
                calories: e.calories,
                image: e.image,
                servings: e.servings,
                index: i,
              }}
              array={food}
              setArray={setFood}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
