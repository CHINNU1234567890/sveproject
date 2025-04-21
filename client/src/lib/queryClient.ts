import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  try {
    // Ensure relative URLs work in production by using window.location.origin
    const fullUrl = url.startsWith('/') && !url.startsWith('//') 
      ? `${window.location.origin}${url}`
      : url;
    
    console.log(`Making API request to: ${fullUrl}`);
    
    // Add more detailed request debugging
    const options: RequestInit = {
      method,
      headers: data ? { "Content-Type": "application/json" } : undefined,
      body: data ? JSON.stringify(data) : undefined,
      credentials: "include",
      mode: "cors"
    };
    
    console.log("Request options:", JSON.stringify(options));
    
    const res = await fetch(fullUrl, options);
    console.log(`Response status: ${res.status}`);
    
    // Try to log response headers for debugging
    try {
      const headers: Record<string, string> = {};
      res.headers.forEach((value, key) => {
        headers[key] = value;
      });
      console.log("Response headers:", headers);
    } catch (headerError) {
      console.error("Error logging headers:", headerError);
    }
    
    await throwIfResNotOk(res);
    return res;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    try {
      const url = queryKey[0] as string;
      
      // Ensure relative URLs work in production by using window.location.origin
      const fullUrl = url.startsWith('/') && !url.startsWith('//') 
        ? `${window.location.origin}${url}`
        : url;
      
      console.log(`Making query to: ${fullUrl}`);
      
      const res = await fetch(fullUrl, {
        credentials: "include",
        mode: "cors" as RequestMode
      });
      
      console.log(`Query response status: ${res.status}`);

      if (unauthorizedBehavior === "returnNull" && res.status === 401) {
        return null;
      }

      await throwIfResNotOk(res);
      return await res.json();
    } catch (error) {
      console.error("Query function failed:", error);
      throw error;
    }
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
