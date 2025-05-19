// src/services/api.js


// Base URL comes from your environment or defaults to root
export const API_BASE = process.env.REACT_APP_API_BASE || '/v1/';


// Health check
export async function fetchHealth() {
  const res = await fetch(`${API_BASE}health`);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// Import Excel
export async function runImport() {
  const res = await fetch(`${API_BASE}import/import-excel`, {
    method: 'POST'
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// Run Access Export
export async function runAccess() {
  const res = await fetch(`${API_BASE}access/run-access`, {
    method: 'POST'
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function bioCertificate() {
  const res = await fetch(`${API_BASE}biocertificate/scraper`, {
    method: 'POST'
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
