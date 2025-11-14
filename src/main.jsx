// import Negatives from '@/pages/messages-notes/Negatives.jsx'
// import Positives from '@/pages/messages-notes/Positives.jsx'
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
// import Beta from "@/pages/Beta.jsx";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { Suspense } from "react";
import { createRoot } from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import NotFound404 from "./pages/NotFound404.jsx";
import { routeTree } from "./routeTree.gen.js";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultStaleTime: 5000,
  // defaultErrorComponent:AppErrorComponent,
  scrollRestoration: true,
  defaultNotFoundComponent: () => {
    return <NotFound404 />;
  },
});
const queryClient = new QueryClient()
createRoot(document.getElementById("root")).render(
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {/* <ProtectedLayout> */}
        <QueryClientProvider client={queryClient}>

          <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
        {/* </ProtectedLayout> */}
        {/* <TanStackRouterDevtools router={router} /> */}
        <Toaster  position="bottom-center" />
      </ThemeProvider>
    </Suspense>
);
  
