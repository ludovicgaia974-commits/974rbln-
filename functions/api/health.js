export async function onRequest() {
  return new Response(
    JSON.stringify({
      status: "ok",
      brand: "974RBLN",
      message: "Passerelle prête pour la configuration"
    }),
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    }
  );
}
