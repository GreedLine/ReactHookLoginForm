export const TAKE_USER = "TAKE_USER";

export const PUT_USER = 'PUT_USER';
export function putUser(item) {
    return {
        type: PUT_USER,
        title: item
    }
}

export default {TAKE_USER, PUT_USER, putUser};
