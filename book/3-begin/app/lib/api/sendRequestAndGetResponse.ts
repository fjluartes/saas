import 'isomorphic-unfetch';

export default async function sendRequestAndGetResponse(path, opts: any = {}) {
  const headers =  Object.assign(
    {},
    opts.headers || {},
    {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  );

  const { request } = opts;
  if (request && request.headers && request.headers.cookie) {
    headers.cookie = request.headers.cookie;
  }

  const qs = opts.qs || '';

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL_APP}${path}${qs}`,
    Object.assign({ method: 'POST', credentials: 'include' }, opts, { headers }),
  );

  const text = await response.text();

  try {
    const data = JSON.parse(text);

    return data;
  } catch (err) {
    if (err instanceof SyntaxError) {
      return text;
    }

    throw err;
  }
}