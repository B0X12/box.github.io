import NavBar from "./NavBar";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

type Props = {
  fullWidth: boolean;
};

const Header: React.FC<Props> = ({ fullWidth }) => {
  return (
    <div
      className="
        sticky 
        bg-blend-multiply
        mb-2 
        md:mb-6 
        z-[40] 
        top-0 
        backdrop-blur-md
        border-none"
      style={{
        height: '70px',
      }}
    >
      <div
        className={`m-auto h-full max-w-6xl flex justify-between items-center ${
          fullWidth && "md:px-24"
        }`}
      >
        <div className={`flex gap-3 items-center text-xl font-bold`}>
          <Logo />
        </div>
        <div className={`flex gap-3 items-center text-gray-400`}>
          <ThemeToggle />
          <NavBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
