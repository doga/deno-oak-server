
import { Context} from '@oak/oak/context';
import { Router} from '@oak/oak/router';
import { Application} from '@oak/oak/application';

const 
port = parseInt(Deno.env.get('PORT') || '8080'),

router     = new Router()
.get("/", (ctx: Context) => {
  ctx.response.body = 
  `<!DOCTYPE html>
    <html>
      <head><title>Deno + Oak server application</title><head>
      <body>
        <h1>Deno + Oak server application</h1>
      </body>
    </html>`;
});

console.info(`Listening on http://localhost:${port}`);

new Application()
.use(router.routes())
.use(router.allowedMethods())
.listen({ port });
