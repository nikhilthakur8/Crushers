/* eslint-disable react/prop-types */

function Container({ color = "", children, className }) {
    return (
        <div
            className={`w-full md:px-10 px-5 overflow-auto ${color} no-scrollbar ${className}`}
        >
            {children}
        </div>
    );
}

export default Container;
