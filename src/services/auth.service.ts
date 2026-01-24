import api from "./api";

type LoginPayload = {
    email: string;
    password: string;    
};

type LoginResponse = {
    token: string;
    user: {
        id: string;
        email: string
    }
};

export const login = async (
    payload: LoginPayload
): Promise<LoginResponse> => {
    const response = await api.post("/auth/login", payload);
    return response.data.data;
};