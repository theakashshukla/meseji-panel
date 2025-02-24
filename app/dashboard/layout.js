import { WebSocketProvider } from "../context/WebSocketContext";
import StoreProvider from "../StoreProvider";

export default async function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="flex-1">
          <StoreProvider>
            <WebSocketProvider>{children}</WebSocketProvider>{" "}
          </StoreProvider>
        </main>
      </body>
    </html>
  );
}
