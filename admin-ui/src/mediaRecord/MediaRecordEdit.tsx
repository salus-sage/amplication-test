import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MediaRecordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="File Name" source="filename" />
        <TextInput label="location" source="location" />
        <TextInput label="type" source="type" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
