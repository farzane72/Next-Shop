import Header from "./Header";
import Sidebar from "./Sidebar";
interface PanelAdminLayoutProps {
  children: React.ReactNode;
}

const PanelAdminLayout: React.FunctionComponent<PanelAdminLayoutProps> = ({
  children,
}) => {
  return (
    <div className="container mx-auto ">
      <div className=" md:grid md:grid-cols-12  overflow-x-hidden">
        <div className=" md:block  md:col-start-1 md:col-end-3 ">
          <Sidebar />
        </div>
        <div className="col-start-1 col-end-12 md:col-start-3 md:col-end-12">
          <Header />
          <div className="bg-white p-4  shadow-md">menu</div>
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PanelAdminLayout;
