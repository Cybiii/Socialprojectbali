
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

interface ButtonProps {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset'; // Adjust according to your needs
  onClick: () => void;
  buttonStyle: string; // You can further refine this type based on your STYLES array
  buttonSize: string; // Same as above, can be refined based on your SIZES array
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/donate' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
