import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>
      <span style={{ fontWeight: 400, fontFamily: 'Barlow Condensed' }}>
        {children}
      </span>
    </button>
  );
};

export default Button;
