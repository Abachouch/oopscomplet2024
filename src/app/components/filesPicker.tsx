import { useState} from 'react';
import {useDropzone } from 'react-dropzone';
import FilePickerItem from './filePickerItem';

export default function FilePicker() {

    const [showSearchByImage, setShowSearchByImage] = useState(false)
    
    const [files, setFiles] = useState<Array<File & { preview: string }>>([]);
    const { getRootProps, getInputProps , open } = useDropzone({
        accept: {
            'image/*': []
        },
        noClick: true,
        onDrop: acceptedFiles => {

            setFiles([...files ,...acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }))]);

        }
    });





    return (
        <div className="search-form-card">
            <div className="search-image-wraper">
                <div className='search-image-header'>
                    <input onChange={(e) => {
                        setShowSearchByImage(e.currentTarget.checked)
                    }} className="search-imag-wraper-check" type="checkbox" name="searchbyimgae" id="searchbyImage" />
                    <label className='search-image-label' style={{ flexGrow: "1" }} htmlFor="searchbyimage">Search by image</label>
                    <span className='search-image-price'>$2.99</span>
                    <span className="search-image-info">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 15H11V9H9V15ZM10 7C10.2833 7 10.5208 6.90417 10.7125 6.7125C10.9042 6.52083 11 6.28333 11 6C11 5.71667 10.9042 5.47917 10.7125 5.2875C10.5208 5.09583 10.2833 5 10 5C9.71667 5 9.47917 5.09583 9.2875 5.2875C9.09583 5.47917 9 5.71667 9 6C9 6.28333 9.09583 6.52083 9.2875 6.7125C9.47917 6.90417 9.71667 7 10 7ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="#C4C4C4" />
                        </svg>
                    </span>
                </div>
                <div
                    {...getRootProps({ className: (showSearchByImage) ? 'search-image-content' : 'search-image-content hide' })}>
                    <div className="search-image-content-icon">

                        <input {...getInputProps()} />
                        <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3.5" y="3" width="40" height="40" rx="20" fill="#D4D4D4" />
                            <rect x="3.5" y="3" width="40" height="40" rx="20" stroke="#F2F2F2" strokeWidth="6" />
                            <g clipPath="url(#clip0_347_1027)">
                                <path d="M26.8335 26.3332L23.5002 22.9999M23.5002 22.9999L20.1669 26.3332M23.5002 22.9999V30.4999M30.4919 28.3249C31.3047 27.8818 31.9467 27.1806 32.3168 26.3321C32.6868 25.4835 32.7637 24.5359 32.5354 23.6388C32.307 22.7417 31.7865 21.9462 31.0558 21.3778C30.3251 20.8094 29.4259 20.5005 28.5002 20.4999H27.4502C27.198 19.5243 26.7278 18.6185 26.0752 17.8507C25.4225 17.0829 24.6042 16.4731 23.682 16.0671C22.7597 15.661 21.7573 15.4694 20.7503 15.5065C19.7433 15.5436 18.7578 15.8085 17.8679 16.2813C16.9779 16.7541 16.2068 17.4225 15.6124 18.2362C15.018 19.05 14.6158 19.9879 14.436 20.9794C14.2563 21.9709 14.3036 22.9903 14.5746 23.961C14.8455 24.9316 15.3329 25.8281 16.0002 26.5832" stroke="#121212" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_347_1027">
                                    <rect width="20" height="20" fill="white" transform="translate(13.5 13)" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>

                    <div className='search-image-content-heading'>

                        <button onClick={()=> {
                            open()
                        }} type='button'  className="search-image-content-heading-btn">Click to upload</button>
                        <div className="search-image-content-heading-text">or drag and drop</div>
                    </div>

                    <p className="search-image-content-text">(for better result add multiple images with no filter or blurred effect,  or with sunglasses )</p>
                </div>
                {/* list of progress */}
                {files.length > 0 && (
                        <div className='search-files-list'>
                            {files.map((file , index) => (
                                <FilePickerItem key={index} fileName={file.name} 
                                remouveFile={(() => {
                                    setFiles(files.filter(f => f.name !== file.name))
                                })} fileSize={file.size} filePreview={file.preview}    />
                            ))}

                        </div>
                    )}
            </div>
        </div>
    )
}