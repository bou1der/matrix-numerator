"use client"

import { ru } from "date-fns/locale"
import {type ColumnDef } from "@tanstack/react-table"
import { formatDistance } from "date-fns";
import { Call } from "~/lib/share/types/calls";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog";
import { Eye } from "lucide-react";
import { Button } from "~/components/ui/button";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "~/components/ui/alert-dialog";




export const columns:ColumnDef<Call>[] = [
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
  },
  {
    id:"action",
    cell({row}) {
      const original = row.original
      return (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="ghost"><Eye className="size-4"/></Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Обратная связь</AlertDialogTitle>
            </AlertDialogHeader>
            <div className="size-full space-y-4">
              <h1>{original.name}</h1>
              <div>
                <p>Телефон: {original.phone}</p>
                <p>Почта: {original.email}</p>
              </div>
              <p className="break-all">
                {original.description}
              </p>
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel className="w-full hover:bg-primary hover:text-primary-foreground">Закрыть</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )
    },
  }
]
