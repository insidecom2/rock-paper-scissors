import React, { createContext, useState } from "react";
export interface IMismatchSummaryListProp {
  id: number;
  date: string;
}
export interface MismatchContextProviderProp {
  children: React.ReactNode;
}

export interface useContextInterface {
  record: IMismatchSummaryListProp | null;
  setRecord: React.Dispatch<
    React.SetStateAction<IMismatchSummaryListProp | null>
  >;
}

export const MismatchContext = createContext<useContextInterface | null>(null);

export const MismatchContextProvider = ({
  children,
}: MismatchContextProviderProp) => {
  const [record, setRecord] = useState<IMismatchSummaryListProp | null>(null);
  return (
    <MismatchContext.Provider value={{ record, setRecord }}>
      {children}
    </MismatchContext.Provider>
  );
};
