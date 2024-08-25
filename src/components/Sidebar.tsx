'use client'
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const statuses = ["Indent", "Draft", "Auto", "Raised", "Approved by HOD", "Issued by Stores", "History", "MVP Order request sheet", "Purchase Order"];

export function Sidebar() {
  const [expandedStatus, setExpandedStatus] = useState<string | null>(null);

  return (
    <div className="bg-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <div className="flex items-center justify-between px-4">
        <span className="text-2xl font-semibold text-blue-600">ZUCI</span>
      </div>
      <nav>
        {statuses.map((status) => (
          <div key={status}>
            <Link
              href={status === "All" ? "/" : `/status/${status}`}
              className="block py-2.5 px-2 rounded transition duration-200 bg-white text-blue-500"
              onClick={() => setExpandedStatus(expandedStatus === status ? null : status)}
            >
              {status}
              {(status === "MVP Order request sheet" || status === "Purchase Order") && (
                expandedStatus === status ? <ChevronUp className="float-right" /> : <ChevronDown className="float-right" />
              )}
            </Link>
            {expandedStatus === status && status !== "All" && (
              <div className="pl-8">
                <Link href={`/status/${status}/new`} className="block py-2 px-4 text-sm hover:bg-blue-100">New</Link>
                <Link href={`/status/${status}/pending`} className="block py-2 px-4 text-sm hover:bg-blue-100">Pending</Link>
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
