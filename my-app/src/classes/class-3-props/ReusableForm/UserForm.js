import ReusableForm from "./ReusableForm";

const UserForm  = () => {
    const handleUserSubmit= (data)=> {
        console.log("User data: ", data)
    }
    const userFields = [
        {lable: 'Name', type: "text", name:"name", placeholder: "Enter your name"},
        {lable: 'Email', type: "email", name:"email", placeholder: "Enter your Email"},
    ];
    return (
        <div>
            <div>User Form</div>
            <ReusableForm fields={userFields} onSubmit={handleUserSubmit}/>
        </div>
    );
}

export default UserForm;