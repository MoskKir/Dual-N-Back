import api from '.';
import { extractListParams } from 'utils/querying';

export const fetchUsers = params => api.get('/users', { params: extractListParams(params) });

export const modifyUser = (userId, payload) => api.put(`/users/${userId}`, payload);

export const modifyAuthenticatedUser = payload => api.put('/users/authenticated', payload);

export const deleteUser = userId => api.delete(`/users/${userId}`);

export const createUser = payload => api.post('/users', payload);

export const fetchUser = userId => api.get(`/users/${userId}`);

export const fetchDefaultPermissions = () => api.get('/users/permissions');

export const disableUserWarehouse = ({ warehouseId, userId }, options) => api.patch(`/users/${userId}/warehouses/${warehouseId};disabled`, null, options);
export const enableUserWarehouse = ({ warehouseId, userId }, options) => api.patch(`/users/${userId}/warehouses/${warehouseId};enabled`, null, options);

export default {
  fetchDefaultPermissions,
  modifyAuthenticatedOne: modifyAuthenticatedUser,
  disableUserWarehouse,
  enableUserWarehouse,
  modifyOne: modifyUser,
  fetchMany: fetchUsers,
  deleteOne: deleteUser,
  createOne: createUser,
  fetchOne: fetchUser,
};
