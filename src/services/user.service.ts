import { ChatUser } from '../dto/chatuser';
import { Login } from '../dto/login';
// import authHeader from './auth-header';
import { endPoints } from './endpoints';

class UserService {

    async userValidation(user: Login) {
        const response = await fetch(endPoints.baseUrl + endPoints.validate, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({Username : user.Username, DeviceId: user.DeviceId})
        });
        return await response.text();
    }

    async userVerify(user: Login) {
        const response = await fetch(endPoints.baseUrl + endPoints.verify, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({Username : user.Username, DeviceId: user.DeviceId, Code: user.Code})
        });
        const resp = await response.json();  
        console.log(resp);
        return resp;
    }

    async userRegister(user: ChatUser) {
        const response = await fetch(endPoints.baseUrl + endPoints.register, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({FirstName : user.FirstName, DeviceId: user.DeviceId, Email: user.Email.trim(), LastName: user.LastName, DisplayName: user.FirstName + " " + user.LastName, PhoneNumber: user.PhoneNumber.trim()})
        });
        return await response.json();
    }

    async userAutoLogin(user: Login) {
        const response = await fetch(endPoints.baseUrl + endPoints.autologin, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({Username : user.Username, DeviceId: user.DeviceId})
        });
        return await response.text();
    }
}

export default new UserService();
