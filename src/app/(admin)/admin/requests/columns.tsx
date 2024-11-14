"use client"

import { ru } from "date-fns/locale"
import {type ColumnDef } from "@tanstack/react-table"
import { formatDistance } from "date-fns";
import { Request, ThemeNames } from "~/lib/share/types/requests";




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
    accessorKey:"theme",
    header:"Форма",
    cell({row}) {
      const origin = row.original
      return (
        <p className="text-sm">{ThemeNames[origin.theme]}</p>
      )
    },
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
