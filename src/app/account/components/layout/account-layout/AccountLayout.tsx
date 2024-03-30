import Image from "next/image";

interface AccountLayoutProps {
  children: React.ReactNode;
}

const AccountLayout: React.FunctionComponent<AccountLayoutProps> = ({
  children,
}: AccountLayoutProps) => {
  return (
    <div className="flex flex-col xl:flex-row ">
      <div className="xl:basis-2/6">
        <div className="flex flex-col p-4  items-center gap-8  scroll-my-0">
          {/* <div className="flex gap-1"> */}
            <Image
              className=" mt-4  w-32 h-16 md:w-48 md:h-16 "
              src="/images/logo.svg"
              alt="tecnolife"
              width={50}
              height={50}
            />
          {/* </div> */}
          {children}
        </div>

       
      </div>
      <div className="xl:basis-4/6 hidden md:block min-h-screen">
        <Image
          className="w-full h-full "
          src="/images/login.webp"
          alt="tecnolife"
          width={2000}
          height={2000}
        />
      </div>
    </div>
  );
};

export default AccountLayout;
