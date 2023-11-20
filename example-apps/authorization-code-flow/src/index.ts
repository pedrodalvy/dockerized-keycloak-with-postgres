import express, { Request, Response } from 'express';
import { URLSearchParams } from 'node:url';

const app = express();

app.get('/login', (_: Request, res: Response): void => {
  const loginParams = new URLSearchParams({
    client_id: 'xablau-client',
    redirect_uri: 'http://localhost:3001/callback',
    response_type: 'code',
    scope: 'openid',
  });

  const keycloakURL = 'http://localhost:8080/realms/xablau/protocol/openid-connect/auth';

  res.redirect(`${keycloakURL}?${loginParams.toString()}`);
});

app.get('/callback', async (req: Request, res: Response): Promise<void> => {
  const bodyParams = new URLSearchParams({
    client_id: 'xablau-client',
    redirect_uri: 'http://localhost:3001/callback',
    grant_type: 'authorization_code',
    code: req.query.code as string,
  });

  const keycloakURL = 'http://host.docker.internal:8080/realms/xablau/protocol/openid-connect/token';

  // @ts-ignore
  const keycloakResponse = await fetch(keycloakURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: bodyParams.toString(),
  });

  const result = await keycloakResponse.json();

  res.json(result);
});

app.listen(3001, (): void => {
  console.log('Listening on port 3001');
});
