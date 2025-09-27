
export interface TestData {
  department: {
    department: string;
    id: string;
  };
  id: string;
  testGroupName: string;
  testCode: string | null;
  sampleType: string;
  price: number | string;
  showInterpretation: boolean;
}
