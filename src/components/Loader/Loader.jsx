import { RotatingLines } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';

const Loader = () => {
  return (
    <>
      <Spinner>
        <RotatingLines
          color="#8b8b8b"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </Spinner>
    </>
  );
};

export default Loader;
