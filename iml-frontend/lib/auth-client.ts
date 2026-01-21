import { createAuthClient } from "better-auth/react";
import { useRouter } from "next/navigation";

export const { signUp, signIn, signOut, useSession } = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
});

// Hook to check if user is authenticated
export const useAuth = () => {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  return {
    session,
    user: session?.user || null,
    isLoading: isPending,
    isAuthenticated: !!session?.user,
    logout: async () => {
      await signOut();
      router.push("/auth");
    },
  };
};
