import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LabelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Label Name" source="labelName" />
      </SimpleForm>
    </Create>
  );
};
