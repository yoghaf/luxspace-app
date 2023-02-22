const apiHost = process.env.REACT_APP_API_HOST;

export default function fetchData({ url, method = "GET", host = apiHost }) {
  return fetch(`${host}${url}`, {
    method,
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  }).then(async (response) => {
    const jsonResponse = await response.json();
    if (response.ok) return jsonResponse;
    throw new Error(JSON.stringify(jsonResponse));
  });
}
