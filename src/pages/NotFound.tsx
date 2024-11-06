import Slogan from '../components/Slogan';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <main className="p-20">
      <div className="notFoundBody relative">
        <div className="absolute">
          <Slogan
            words1={'想吃甜點'}
            words2={'請回首頁'}
            size="text-5xl"
            singleSlogan
            alwaysVertical
          />
          <br />
          <Link to="/">
            <button className="py-10  px-20 font-bold text-[1.5rem] bg-btn-yellow">
              回首頁
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
