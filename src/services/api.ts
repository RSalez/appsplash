// api.ts
export async function getActivity() {
  try {
    const response = await fetch('https://ipinfo.io/161.185.160.93/geo');
    if (!response.ok) {
      throw new Error('Erro na requisição: ' + response.status);
    }
    const data = await response.json();
    return data; // objeto com a atividade
  } catch (error) {
    console.error('Erro ao buscar atividade:', error);
    throw error;
  }
}
