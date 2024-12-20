import { DashboardContent, DashboardHeader, DashboardTitle } from "~/components/ui/dashboard";
import { DataTable } from "~/components/ui/data-table";
import { columns } from "./columns";
import { api } from "~/trpc/main/server";
import { ServiceCreateUpdate } from "./form";



export default async function ServicesAdmin(){
  const services = await api.services.getAll()

  return (
    <DashboardContent>
      <DashboardHeader>
        <DashboardTitle>Услуги</DashboardTitle>
        <ServiceCreateUpdate />
      </DashboardHeader>
      <DataTable
        columns={columns}
        data={services}
      />
    </DashboardContent>
  )
}
