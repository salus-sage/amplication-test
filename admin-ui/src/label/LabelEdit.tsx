import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const LabelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Label Name" source="labelName" />
      </SimpleForm>
    </Edit>
  );
};
