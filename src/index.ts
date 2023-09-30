import { Hono } from 'hono'
import { ExecutionContext } from 'hono/dist/types/context';
export interface Env {
    API_HOST: string;
}
const app = new Hono()

app.get('/', (c) => {


    return c.json({
        name: "hello",
        env: c.env
    });
})

export default app
