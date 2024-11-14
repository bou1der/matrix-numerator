"use client"

import {type ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { InformationCreateUpdate } from "./form";
import { Information, InformationNames } from "~/lib/share/types/informations";
import DeleteInfo from "./delete";




export const columns:ColumnDef<Information>[] = [
  {
    accessorKey:"title",
    header:"Заголовок",
  },
  {
    accessorKey:"type",
    header:"Матрица",
    cell({row}) {
      const origin = row.original

      return <p className="text-sm">{InformationNames[origin.type]}</p>
    },
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
          <InformationCreateUpdate information={original} />
          <DeleteInfo info={original} />

        </DropdownMenuContent>
      </DropdownMenu>
      )
    }
  }
]
