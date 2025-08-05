const CardCompenent = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center gap-6 p-8 ">
      <div className="flex items-start gap-6  p-6 rounded-lg w-full max-w-4xl bg-gray-100">
        <svg className="text-orange-500 text-[70px] pt-20 ">{icon}</svg>
        <div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>

          <p className="mt-8">{description}</p>
        </div>
      </div>
      {/* Section 2 */}
      {/* <div className="flex items-start gap-6 bg-gray-100 p-6 rounded-lg w-full max-w-4xl">
        <FaGlobeAfrica className="text-orange-500 text-[100px]" />
        <div>
          <h2 className="text-2xl font-bold mb-2">Our Values</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div> */}

      {/* Section 3 */}
      {/* <div className="flex items-start gap-6 p-6 rounded-lg w-full max-w-4xl">
        <FaUniversity className="text-orange-500 text-[100px]" />
        <div>
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default CardCompenent;
