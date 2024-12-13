'use client'

// Page was created to show off upload image from cloudinary

import { CldImage, CldUploadWidget } from "next-cloudinary"
import { useState } from "react"


interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {

  // Id of image uploaded by user
  const [publicId, setPublicId] = useState('')

  return (
    <>

    {/* Show image that was uploaded if true */}
    {publicId && <CldImage src={publicId} width={270} height={270} alt="Puppet in a chair" />}
    
    <CldUploadWidget 
    // If successfully uploaded, grab info from pic, set id to pic id from cloudinary
    onSuccess={(result,{widget}) => {
      if(result.event !== 'success') return;
      const info = result.info as CloudinaryResult
      setPublicId(info.public_id);
    }}
    // Cloudinary key from their website
    uploadPreset="s2qtaicg">
      
      {/* Button displayed on page to upload image */}
    {({open}) => <button className="btn btn-primary" onClick={() => open()}>Upload</button>}
    </CldUploadWidget>
    
    </>
  )
}

export default UploadPage