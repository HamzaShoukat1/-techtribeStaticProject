import cleint from "../assets/Logo.png";
import client1 from "../assets/Images/Logo(1).png";
import client2 from "../assets/Images/Logo(2).png";
import client3 from "../assets/Images/Logo(3).png";
import client4 from "../assets/Images/Logo(4).png";
import client5 from "../assets/Images/Logo(5).png";
import client6 from "../assets/Images/Logo(6).png";

export {
  cleint,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
};

export default function OurClient() {
  const clients = [
    cleint,
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
  ];

  return (
    <section className="w-full bg-white">
      <div
        className="
          w-full
          max-w-[1440px]
          mx-auto
          px-[144px]
          flex
          flex-col
          items-center
          gap-[20px]
        "
      >
        {/* Heading + description */}
        <div className="w-full flex flex-col items-center gap-[8px]">
          <h2
            className="
              text-[#4D4D4D]
              text-[36px]
              leading-[44px]
              font-semibold
              text-center
            "
          >
            Our Clients
          </h2>

          <p
            className="
              text-[#717171]
              text-[16px]
              leading-[24px]
              font-normal
              text-center
            "
          >
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        {/* Client logos */}
        <div className="w-full  flex items-center justify-between">
          {clients.map((client, index) => (
            <img
              key={index}
              src={client}
              alt={`Client ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}