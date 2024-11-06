import { useLocation } from "react-router-dom";
interface Icons {
  icons: string[];
}

const RadioLine = ({icons}:Icons) => {
  const location = useLocation();
  const color = location.pathname === "/success"? "text-dessert-green":"text-homebackground-green"
  const isOutline = location.pathname === "/success"? "material-icons":"material-icons-outlined";
  const [icon1, icon2,icon3] = icons;
  
  return (
    <>
      <div className="flex items-center">
        <span className={`${isOutline}  ${color}`}>
          {icon1}
        </span>
        <div className="flex items-center justify-center mx-[-6px] text-homebackground-green mx-2">
          <span
            className={`material-icons-outlined ${color}`}
            style={{ fontSize: '1.5rem' }}
          >
            horizontal_rule
          </span>
          <span
            className={`material-icons-outlined ${color} mx-[-10px]`}
            style={{ fontSize: '1.5rem' }}
          >
            horizontal_rule
          </span>
          <span
            className={`material-icons-outlined ${color}`}
            style={{ fontSize: '1.5rem' }}
          >
            horizontal_rule
          </span>
          <span className={`${isOutline}  ${color} mx-[-6px]`}>
            {icon2}
          </span>
          <span
            className={`material-icons-outlined ${color}`}
            style={{ fontSize: '1.5rem' }}
          >
            horizontal_rule
          </span>
          <span
            className={`material-icons-outlined ${color} mx-[-10px]`}
            style={{ fontSize: '1.5rem' }}
          >
            horizontal_rule
          </span>
          <span
            className={`material-icons-outlined ${color}`}
            style={{ fontSize: '1.5rem' }}
          >
            horizontal_rule
          </span>
          <span className={`${isOutline}  ${color} mx-[-6px]`}>
            {icon3}
          </span>
        </div>
      </div>
    </>
  );
};

export default RadioLine;
