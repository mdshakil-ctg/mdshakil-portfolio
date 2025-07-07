interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children,  }: TitleProps) => {
  return (
      <h2 className='text-3xl  py-5 font-bold text-[#C4CFDE] border-b-2 border-b-black'>{children}</h2>
  );
};

export default Title;
