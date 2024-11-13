"use client"

import { ru } from "date-fns/locale"
import {type ColumnDef } from "@tanstack/react-table"
import { formatDistance } from "date-fns";
import { Request } from "~/lib/share/types/requests";




export const columns:ColumnDef<Request>[] = [
  {
    accessorKey:"name",
    header:"Имя",
  },
  {
    accessorKey:"phone",
    header:"Телефон",
  },
  {
    accessorKey:"email",
    header:"email",
  },
  {
    accessorKey:"time",
    header:"Время",
    cell({row}) {
      const request = row.original

      return (
        <p className="text-sm">
          {
            formatDistance(
              request.time,
              new Date(),
              {
                addSuffix:true,
                locale:ru
              }
            )
          }
        </p>
      )
        
    },
  }
]
