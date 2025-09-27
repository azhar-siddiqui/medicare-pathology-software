import { getTestGroupActions } from "@/actions/test-group/get.action";
import { Main } from "@/components/common/main";
import PageHeading from "@/components/ui/heading";
import { testColumns } from "./_components/test-columns";
import TestListTable from "./_components/test-list-table";

export default async function TestList() {
  const testGroup = await getTestGroupActions();
  return (
    <Main>
      <div className="mb-2 flex items-center justify-between space-y-2">
        <PageHeading heading="Test List" subTitle="Manage your test here." />
      </div>
      <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12">
        <TestListTable data={testGroup.data} columns={testColumns} />
      </div>
    </Main>
  );
}
