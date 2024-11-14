import { DashboardContent, DashboardHeader, DashboardTitle } from "~/components/ui/dashboard"
import { DataTable } from "~/components/ui/data-table"
import { api } from "~/trpc/main/server"
import { columns } from "./columns"
import { EducationUpdateCreate } from "./form"


export default async function EducationAdmin(){
  const education = await api.education.getAll()
  return (
    <DashboardContent>
      <DashboardHeader>
        <DashboardTitle>Обучение</DashboardTitle>
        <EducationUpdateCreate />
      </DashboardHeader>
      <DataTable
        columns={columns}
        data={education}
      />
    </DashboardContent>
  )
}
