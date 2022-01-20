import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
} from "react-admin";

export const FragmentAnnotationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="bodyPurpose"
          label="body_purpose"
          choices={[
            { label: "tagging", value: "Tagging" },
            { label: "commenting", value: "Commenting" },
            { label: "describing", value: "Describing" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="selectorType"
          label="selector_type"
          choices={[
            { label: "FragmentSelector", value: "FragmentSelector" },
            { label: "CssSelector", value: "CssSelector" },
            { label: "XPathSelector", value: "XPathSelector" },
            { label: "TextQuoteSelector", value: "TextQuoteSelector" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="selector_value" source="selectorValue" />
        <TextInput label="target_format" source="targetFormat" />
        <TextInput label="target_id" source="targetId" />
        <TextInput label="target_src" source="targetSrc" />
      </SimpleForm>
    </Create>
  );
};
