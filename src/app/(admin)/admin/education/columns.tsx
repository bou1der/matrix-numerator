"use client"

import {type ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { Education } from "~/lib/share/types/education";
import { EducationUpdateCreate } from "./form";
import Delete from "./delete";




export const columns:ColumnDef<Education>[] = [
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
            <EducationUpdateCreate education={original} />
            <Delete education={original}/>
        </DropdownMenuContent>
      </DropdownMenu>
      )
    }
  }
]
