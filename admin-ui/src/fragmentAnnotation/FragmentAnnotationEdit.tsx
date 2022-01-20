import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FragmentAnnotationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="target_format" source="targetFormat" />
        <TextInput label="target_id" source="targetId" />
        <TextInput label="target_src" source="targetSrc" />
      </SimpleForm>
    </Edit>
  );
};
