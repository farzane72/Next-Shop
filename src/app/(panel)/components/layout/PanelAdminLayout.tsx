import Header from "./Header";
import Sidebar from "./Sidebar";
interface PanelAdminLayoutProps {
  children: React.ReactNode;
}

const PanelAdminLayout: React.FunctionComponent<PanelAdminLayoutProps> = ({
  children,
}) => {
  return (
    <div className="flex min-h-screen">
      <div className="basis-1/6 ">
        <Sidebar />
      </div>
      <div className="basis-5/6 bg-gray-200">
        <Header />
        <div className="bg-white p-4  shadow-md">menu</div>
        <div className="">{children}</div>
      </div>
    </div>
  )
};

export default PanelAdminLayout;
