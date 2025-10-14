import { ReactNode } from "react";

import * as TextFlagStyles from "./styles.ts";

interface TextFlagProps {
  children: ReactNode;
}

const TextFlag = ({ children }: TextFlagProps): JSX.Element => {
  return <TextFlagStyles.Container>{children}</TextFlagStyles.Container>;
};

export default TextFlag;
