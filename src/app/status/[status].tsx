
'use client'
import { StatusFilteredList } from "@/components/StatusFilteredList";
import { useRouter } from "next/router";


export default function StatusPage() {
  const { query } = useRouter();
  const { status } = query;

  return (
    <div className="flex h-screen bg-gray-100">
      <StatusFilteredList status={status as string} />
    </div>
  );
}
