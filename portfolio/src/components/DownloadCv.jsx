// will need to npm install file-saver
import { saveAs }  from 'file-saver'
import '../styles/Download.css'

//need to style buttn

const DownloadCv = () => {
    const handleDownload = () => {
        const fileUrl = 'Dave_Burt_Resume.pdf';
        saveAs(fileUrl, 'Dave_Burt_Resume.pdf')

    };
    return (
        <div className="parent-cv" >
           <button type="buttom" onClick={handleDownload}>Download my CV</button>
        </div>
    );
};

export default DownloadCv;