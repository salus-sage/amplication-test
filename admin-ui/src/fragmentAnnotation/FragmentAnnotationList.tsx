import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const FragmentAnnotationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Fragment Annotations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
