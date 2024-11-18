"use server";

async function getServerEnv() {
  const branchUrl = process.env.VERCEL_BRANCH_URL;
  const vercelUrl = process.env.VERCEL_URL;
  const auth0BaseUrl = process.env.AUTH0_BASE_URL;
  return { branchUrl, vercelUrl, auth0BaseUrl };
}

export default async function Page() {
  const env = await getServerEnv();
  return (
    <div>
      <h1>Server Environment Variables</h1>
      <pre>{JSON.stringify(env, null, 2)}</pre>
    </div>
  );
}
