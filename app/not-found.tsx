import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-indigo-200 via-purple-200 to-pink-200 blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-md text-center">
        <p className="text-sm font-medium text-indigo-600">404 error</p>

        <h1 className="mt-2 text-5xl font-bold tracking-tight text-gray-900">
          Page not found
        </h1>

        <p className="mt-4 text-gray-600">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-md bg-black px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-gray-900 transition"
          >
            Go home
          </Link>

          <Link
            href="/pricing"
            className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
          >
            View pricing
          </Link>
        </div>
      </div>
    </div>
  );
}
