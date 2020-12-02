interface TokenResponse {
  token: string;
}

export interface Credentials {
  username: string;
  password: string;
}

const BASE_URL = "http://localhost:8000";

export const getToken = async ({ username, password }: Credentials) => {
  const body = new FormData();
  body.set("username", username);
  body.set("password", password);

  const res = await fetch(`${BASE_URL}/token/`, { body, method: "post" });

  if (res.status === 200) {
    const data: TokenResponse = await res.json();
    return data.token;
  } else throw new Error("Invalid credentials.");
};
