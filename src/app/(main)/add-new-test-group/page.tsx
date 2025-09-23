import { getDepartmentActions } from "@/actions/department/get.action";
import { Main } from "@/components/common/main";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import PageHeading from "@/components/ui/heading";
import TestDialog from "./_components/test-dialog";
import TestGroupForm from "./_components/test-group-form";
import TestGroupPrimaryButton from "./_components/test-group-primary-button";
import { TestProvider } from "./_components/test-provider";

export default async function AddNewTest() {
  const department = await getDepartmentActions();
  return (
    <TestProvider>
      <Main>
        <div className="mb-2 flex flex-col sm:flex-row sm:items-center justify-between space-y-4">
          <PageHeading heading="Add New Test Group" />
          <TestGroupPrimaryButton />
        </div>
        <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12">
          <Card>
            <CardHeader>
              <CardDescription>
                A collection of related laboratory tests grouped together to
                help in diagnosis, <br className="hidden sm:block" /> screening,
                or monitoring of specific health conditions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <TestGroupForm department={department.data} />
            </CardContent>
          </Card>
        </div>
      </Main>

      <TestDialog />
    </TestProvider>
  );
}
