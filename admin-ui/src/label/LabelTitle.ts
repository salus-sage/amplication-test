import { Label as TLabel } from "../api/label/Label";

export const LABEL_TITLE_FIELD = "labelName";

export const LabelTitle = (record: TLabel): string => {
  return record.labelName || record.id;
};
