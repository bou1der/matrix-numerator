import { DashboardContent, DashboardHeader, DashboardTitle } from "~/components/ui/dashboard"
import { api } from "~/trpc/main/server"
import { EducationUpdate } from "./form"


export default async function EducationAdmin(){
  const education = await api.education.getOne()
  return (
    <DashboardContent>
      <DashboardHeader>
        <DashboardTitle>Обучение</DashboardTitle>
      </DashboardHeader>
      <EducationUpdate education={education} />
    </DashboardContent>
  )
}
