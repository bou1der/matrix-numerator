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
import { Information } from "~/lib/share/types/informations";
import { api } from "~/trpc/main/react";

export default function DeleteInfo({
  info,
}: {
  info: Information;
}) {
  const router = useRouter();
  const { toast } = useToast();

  const deleteGroupMutation = api.information.delete.useMutation({
    onSuccess: () => {
      toast({
        title: "Расшифровка удалена",
      });
      router.refresh();
    },
    onError: (err) => {
      toast({
        title: "Ошибка удаления расшифровки",
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
          <AlertDialogTitle>Удаление расшифровки</AlertDialogTitle>
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
