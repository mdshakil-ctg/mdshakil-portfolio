interface ButtonProps {
    children: React.ReactNode;
    className: string;
}

const Button = ({children} : ButtonProps) => {
  return (
    <button>{children}</button>
  )
}

export default Button