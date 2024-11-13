"use client"

import {type ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { Service } from "~/lib/share/types/services";
import { ServiceCreateUpdate } from "./form";




export const columns:ColumnDef<Service>[] = [
  {
    accessorKey:"title",
    header:"Заголовок",
  },
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
        </DropdownMenuContent>
      </DropdownMenu>
      )
    }
  }
]
