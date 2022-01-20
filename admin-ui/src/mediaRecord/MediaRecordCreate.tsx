import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MediaRecordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="File Name" source="filename" />
        <TextInput label="location" source="location" />
        <TextInput label="type" source="type" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
