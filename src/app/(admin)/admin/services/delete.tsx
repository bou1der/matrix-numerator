"use client";

import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { DropdownMenuItem } from "~/components/ui/dropdown-menu";
import { useToast } from "~/hooks/use-toast";
import { Service } from "~/lib/share/types/services";
import { api } from "~/trpc/main/react";

export default function DeleteInfo({
  info,
}: {
  info: Service;
}) {
  const router = useRouter();
  const { toast } = useToast();

  const deleteGroupMutation = api.services.delete.useMutation({
    onSuccess: () => {
      toast({
        title: "Услуга удалена",
      });
      router.refresh();
    },
    onError: (err) => {
      toast({
        title: "Ошибка удаления услуги",
        description: err.message,
        variant: "destructive",
      });
    },
  });

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          Удалить
        </DropdownMenuItem>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Удаление услуги</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          Вы уверены что хотите удалить "{info.title}"?
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Отмена</AlertDialogCancel>
          <AlertDialogAction
            disabled={deleteGroupMutation.isPending}
            onClick={() => deleteGroupMutation.mutate({ id: info.id })}
          >
            Удалить
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
