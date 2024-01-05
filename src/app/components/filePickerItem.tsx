import { useEffect, useState } from "react"

export default function FilePickerItem({ fileName, filePreview, fileSize , remouveFile }: { fileName: string, filePreview: string, fileSize: number , remouveFile : ()=> void }) {

    const [progress, setProgress] = useState(0);

    function cutFileName(fileName:string, maxLength = 15) {
      // Check if the file name is longer than the maxLength
      if (fileName.length <= maxLength) {
        return fileName; // Return the original file name if it's not too long
      }
    
      // Extract the file extension
      const fileExtension = fileName.split('.').pop();
      if(fileExtension)
{
      // Calculate the length of the truncated file name (excluding extension)
      const truncatedLength = maxLength - fileExtension.length - 5; // 5 accounts for ' ... .'
      // Truncate the file name and add ' ... .' before the extension
      const truncatedName = `${fileName.slice(0, truncatedLength)} ... .${fileExtension}`;
      return truncatedName;}
      return '' ;
    }

    useEffect(() => {
        const interval = setInterval(() => {
          if (progress < 100) {
            setProgress((prevProgress) => prevProgress + 1);
          } else {
            clearInterval(interval);
          }
        }, 50);
    
        return () => clearInterval(interval); // Cleanup the interval on component unmount
      }, [progress]);


      function formatBytes(bytes:number, decimals = 2) {
        if (bytes === 0) return '0 Bytes';
      
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
      
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      
        const i = Math.floor(Math.log(bytes) / Math.log(k));
      
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
      }

    return (

        <div className='search-file-item' key={fileName}>
            <button onClick={()=> {
                remouveFile()
            }} type="button" className="search-file-remouve">

            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 13.0001H12.1667M12.1667 13.0001H25.5M12.1667 13.0001V24.6667C12.1667 25.1088 12.3423 25.5327 12.6548 25.8453C12.9674 26.1578 13.3913 26.3334 13.8333 26.3334H22.1667C22.6087 26.3334 23.0326 26.1578 23.3452 25.8453C23.6577 25.5327 23.8333 25.1088 23.8333 24.6667V13.0001H12.1667ZM14.6667 13.0001V11.3334C14.6667 10.8914 14.8423 10.4675 15.1548 10.1549C15.4674 9.84234 15.8913 9.66675 16.3333 9.66675H19.6667C20.1087 9.66675 20.5326 9.84234 20.8452 10.1549C21.1577 10.4675 21.3333 10.8914 21.3333 11.3334V13.0001M16.3333 17.1667V22.1667M19.6667 17.1667V22.1667" stroke="#344054" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
</svg>



            </button>
            <div className='search-file-item-header'>
                <img className='search-file-image'
                    src={filePreview}
                    alt={fileName}
                    style={{ maxWidth: '50px', maxHeight: '50px', marginRight: '10px' }}
                />
                <div>
                    <div className="search-file-name"> {cutFileName(fileName , 15)}</div>
                    <div className="search-file-size"> {formatBytes(fileSize)}</div>
                </div>
            </div>

            <div className="seach-file-progress">
                <div className="seach-file-progressbar">
                    <div style={{width : progress+'%'}} className="seach-file-progressbar-track"></div>
                </div>
                <span className="search-file-progress-percentage">{progress} %</span>
            </div>
        </div>
    )
}