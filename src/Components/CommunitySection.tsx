import React from 'react';
import Icon1 from "../assets/Images/Icon(1).png";
import Icon2 from "../assets/Images/Icon(2).png";
import Icon3 from "../assets/Images/Icon(3).png";
import Card from "../Components/Card";

const boxData = [
    {
        id: 1,
        image: Icon1,
        heading: "Membership Organisations",
        paragraph: "Our membership management software provides full automation of membership renewals and payments"
    },
    {
        id: 2,
        image: Icon2,
        heading: "National Associations",
        paragraph: "Our membership management software provides full automation of membership renewals and payments"
    },
    {
        id: 3,
        image: Icon3,
        heading: "Clubs And Groups",
        paragraph: "Our membership management software provides full automation of membership renewals and payments"
    }
];

export default function CommunitySection() {
    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 py-12 md:px-[144px]  items-center flex flex-col items-center bg-[#FFF]">
            
            {/* Header Text Section */}
            <div className="text-center max-w-[545px] mb-10 flex flex-col gap-2">
                <h1 className="text-[36px] font-semibold leading-[44px] text-[#4D4D4D]">
                    Manage your entire community in a single system
                </h1>
                <p className="text-[16px] font-normal leading-[24px] text-[#717171]">
                    Who is Nextcent suitable for?
                </p>
            </div>

            {/* Cards Row Layout Grid */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2  md:gap-4 flex-wrap  ">
                {boxData.map((item) => (
                    <Card
                        key={item.id}
                        image={item.image}
                        heading={item.heading}
                        paragraph={item.paragraph}
                    />
                ))}
            </div>

        </section>
    );
}
