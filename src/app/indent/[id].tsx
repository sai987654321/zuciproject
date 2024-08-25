'use client'

import { IndentDetails } from "@/components/IndentDetails";
import { useRouter } from "next/router";


export default function IndentPage() {
  const { query } = useRouter();
  const { id } = query;

  return (
    <div className="flex h-screen bg-gray-100">
      <IndentDetails id={id as string} />
    </div>
  );
}
