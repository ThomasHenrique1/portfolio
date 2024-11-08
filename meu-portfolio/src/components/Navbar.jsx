const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
        <div className="container mx-auto p-4 flex justify-around text-lg font-semibold">
          <a href="#home" className="hover:text-primary">Home</a>
          <a href="#about" className="hover:text-primary">Sobre Mim</a>
          <a href="#projects" className="hover:text-primary">Projetos</a>
          <a href="#contact" className="hover:text-primary">Contato</a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  