import { useParams } from 'react-router-dom';

const Categories = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>Categories</div>
  )
}

export default Categories;