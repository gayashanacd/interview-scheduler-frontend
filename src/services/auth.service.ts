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
    const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    if(!response.ok){
        const errorData = await response.json();
        throw new Error(errorData.message || "Authentication failed");
    }

    const data = await response.json();
    return data.data;
};