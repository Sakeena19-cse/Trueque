export const API_URL = "http://127.0.0.1:8000/api";

export function saveTokens({ access, refresh }) {
  localStorage.setItem("access", access);
  localStorage.setItem("refresh", refresh);
}

export function clearTokens() {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
}

export function isLoggedIn() {
  return !!localStorage.getItem("access");
}

async function refreshAccessToken() {
  const refresh = localStorage.getItem("refresh");
  if (!refresh) return false;

  const res = await fetch(`${API_URL}/auth/token/refresh/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh }),
  });

  if (!res.ok) {
    clearTokens();
    return false;
  }

  const data = await res.json();
  localStorage.setItem("access", data.access);
  if (data.refresh) localStorage.setItem("refresh", data.refresh);
  return true;
}

export async function apiFetch(path, options = {}) {
  const send = () => {
    const token = localStorage.getItem("access");
    return fetch(`${API_URL}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
  };

  let res = await send();
  if (res.status === 401 && (await refreshAccessToken())) {
    res = await send();
  }
  return res;
}