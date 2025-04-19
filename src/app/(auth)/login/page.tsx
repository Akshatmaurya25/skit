import { getProviders, signIn } from "next-auth/react";

export default async function LoginPage() {
  const providers = await getProviders();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Sign in to Skit</h1>
      {providers &&
        Object.values(providers).map((provider) => (
          <button
            key={provider.name}
            onClick={() => signIn(provider.id)}
            className="bg-gradient-to-r from-gradientStart to-gradientEnd text-white px-4 py-2 rounded-lg"
          >
            Sign in with {provider.name}
          </button>
        ))}
    </div>
  );
}
