import { Header } from "@/components/Header";
import { IndentList } from "@/components/IndentList";
import { Sidebar } from "@/components/Sidebar";


export default function Home() {
  return (
   <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <IndentList />
        </main>
      </div>
    </div>
  );
}
