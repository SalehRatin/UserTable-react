import { getAxiosInstance } from "./http";

class UserService {
  static getUserList() {
    return getAxiosInstance().get("/todos");
  }

  static getUserById(id) {
    return getAxiosInstance().get(`/todos/${id}`);
  }

  static editUser(id, userData) {
    return getAxiosInstance().put(`/todos/${id}`, userData);
  }
}

export default UserService;
