interface CardProps {
    image: string;
    heading: string;
    paragraph: string;
}

export default function Card({ image, heading, paragraph }: CardProps) {
    return (
        <div className="w-full max-w-[359px] md:max-w-[229px]   bg-white rounded-[8px] px-6 py-8 flex flex-col items-center text-center ">

            <div className="mb-4 flex items-center justify-center">
                <img className="h-14 w-14 object-contain" src={image} alt={heading} />
            </div>

            <div className="flex flex-col items-center gap-2">
                <h2 className="text-[28px] font-bold leading-[36px] text-[#4D4D4D] tracking-tight">
                    {heading}
                </h2>
                <p className="text-[14px] font-normal leading-[20px] text-[#717171] max-w-[251px]">
                    {paragraph}
                </p>
            </div>

        </div>
    );
}
