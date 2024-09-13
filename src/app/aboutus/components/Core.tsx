import { assets } from "@/assets/assets";

const Core = () => {
  return (
    <div className="px-6 md:px-10 py-10 md:py-10 bg-primary-blue-lighter">
      <h1 className="text-4xl font-bold text-white max-md:max-w-full max-md:text-4xl text-center uppercase">
        Giá trị cốt lõi
      </h1>
      <div className="flex flex-col md:flex-row mt-6 gap-5">
        <div className="h-max overflow-hidden p-5 flex-1 bg-white bg-opacity-25 border-2 rounded-3xl text-white flex flex-col gap-5">
          <h4 className="text-lg font-bold">Sự Tiên Phong</h4>
          <p className="text-justify">
            Qua khoá học, Học viên có thể tham gia khoá học trực tiếp tại trung
            tâm của ICLS Tech tại Hà Nội (các địa điểm trung tâm liên kết của
            ICLS) theo lịch khai giảng hàng tháng được cập nhật tại ICLS Tech.
          </p>
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img
              loading="lazy"
              src={assets.aboutCore.src}
              alt="iconTimeCircle"
              className="object-contain h-full w-full"
            />
          }
        </div>
        <div className="h-max overflow-hidden p-5 flex-1 bg-white bg-opacity-25 border-2 rounded-3xl text-white flex flex-col gap-5">
          <h4 className="text-lg font-bold">Sự Tiên Phong</h4>
          <p className="text-justify">
            Qua khoá học, Học viên có thể tham gia khoá học trực tiếp tại trung
            tâm của ICLS Tech tại Hà Nội (các địa điểm trung tâm liên kết của
            ICLS) theo lịch khai giảng hàng tháng được cập nhật tại ICLS Tech.
          </p>
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img
              loading="lazy"
              src={assets.aboutCore.src}
              alt="iconTimeCircle"
              className="object-contain h-full w-full"
            />
          }
        </div>
        <div className="h-max overflow-hidden p-5 flex-1 bg-white bg-opacity-25 border-2 rounded-3xl text-white flex flex-col gap-5">
          <h4 className="text-lg font-bold">Sự Tiên Phong</h4>
          <p className="text-justify">
            Qua khoá học, Học viên có thể tham gia khoá học trực tiếp tại trung
            tâm của ICLS Tech tại Hà Nội (các địa điểm trung tâm liên kết của
            ICLS) theo lịch khai giảng hàng tháng được cập nhật tại ICLS Tech.
          </p>
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img
              loading="lazy"
              src={assets.aboutCore.src}
              alt="iconTimeCircle"
              className="object-contain h-full w-full"
            />
          }
        </div>
      </div>
    </div>
  );
};

export default Core;
