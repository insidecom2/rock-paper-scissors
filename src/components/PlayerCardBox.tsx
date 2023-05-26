import { Box } from "@material-ui/core";
import { ReactNode } from "react";
import { CardBox } from "./commons/CardBox";

export interface CardBoxProp {
  children: ReactNode;
  classExtra?: string;
  setActionHandle: (action: string) => void;
  action: string;
}

export const PlayerCardBox = ({
  children,
  classExtra,
  setActionHandle,
  action,
}: CardBoxProp) => {
  return (
    <Box onClick={() => setActionHandle(action)}>
      <CardBox classExtra={classExtra}>{children}</CardBox>
    </Box>
  );
};
