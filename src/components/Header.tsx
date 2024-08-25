
import { Bell, ChevronLeft, Search, UserCircle2 } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
          <ChevronLeft className="mr-2" />
          All Indent
        </h1>
        <div className="flex items-center space-x-4">
          <button>
            <Bell className="h-4 w-4" />
          </button>
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search..." className="pl-8" />
          </div>
          <button >
            <UserCircle2 className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
