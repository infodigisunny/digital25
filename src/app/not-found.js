import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container py-80 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>

      <p className="text-lg mb-6">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link className="btn btn-primary" href="/">
        Go Back Home
      </Link>
    </div>
  );
}
