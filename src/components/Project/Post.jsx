import { Create, SimpleForm, TextInput } from 'react-admin';

const ProjectPost = (props) => {
  return (
    <Create title="Create" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="description" />
        <TextInput source="image" />
        <TextInput source="url" />
      </SimpleForm>
    </Create>
  );
};

export default ProjectPost;
