
import { saveAs }  from "file-saver"
import "../styles/Download.css"

const DownloadCv = () => {
    const handleDownload = () => {
        const fileUrl = process.env.PUBLIC_URL + "Dave_Burt_Resume.pdf";
        saveAs(fileUrl, "Dave_Burt_Resume.pdf")

    };
    return (
        <div className="parent-cv" >
           <button type="bottom" onClick={handleDownload}>Download my CV</button>
        </div>
    );
};

export default DownloadCv;