"use client";

export function AppSidebar() {
  return (
    <aside className="w-64 h-screen border-r p-4">
      <h2 className="text-xl font-bold mb-4">My Sidebar</h2>

      <nav className="space-y-2">
        <a href="#" className="block">🏠 Dashboard</a>
        <a href="#" className="block">📦 Products</a>
        <a href="#" className="block">🛒 Orders</a>
        <a href="#" className="block">⚙️ Settings</a>
      </nav>
    </aside>
  );
}