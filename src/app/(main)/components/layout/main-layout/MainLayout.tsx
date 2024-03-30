import Header from "./Header";
import Footer from "./Footer";
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FunctionComponent<MainLayoutProps> = ({
  children,
}: MainLayoutProps) => {
  return (
    <>
      <Header />
      <div className="min-h-screen">{children}</div>

      <Footer />
    </>
  );
};

export default MainLayout;
