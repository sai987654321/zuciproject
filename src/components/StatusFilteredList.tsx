'use client'
import { indents } from "@/data/indents";
import { useRouter } from "next/navigation";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";



export function StatusFilteredList({ status }: { status: string }) {
  const filteredIndents = indents.filter((indent) => indent.status === status);
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-4">Indents with Status: {status}</h2>
      <Table>
        <TableHeader>
          <TableRow className="">
            <TableHead>ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Kitchen</TableHead>
            <TableHead>No. of Items</TableHead>
            <TableHead>Raised by</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredIndents.map((indent) => (
            <TableRow key={indent.id} onClick={() => router.push(`/indent/${indent.id}`)} className="cursor-pointer hover:bg-gray-100">
              <TableCell>{indent.id}</TableCell>
              <TableCell>{indent.date}</TableCell>
              <TableCell>{indent.kitchen}</TableCell>
              <TableCell>{indent.noOfItems}</TableCell>
              <TableCell>{indent.raisedBy}</TableCell>
              <TableCell>{indent.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
