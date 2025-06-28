import { jwtDecode } from "jwt-decode";

interface MyTokenPayload {
    id: string;
    email: string;
    username: string;
    iat: number;
    exp: number;
}

function setAccessToken(accessToken: string) {
    localStorage.setItem('accessToken', accessToken)
}

function removeAccessToken() {
    localStorage.removeItem('accessToken')
}

function decodeToken(accessToken: string | null): MyTokenPayload | null {
    if (!accessToken) return null

    const decoded = jwtDecode(accessToken)

    try {
        const decoded = jwtDecode<MyTokenPayload>(accessToken);
        return decoded
    } catch (error) {
        console.log(error)
        return null;
    }
}

export { setAccessToken, removeAccessToken, decodeToken }