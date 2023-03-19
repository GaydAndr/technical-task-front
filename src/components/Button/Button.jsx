import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const MyButton = ({ navigateTo, textBtn, type }) => {
  return (
    <NavLink
      onClick={() => {
        // console.log(navigateTo);
      }}
      to={navigateTo}
    >
      <Button type={type}>{textBtn}</Button>
    </NavLink>
  );
};
