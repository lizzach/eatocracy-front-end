import React, {useState} from "react";
import "../styles/ImgUpload.css";
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

const ImgUpload = ({ image, setImage, fileName, setFileName, setFormData, formData }) => {
    // const [image, setImage] = useState(null);
    // const [fileName, setFileName] = useState("No selected file");

    return (
        <main>
            <form action=""
            onClick={() => document.querySelector(".input-field").click()}
            className="img-upload-form">
                <input type="file" accept="image/*" className="input-field" hidden
                onChange={({target: {files}}) => {
                    files[0] && setFileName(files[0].name)
                    if (files) {
                        setImage(URL.createObjectURL(files[0]))
                        setFormData((prev) => ({
                            ...prev, photo: image
                        }));
                        console.log(formData)
                    }
                }}></input>
                {image ?
                <img src={image} width={300} height={300} alt={fileName}/>
                :
                <>
                <MdCloudUpload color='#1475' size={60}/>
                <p>Browse Files to upload</p>
                </>
                }
            </form>

            <section className="uploaded-row">
                <AiFillFileImage color='#1475cf'/>
                <span className="upload-content">
                    {fileName}
                    <MdDelete 
                    onClick={() => {
                        setFileName("No selected file")
                        setImage(null)
                    }}/>
                </span>
            </section>
        </main>
    )
}

export default ImgUpload;