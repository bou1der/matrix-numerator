"use client"

import {type ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { Service } from "~/lib/share/types/services";
import { ServiceCreateUpdate } from "./form";
import DeleteInfo from "./delete";




export const columns:ColumnDef<Service>[] = [
  {
    accessorKey:"title",
    header:"Заголовок",
  },
  // {
  //   accessorKey: "description",
  //   header:"Описание",
  //   cell({row}) {
  //     const origin = row.original
  //     const description = origin.description.length > 40 ? origin.description.slice(0, 40) + "..." : origin.description
  //
  //     return (
  //       <p className="text-sm">{description}</p>
  //     )
  //   },
  // },
  {
    accessorKey:"price",
    header:"Цена",
  },
  {
    id:"actions",
    cell:({row}) =>{
      const original = row.original
      return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreHorizontal className="size-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center">
          <ServiceCreateUpdate service={original} />
          <DeleteInfo info={original} />
        </DropdownMenuContent>
      </DropdownMenu>
      )
    }
  }
]
