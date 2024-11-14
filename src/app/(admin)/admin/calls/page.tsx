import { DashboardContent, DashboardHeader, DashboardTitle } from "~/components/ui/dashboard";
import { DataTable } from "~/components/ui/data-table";
import { api } from "~/trpc/main/server";
import { columns } from "./columns";



export default async function Requests(){
  const requests = await api.requests.getCalls()

  return (
    <DashboardContent>
      <DashboardHeader>
        <DashboardTitle>Обратная связь</DashboardTitle>
      </DashboardHeader>
      <DataTable
        columns={columns}
        data={requests}
      />
    </DashboardContent>
  )
}
