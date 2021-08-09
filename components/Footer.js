function Footer() {
  // TODO: make responsive
  return (
    <footer className="flex items-center justify-between w-full h-12 border-t">
      <ul className="flex items-center justify-evenly w-80">
        <li>LinkedIn</li>
        <li>Twitter</li>
        <li>Facebook</li>
        <li>Instagram</li>
      </ul>
      <ul className="flex items-center justify-evenly w-80">
        <li>Terms</li>
        <li>Privacy Policy</li>
        <li>Support</li>
      </ul>
    </footer>
  );
}

export default Footer;
