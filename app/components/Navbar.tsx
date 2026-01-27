import { buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

const Navbar = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-30 h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="z-40 font-semibold">
            <span>quill.</span>
          </Link>

          {/* Desktop navbar */}
          <div className="hidden items-center space-x-4 sm:flex">
            <Link
              href="/pricing"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Pricing
            </Link>

            <LoginLink
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Sign in
            </LoginLink>

             <RegisterLink
              className={buttonVariants({
                size: "sm",
              })}
            >
              Register
            </RegisterLink>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
