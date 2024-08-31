import ReusableForm from "./ReusableForm";

const FeedbackForm = () => {
  const fbFields = [
    {
      lable: "Rating",
      type: "number",
      name: "rating",
      placeholder: "Rate us 1-5",
    },
    {
      lable: "Comments",
      type: "text",
      name: "comments",
      placeholder: "Enter your comments",
    },
  ];
  const handleUserSubmit= (data)=> {
    console.log("User data: ", data)
}
  return (
    <div>
      <div>Feedback Form</div>
      <ReusableForm fields={fbFields} onSubmit={handleUserSubmit}/>
    </div>
  );
};

export default FeedbackForm;
