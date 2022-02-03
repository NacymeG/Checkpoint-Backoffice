import { Edit, SimpleForm, TextInput } from 'react-admin';

const OtherEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="description" />
        <TextInput source="url" />
      </SimpleForm>
    </Edit>
  );
};

export default OtherEdit;
