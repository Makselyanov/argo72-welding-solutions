// C:\argo72\src\components\Layout.tsx
import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* сюда потом вернёшь хедер/футер/меню */}
      <Outlet />
    </div>
  );
}