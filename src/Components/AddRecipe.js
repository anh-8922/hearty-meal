import { useNavigate } from 'react-router-dom';

export default function AddRecipe({ text, to,  ...rest }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return <button onClick={handleClick}>{text}</button>;
}