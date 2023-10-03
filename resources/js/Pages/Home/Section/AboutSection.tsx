export default function AboutSection() {
    return (
        <div
            className='grid grid-cols-1 md:grid-cols-2 justify-center items-center bg-[#F6F6F6] my-[2rem] p-boxS md:p-boxMd rounded-[0.75rem] gap-[1rem] md:gap-[2rem]'
        >
            <div
                className='text-[1.5rem] md:text-[3rem] font-bold text-left text-gray-800'
            >
                Lorem ipsum dolor sit amet.
            </div>
            <div
                className='text-[1rem] md:text-[1.75rem] font-[500] text-left text-[#9D9D9D]'
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </div>
        </div>
    )
}