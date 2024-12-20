import InfoCardItem from "./InfoCardItem";

const InfoCard = () => {
    return(
        <div className="flex flex-col w-full rounded-t-md h-max px-3 py-5 flex justify-between gap-6">
            <h2 className="font-bladeRounded font-bold text-peachyblue text-2xl uppercase">Information</h2>

            <InfoCardItem text="https://peachlabs.io" link="https://peachlabs.io" icon="globe" />

            <InfoCardItem text="peachlabs.io" link="https://www.instagram.com/peachlabs.io" icon="instagram" />

            <InfoCardItem text="@ThePeachLabs" link="https://x.com/ThePeachLabs" icon="twitter" />
        </div>
    );
};

export default InfoCard;