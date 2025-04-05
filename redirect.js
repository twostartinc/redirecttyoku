export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/discord") {
      return Response.redirect("https://discord.gg/D7S54ysB4N", 302);
    }
    return new Response("Not Found", { status: 404 });
  },
};
