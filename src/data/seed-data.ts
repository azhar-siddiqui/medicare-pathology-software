export interface DepartmentSeed {
  department: string;
}

export interface TestGroupSeed {
  testGroupName: string;
  testCode: string;
  department: string;
  sampleType: string;
  price: number;
  interpretation: string;
  showInterpretation: boolean;
}

// Default departments to seed
export const defaultDepartments: DepartmentSeed[] = [
  { department: "Hematology" },
  { department: "Biochemistry" },
  { department: "Microbiology" },
  { department: "Immunology" },
  { department: "Endocrinology" },
  { department: "Cytology" },
  { department: "Histopathology" },
];

// Default test groups to seed
export const defaultTestGroups: TestGroupSeed[] = [
  {
    testGroupName: "Complete Blood Count (CBC)",
    testCode: "CBC",
    department: "Hematology",
    sampleType: "Whole Blood (EDTA)",
    price: 200.0,
    showInterpretation: true,
    interpretation:
      "Evaluates overall health and detects a wide range of disorders, including anemia, infection, and leukemia.",
  },
  {
    testGroupName: "Erythrocyte Sedimentation Rate",
    testCode: "ESR",
    department: "Hematology",
    sampleType: "Whole Blood (EDTA)",
    price: 100.0,
    showInterpretation: true,
    interpretation:
      "Measures how quickly erythrocytes settle at the bottom of a test tube. Elevated levels indicate inflammation.",
  },
  {
    testGroupName: "Liver Function Test",
    testCode: "LFT",
    department: "Biochemistry",
    sampleType: "Serum",
    price: 500.0,
    showInterpretation: true,
    interpretation:
      "Assesses liver health by measuring proteins, liver enzymes, and bilirubin levels.",
  },
  {
    testGroupName: "Kidney Function Test",
    testCode: "KFT",
    department: "Biochemistry",
    sampleType: "Serum",
    price: 450.0,
    showInterpretation: true,
    interpretation:
      "Evaluates kidney health by measuring urea, creatinine, and electrolytes.",
  },
  {
    testGroupName: "Fasting Blood Sugar",
    testCode: "FBS",
    department: "Biochemistry",
    sampleType: "Plasma (Fluoride)",
    price: 150.0,
    showInterpretation: true,
    interpretation:
      "Measures blood glucose levels after fasting to diagnose diabetes.",
  },
  {
    testGroupName: "HbA1c (Glycated Hemoglobin)",
    testCode: "HbA1c",
    department: "Biochemistry",
    sampleType: "Whole Blood (EDTA)",
    price: 400.0,
    showInterpretation: true,
    interpretation:
      "Reflects average blood glucose levels over the past 2–3 months.",
  },
  {
    testGroupName: "Thyroid Function Test",
    testCode: "TFT",
    department: "Endocrinology",
    sampleType: "Serum",
    price: 600.0,
    showInterpretation: true,
    interpretation:
      "Measures T3, T4, and TSH levels to assess thyroid gland function.",
  },
  {
    testGroupName: "Antibody Titer",
    testCode: "ABT",
    department: "Immunology",
    sampleType: "Serum",
    price: 300.0,
    showInterpretation: true,
    interpretation:
      "Measures the level of antibodies in the blood to assess immunity.",
  },
  {
    testGroupName: "HIV Antibody Test (ELISA)",
    testCode: "HIV-ELISA",
    department: "Immunology",
    sampleType: "Serum",
    price: 500.0,
    showInterpretation: true,
    interpretation: "Detects antibodies against HIV to diagnose infection.",
  },
  {
    testGroupName: "Blood Culture",
    testCode: "BCULT",
    department: "Microbiology",
    sampleType: "Blood",
    price: 700.0,
    showInterpretation: true,
    interpretation: "Detects bacterial or fungal infections in the blood.",
  },
  {
    testGroupName: "Urine Culture & Sensitivity",
    testCode: "UCULT",
    department: "Microbiology",
    sampleType: "Urine",
    price: 350.0,
    showInterpretation: true,
    interpretation:
      "Identifies urinary tract infections and guides antibiotic treatment.",
  },
  {
    testGroupName: "Sputum AFB (Acid-Fast Bacilli)",
    testCode: "AFB",
    department: "Microbiology",
    sampleType: "Sputum",
    price: 200.0,
    showInterpretation: true,
    interpretation: "Detects Mycobacterium tuberculosis infection.",
  },
  {
    testGroupName: "Pap Smear",
    testCode: "PAP",
    department: "Cytology",
    sampleType: "Cervical Smear",
    price: 500.0,
    showInterpretation: true,
    interpretation: "Screens for cervical cancer and precancerous lesions.",
  },
  {
    testGroupName: "Fine Needle Aspiration Cytology",
    testCode: "FNAC",
    department: "Cytology",
    sampleType: "Tissue Aspirate",
    price: 1200.0,
    showInterpretation: true,
    interpretation:
      "Examines cells extracted with a thin needle to detect tumors or infections.",
  },
  {
    testGroupName: "Biopsy (Histopathology)",
    testCode: "BIOPSY",
    department: "Histopathology",
    sampleType: "Tissue",
    price: 2500.0,
    showInterpretation: true,
    interpretation:
      "Microscopic examination of tissue to detect cancer or other abnormalities.",
  },
  {
    testGroupName: "Coagulation Profile (PT/INR, aPTT)",
    testCode: "COAG",
    department: "Hematology",
    sampleType: "Citrated Plasma",
    price: 600.0,
    showInterpretation: true,
    interpretation:
      "Assesses blood clotting ability to guide bleeding disorder or anticoagulant therapy management.",
  },
];
