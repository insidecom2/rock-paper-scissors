import { PLAY_ACTION } from "@/consts/commons";
import { Card, CardContent } from "@material-ui/core";
import { ReactNode } from "react";

export interface CardBoxProp {
  children: ReactNode;
  classExtra?: string;
}

export const CardBox = ({ children, classExtra }: CardBoxProp) => {
  return (
    <Card variant="outlined" className={classExtra ?? "card-item"}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
