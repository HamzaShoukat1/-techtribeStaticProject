interface CardProps {
    image: string;
    heading: string;
    paragraph: string;
}

export default function Card({ image, heading, paragraph }: CardProps) {
    return (
        <div className="w-full max-w-[299px] border border-gray-100 gap-[8px] bg-white rounded-[8px] py-6 px-8  text-center shadow-sm">

            <div className="mb-4 flex flex-col items-center justify-center  w-full max-w-[267px] p-6 gap-4 ">
                <img
                    className="w-16 h-16 object-contain"
                    src={image}
                    alt={heading}
                />
                <h2 className="text-[24px] md:text-[28px] font-bold leading-[32px] md:leading-[36px] text-[#4D4D4D] tracking-normal">
                    {heading}
                </h2>
            </div>

            {/* Description Text */}
            <div className="w-full max-w-[251px] gap-[8px]">
                <p className="text-[14px] font-normal   text-center leading-[20px] tracking-normal text-[#717171]">
                    {paragraph}
                </p>

            </div>


        </div>
    );
}
