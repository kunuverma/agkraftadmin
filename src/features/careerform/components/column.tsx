"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { FormType } from "../type/form.type";
import { imageUrl } from "@/globalurl/baseurl";

export const columns: ColumnDef<FormType>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <div
          className="flex flex-row"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          S.No.
        </div>
      );
    },
    cell: ({ row }) => <div className="">{row.index + 1}</div>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
        </Button>
      );
    },
    cell: ({ row }) => <div className=" pl-4">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
        </Button>
      );
    },
    cell: ({ row }) => <div className=" pl-4">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "mobileno",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Mobile no.
        </Button>
      );
    },
    cell: ({ row }) => <div className=" pl-4">{row.getValue("mobileno")}</div>,
  },
  {
    accessorKey: "experience",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Experience
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className=" pl-4">{row.getValue("experience")}</div>
    ),
  },
  {
    accessorKey: "currentctc",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Current CTC
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className=" pl-4">{row.getValue("currentctc")}</div>
    ),
  },
  {
    accessorKey: "expectedctc",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Expected CTC
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className=" pl-4">{row.getValue("expectedctc")}</div>
    ),
  },
  {
    accessorKey: "message",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          message
        </Button>
      );
    },
    cell: ({ row }) => <div className=" pl-4">{row.getValue("message")}</div>,
  },
  {
    accessorKey: "pdf", // Changed from "image" to "pdf"
    header: () => {
      return <div className="flex flex-row">PDF</div>;
    },
    cell: ({ row }) => (
      <div className="">
        <a
          href={`${imageUrl}${row.getValue("pdf")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View PDF
        </a>
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "CreatedAt",
  },
];