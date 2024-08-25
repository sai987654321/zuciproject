'use client'
import { indents } from "@/data/indents";

import { useRouter } from "next/navigation";
import { Table, TableBody, TableCell, TableHead, TableHeader } from "./ui/table";

export function IndentList() {
  const router = useRouter();

  return (
    <div className="w-full mx-auto py-6 sm:px-6 lg:px-8 ">
      <Table>
        <TableHeader>
          <div className="w-full flex bg-blue-800 gap-16 px-8">
            <TableHead>ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Kitchen</TableHead>
            <TableHead>No. of Items</TableHead>
            <TableHead>Raised by</TableHead>
            <TableHead>Status</TableHead>
          </div>
        </TableHeader>
        <TableBody>
          {indents.map((indent) => (
            <div key={indent.id} onClick={() => router.push(`/indent/${indent.id}`)} className="cursor-pointer hover:bg-gray-100 text-black px-2 space-x-9">
              <TableCell>{indent.id}</TableCell>
              <TableCell>{indent.date}</TableCell>
              <TableCell>{indent.kitchen}</TableCell>
              <TableCell>{indent.noOfItems}</TableCell>
              <TableCell>{indent.raisedBy}</TableCell>
              <TableCell>{indent.status}</TableCell>
            </div>
          ))}
        </TableBody>
      </Table>
      <button className="mt-4 border text-xs rounded-md border-black text-blue-700 px-3 py-1">Add New Indent</button>
    </div>
  );
}
