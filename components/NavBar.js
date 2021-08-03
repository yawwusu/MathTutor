function NavBar() {
  return (
    <nav className="flex items-center justify-center w-full h-12 border-b">
      <a className="flex items-center justify-center" href="#">
        Powered by{" "}
        <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
      </a>
    </nav>
  );
}

export default NavBar;
