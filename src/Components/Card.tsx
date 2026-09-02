interface CardProps {
  image: string;
  heading: string;
  paragraph: string;
  paragraphWidth?: string;
}

export default function Card({
  image,
  heading,
  paragraph,
  paragraphWidth = "235px",
}: CardProps) {
  return (
    <div
      className="
        w-[299px]
        min-w-[299px]
        h-auto
        border border-gray-50
        bg-white
        rounded-[8px]
        flex flex-col
        items-center
        py-4
        px-8
        text-center
        shadow-xs
      "
    >
      {/* Icon + Heading */}
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <img
          className="w-16 h-16 object-contain"
          src={image}
          alt={heading}
        />

        <h2
          className="
            text-[24px]
            md:text-[28px]
            font-bold
            leading-[32px]
            md:leading-[36px]
            text-[#4D4D4D]
            tracking-normal
          "
        >
          {heading}
        </h2>
      </div>

      {/* Description */}
      <div
        className="mt-2"
        style={{ width: paragraphWidth }}
      >
        <p
          className="
            text-[14px]
            font-normal
            font-inter
            text-center
            leading-[20px]
            tracking-normal
            text-[#717171]
          "
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
}