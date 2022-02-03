import { Create, SimpleForm, TextInput } from 'react-admin';

const OtherPost = (props) => {
  return (
    <Create title="Create" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="description" />
        <TextInput source="url" />
      </SimpleForm>
    </Create>
  );
};

export default OtherPost;
