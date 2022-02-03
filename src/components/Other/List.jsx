import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const OtherList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="description" />
        <TextField source="url" />
        <TextField source="source" />
        <EditButton basePath="/other_projects" />
        <DeleteButton basePath="/other_projects" />
      </Datagrid>
    </List>
  );
};

export default OtherList;
