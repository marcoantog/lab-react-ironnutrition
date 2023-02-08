import { Card, Col, Button } from 'antd';

export function FoodBox(props) {
  const { name, image, calories, servings, index } = props.food;
  const { array, setArray } = props;

  function handleDelete(index) {
    const clone = [...array];
    clone.splice(index, 1);

    setArray(clone);
  }

  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button
          type="primary"
          onClick={() => {
            handleDelete(index);
          }}
        >
          Delete
        </Button>
      </Card>
    </Col>
  );
}
