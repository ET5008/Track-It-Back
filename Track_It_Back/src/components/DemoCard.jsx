export default function DemoCard() {
  return (
    <div className="mt-24 pb-24 flex justify-center">
      <div className="flex justify-around self-center text-left w-[50vw] items-center bg-white p-8 rounded-xl">
        <div className="mr-12">
          <h2 className="text-3xl">Demo</h2>
          <p className="text-lg mt-2">
            Calculate your score in 10 minutes and get crucial information on
            your dopamine diet and its side effects which could be inhibiting
            you.
          </p>
          <button className="bg-white border-[1px] rounded-md border-black p-2 mt-10">
            Try Demo
          </button>
        </div>
        <img className="w-85 rounded-md" src="https://hofcollection.com/cdn/shop/files/2020_Lewis_Hamilton_Bahrain_GP_1_5_Bell_Ltd_Edition_Replica_Mercedes_Helmet_sd_0007_Hue_Saturation_2.jpg?v=1721332460&width=2016" alt="" />
      </div>
    </div>
  );
}
