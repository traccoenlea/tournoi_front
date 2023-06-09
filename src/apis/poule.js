const API_POULE = "/api/poule";

export async function addPoule(number, id_tour) {
  const values = [{ number: number, id_tour: id_tour }];
  const response = await fetch(`${API_POULE}/addPoule`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  const backResponse = await response.json();
  return backResponse;
}

export async function getPoules(id_tour) {
  const response = await fetch(`${API_POULE}/getPoules?id=${id_tour}`);
  return response.json();
}
