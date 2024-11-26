
import { userDTO } from './auth.models';



import axios from 'axios';
import Swal from 'sweetalert2';
import IndexEntity from '../util/IndexEntity';
import { Button } from 'react-bootstrap';
import customConfirm from '../util/customConfirm';
import { ApiEndpoints } from '../util/endpoints';

export default function IndexUsers() {

    async function makeAdmin(id: string) {
        await doAdmin(`${ApiEndpoints.account}/makeAdmin`, id);
    }

    async function removeAdmin(id: string) {
        await doAdmin(`${ApiEndpoints.account}/removeAdmin`, id);
    }

    async function doAdmin(url: string, id: string){
        await axios.post(url, JSON.stringify(id), {
            headers: {'Content-Type': 'application/json'}
        });

        Swal.fire({
            title: 'Success',
            text: 'Operation finished correctly',
            icon: 'success'
        });
    }

    return (
        <IndexEntity<userDTO>
            title="Users" url={`${ApiEndpoints.account}/listUsers`}
        >
            {users => <>
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map(user => <tr key={user.id}>
                        <td>
                            <Button
                                onClick={() => customConfirm(() => makeAdmin(user.id),
                                    `Do you wish to make ${user.email} an admin?`, 'Do it')}
                            >Make Admin</Button>

                            <Button
                            className="btn btn-danger ms-2"
                                onClick={() => customConfirm(() => removeAdmin(user.id),
                                    `Do you wish to remove ${user.email} as an admin?`, 
                                    'Do it')}
                            >Remove Admin</Button>
                        </td>
                        <td>
                            {user.email}
                        </td>
                    </tr>)}
                </tbody>
            </>}
        </IndexEntity>
    )
}