'use client'
import { useSession, signIn, signOut } from "next-auth/react";

export default function ButtonSign() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p className="text-gray-500">Cargando...</p>;
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      {session ? (
        <>
          <p className="text-xl text-gray-700">
            Bienvenido, {session.user.name}
          </p>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            onClick={() => signOut({ callbackUrl: `/login` })}
          >
            Cerrar sesión
          </button>
        </>
      ) : (
        <button
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          onClick={() => signIn({ callbackUrl: `/search` })}
        >
          Iniciar sesión
        </button>
      )}
    </div>
  );
}
