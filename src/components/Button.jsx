/* eslint-disable react/prop-types */
const Button = ({ styleTop }) => {
    return (
        <button
            type='button'
            className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styleTop}`}
        >
            Get Started
        </button>
    );
};

export default Button;
