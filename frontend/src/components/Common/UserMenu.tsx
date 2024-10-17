import { Link } from "@tanstack/react-router";
import { FiLogOut, FiUser } from "react-icons/fi";

import useAuth from "../../hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@carbon/icons-react";

interface UserMenuProps {
  className?: string;
}

const UserMenu = ({ className }: UserMenuProps) => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    logout();
  };

  return (
    <>
      {/* Desktop */}
      <div className={cn("abolute right-4 hidden sm:block", className)}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-cds-text-primary"
              aria-label="User menu"
              data-testid="user-menu"
            >
              <UserAvatar className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link to="/settings" className="flex items-center">
                <FiUser className="mr-2 h-4 w-4" />
                My profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout} className="text-ui-danger font-bold">
              <FiLogOut className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default UserMenu;
