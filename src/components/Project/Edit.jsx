import { Edit, SimpleForm, TextField, TextInput } from 'react-admin';

const ProjectEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextField source="title" />
        <TextInput source="description" />
        <TextInput source="lastName" />
        <TextInput source="image" />
        <TextInput source="url" />
      </SimpleForm>
    </Edit>
  );
};

export default ProjectEdit;
