import ReusableForm from "./ReusableForm";

const ProductForm  = () => {
    const prodFields = [
        {lable: 'Product Name', type: "text", name:"productname", placeholder: "Enter product name"},
        {lable: 'Price', type: "number", name:"price", placeholder: "Enter product price"},
    ];
    const handleUserSubmit= (data)=> {
        console.log("User data: ", data)
    }
    return (
        <div>
            <div>Product Form</div>
            <ReusableForm fields={prodFields} onSubmit={handleUserSubmit}/>   
        </div>
    );
}

export default ProductForm;