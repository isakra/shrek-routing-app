import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-6 bg-shrekNavbar p-8 flex justify-center items-center gap-10 font-bold text-xl w-3/4 mx-auto shadow-sm">
      <Link href="/">Home</Link>
      <Link href="/quotes">Shrek Quotes</Link>
      <Link href="/donkey">Donkey</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/meme">Meme</Link>
    </nav>
  );
};

export default Navbar;
