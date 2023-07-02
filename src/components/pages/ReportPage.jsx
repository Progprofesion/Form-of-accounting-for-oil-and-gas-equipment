import Report from "../report/Report";
import { useGetDbQuery } from "../api/apiSlice";
import Form from "../form/Form";
import "./reportPage.scss";

const ReportPage = () => {
  const { data: dataReport, isLoading, isError } = useGetDbQuery(null);
  // console.log(dataReport.db.length);
  return (
    <section className="reportPage">
      <div className="container">
        {dataReport ? (
          <Form boolean={false} countView={dataReport.db.length} slice={1} />
        ) : null}
      </div>
    </section>
  );
};

export default ReportPage;
