import { useSelector } from "react-redux";

import { AuthState } from "./types";

export const useAuthenticated = (): boolean =>
  useSelector(({ auth }: { auth: AuthState }) => auth.isAuthenticated);

export const useToken = (): string | undefined =>
  useSelector(({ auth }: { auth: AuthState }) => auth.token);

export const useUsername = (): string | undefined =>
  useSelector(({ auth }: { auth: AuthState }) => auth.username);
