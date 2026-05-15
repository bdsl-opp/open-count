export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let path = url.pathname;
    if (path === "/" || path === "") {
      path = "/coming-soon.html";
    }
    try {
      return await env.ASSETS.fetch(new Request(new URL(path, request.url)));
    } catch (e) {
      return new Response("Not Found: " + path, { status: 404 });
    }
  }
};
