import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const FragmentAnnotationShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Creator" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Purpose" source="bodyPurpose" />
        <TextField label="selector_conformsTo" source="selectorConformsTo" />
        <TextField label="selector_type" source="selectorType" />
        <TextField label="selector_value" source="selectorValue" />
        <TextField label="target_format" source="targetFormat" />
        <TextField label="target_id" source="targetId" />
        <TextField label="target_src" source="targetSrc" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
