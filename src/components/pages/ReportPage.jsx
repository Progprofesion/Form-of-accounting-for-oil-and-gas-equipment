import Form from "../form/Form";
import "./reportPage.scss";

const ReportPage = () => {
  return (
    <section className="reportPage">
      <div className="container">
        <Form boolean={false} countView={Infinity} slice={1} />
      </div>
    </section>
  );
};

export default ReportPage;
