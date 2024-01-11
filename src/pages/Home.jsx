import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { CryptoProvider } from "../context/CryptoContext";
import { TrendingProvider } from "../context/TrendingContext";
import { StorageProvider } from "../context/StorageContext";

function Home() {
  return (
    <CryptoProvider>
      <TrendingProvider>
        <StorageProvider>
          <main className=" font-nunito items-center first-letter:content-center relative text-white flex flex-col h-full w-full ">
            <div className="bg-gray-300 h-screen w-screen fixed -z-10" />
            <Logo />
            <Navigation />
            <Outlet />
          </main>
        </StorageProvider>
      </TrendingProvider>
    </CryptoProvider>
  );
}

export default Home;
