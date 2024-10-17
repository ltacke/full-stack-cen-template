import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="mx-auto flex h-screen max-w-sm flex-col items-center justify-center text-center">
      <h1 className="text-primary mb-4 text-8xl font-bold leading-none">404</h1>
      <p className="text-md">Oops!</p>
      <p className="text-md">Page not found.</p>
      <Button asChild variant="outline" className="mt-4">
        <Link to="/">Go back</Link>
      </Button>
    </div>
  );
};

export default NotFound;
