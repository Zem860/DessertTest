interface Icons {
  icons: string[];
}

const RadioLine = ({icons}:Icons) => {
  const [icon1, icon2,icon3] = icons;
  return (
    <>
      <div className="flex items-center">
        <span className="material-icons-outlined  text-homebackground-green">
          {icon1}
        </span>
        <div className="flex items-center justify-center mx-[-6px] text-homebackground-green mx-2">
          <span
            className="material-icons-outlined"
            style={{ fontSize: '1.5rem' }}
          >
            horizontal_rule
          </span>
          <span
            className="material-icons-outlined mx-[-10px]"
            style={{ fontSize: '1.5rem' }}
          >
            horizontal_rule
          </span>
          <span
            className="material-icons-outlined"
            style={{ fontSize: '1.5rem' }}
          >
            horizontal_rule
          </span>
          <span className="material-icons-outlined mx-[-6px]">
            {icon2}
          </span>
          <span
            className="material-icons-outlined"
            style={{ fontSize: '1.5rem' }}
          >
            horizontal_rule
          </span>
          <span
            className="material-icons-outlined mx-[-10px]"
            style={{ fontSize: '1.5rem' }}
          >
            horizontal_rule
          </span>
          <span
            className="material-icons-outlined"
            style={{ fontSize: '1.5rem' }}
          >
            horizontal_rule
          </span>
          <span className="material-icons-outlined mx-[-6px]">
            {icon3}
          </span>
        </div>
      </div>
    </>
  );
};

export default RadioLine;
