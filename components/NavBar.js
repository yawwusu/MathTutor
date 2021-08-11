import { useAuth } from "../lib/auth";
import { UserIcon, UserCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();
  const auth = useAuth();
  const handleAuth = () =>
    !auth.user
      ? () => router.push("/login")
      : () => {
          router.push("/");
          auth.signout();
        };

  return (
    <nav className="flex items-center justify-between p-2 w-full h-12 border-b">
      <img src="/logo.svg" alt="Math Tutor Logo" className="h-10 ml-2" />
      <div
        onClick={handleAuth()}
        className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-black"
      >
        {!auth.user ? (
          <>
            <UserIcon className="h-8 pt-2 group-hover:animate-bounce" />
            <p className="tracking-widest opacity-0 group-hover:opacity-100">
              Log In
            </p>
          </>
        ) : (
          <>
            <UserCircleIcon className="h-10 pt-2 group-hover:animate-bounce" />
            <p className="tracking-widest opacity-0 group-hover:opacity-100">
              Log Out
            </p>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
