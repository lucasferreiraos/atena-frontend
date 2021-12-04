import React, { useRef, useState } from "react";

function Button({
  type="button",
  variant="normal",
  color="default",
  size="normal",
  className,
  fullWidth=false,
  noHover=false,
  loading=false,
  children,
  onClick,
  ...props
}){
  const ref = useRef<HTMLButtonElement>(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  React.useEffect(() => {
    if (ref.current && ref.current.getBoundingClientRect().witdh) {
      setWidth(ref.current.getBoundingClientRect().witdh)
    }
    if (ref.current && ref.current.getBoundingClientRect().height) {
      setHeight(ref.current.getBoundingClientRect().height)
    }
  }, [children]);

  return(
    <button
      ref={ref}
      type={type}
      className={className}
      style={
        loading
          ? {
              width: `${width}px`,
              height: `${height}px`
            }
          : {}
      }
      onClick={onClick}
      {...props}
    >
      {loading ? <span className="spinner" /> : children}
    </button>
  )
};

export default Button;
