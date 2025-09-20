import { Main } from "@/components/common/main";
import PageHeading from "@/components/ui/heading";
import { testData } from "./_components/data";
import { testColumns } from "./_components/test-columns";
import TestListTable from "./_components/test-list-table";



export default function TestList() {
  return (
    <Main>
      <div className="mb-2 flex items-center justify-between space-y-2">
        <PageHeading heading="Test List" subTitle="Manage your test here." />
      </div>
      <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12">
        <TestListTable data={testData} columns={testColumns} />
      </div>
    </Main>
  );
}
