import { useParams, Navigate } from 'react-router-dom'
import { useUsers } from './contexts/UsersContext';
import { EditUserForm } from './EditUserForm';

export const EditUserView = () => {
  const { getUserById } = useUsers();
  const { userId } = useParams();
  const user = getUserById(Number(userId));

  if (!user) {
    return <Navigate to="/" />
  }

  return <EditUserForm user={user} />
}