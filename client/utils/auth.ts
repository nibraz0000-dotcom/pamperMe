export interface UserSession {
  name: string;
  email: string;
  role?: string;
  avatarText: string;
  provider?: string;
}

export const AUTH_STORAGE_KEY = 'pamperme_auth_session';
export const AUTH_EVENT_NAME = 'pamperme_auth_changed';

export function getStoredUser(): UserSession | null {
  if (typeof window === 'undefined') return null;
  try {
    const data = localStorage.getItem(AUTH_STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function loginUser(user: UserSession = {
  name: 'Alex Rivera',
  email: 'alex.rivera@gmail.com',
  role: 'Business Owner',
  avatarText: 'AR'
}) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    window.dispatchEvent(new Event(AUTH_EVENT_NAME));
  } catch {}
}

export function logoutUser() {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    window.dispatchEvent(new Event(AUTH_EVENT_NAME));
  } catch {}
}
