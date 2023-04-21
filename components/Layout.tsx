import Link from "next/link";
import Cookies from "universal-cookie";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const cookies = new Cookies();

  const handleLogOut = () => {
    cookies.remove("tk_user");
  };

  return (
    <>
      {cookies.get("tk_user") && (
        <div className="bg-slate-900 py-3 mb-5">
          <div className="container mx-auto flex justify-center">
            <Link
              onClick={handleLogOut}
              href="/login"
              className="text-white font-center mx-auto"
            >
              Log out
            </Link>
          </div>
        </div>
      )}
      <div>{children}</div>
    </>
  );
};

export default Layout;
