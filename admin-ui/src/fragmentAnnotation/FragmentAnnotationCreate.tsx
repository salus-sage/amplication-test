import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FragmentAnnotationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="target_format" source="targetFormat" />
        <TextInput label="target_id" source="targetId" />
        <TextInput label="target_src" source="targetSrc" />
      </SimpleForm>
    </Create>
  );
};
