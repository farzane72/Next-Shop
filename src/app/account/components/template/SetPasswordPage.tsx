import FormikContainerPassword from "../form/FormikContainerPassword";

interface SetPasswordPageProps {}

const SetPasswordPage: React.FunctionComponent<SetPasswordPageProps> = () => {
  return (
    <>
      <span className="">انتخاب رمز</span>
      <div className="w-full md:w-[500px] 2xl:w-full">
        <FormikContainerPassword />
      </div>
    </>
  );
};

export default SetPasswordPage;
