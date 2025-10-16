export const MailAppPhone = () => {
  return (
    <div className="w-full h-[280] relative bg-[#4338CA]">
      <div className="w-full h-full absolute top-0 left-0">
        <div className="flex pt-[40px] justify-around">
          <div className="flex justify-center  flex-col">
            <div className="flex items-center gap-2">
              <img src="png2.png" className="w-[20] h-[20] text-white " />
              <h1 className="font-bold text-base text-white">Movie Z</h1>
            </div>
            <p className="text-white"> © 2024 Movie Z. All Rights Reserved.</p>
          </div>
          <div>
            <div>
              <p className="text-white">Contact Information</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="mail.png" className="w-[20] h-[20]" />
              <div>
                <p className="text-white">Email:</p>
                <p className="text-white">support@movieZ.com</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src="call.png" className="w-[20] h-[20]" />
              <div>
                <p className="text-white">Phone:</p>
                <p className="text-white">+976 (11) 123-4567</p>
              </div>
            </div>
          </div>
          <div>
            <button className="cursor-pointer text-white">Follow us </button>
            <h1 className="text-white">Facebook Instagram Twitter Youtube</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
