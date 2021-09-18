import { useState } from "react";

const BookImage = () => {

    const [fileUrl, setFileUrl] = useState(null);

    function handleFileChange(event){
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setFileUrl(imageUrl)
     }

return (
    <div className="BookImage">
    
    <div className="imageBox">
    <div>
    <img className="image" src={fileUrl} alt=""/>
    </div>
    <input className="itemFile" type="file" id="file" onChange={handleFileChange} />
    </div>
    </div>
);
};
export default BookImage;