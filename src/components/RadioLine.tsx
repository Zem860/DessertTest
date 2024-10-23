const RadioLine = () => {
  return (
    <>
      <div className="flex items-center">
        <span className="material-icons-outlined  text-homebackground-green">
          radio_button_checked
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
            radio_button_unchecked
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
            radio_button_unchecked
          </span>
        </div>
      </div>
    </>
  );
};

export default RadioLine;
