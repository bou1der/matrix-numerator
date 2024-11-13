import { DashboardContent, DashboardHeader, DashboardTitle } from "~/components/ui/dashboard";
import { DataTable } from "~/components/ui/data-table";
import { api } from "~/trpc/main/server";
import { columns } from "./columns";
import { InformationCreateUpdate } from "./form";




export default async function InfoAdmin(){
  const infos = await api.information.getAll()

  return(
    <DashboardContent>
      <DashboardHeader>
        <DashboardTitle>Расшифровка</DashboardTitle>
        <InformationCreateUpdate />
      </DashboardHeader>
      <DataTable
        columns={columns}
        data={infos}
      />
    </DashboardContent>
  )
}
