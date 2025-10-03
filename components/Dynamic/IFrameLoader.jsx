
'use client';

const IFrameLoader = ({src,title}) => {
  

   
  return (
    <div className='h-full w-full  relative rounded-2xl overflow-hidden'>
        <iframe 
        className='h-full w-full aspect-video'
        src={src}
        title={title}
        />
    </div>
  )
}

export default IFrameLoader 