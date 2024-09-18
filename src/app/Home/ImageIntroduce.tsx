import { listIntroduce } from "@/assets/assets";

const ImageIntroduce = () => {
  return (
    <main className="md:pt-10">
      <div className="md:px-10 flex justify-center items-center text-center mb-6 text-primary-blue-lighter">
        <h1 className="self-center text-4xl font-bold text-center max-md:max-w-full max-md:text-4xl">
          Hình ảnh, video đào tạo
        </h1>
      </div>
      <div className="grid grid-cols-12 overflow-hidden">
        {listIntroduce.map((image, index) => {
          return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={index}
              src={image.src}
              alt="introduce image"
              className="col-span-4 w-full h-[120px] md:h-[200px] object-cover"
            />
          );
        })}
      </div>
    </main>
  );
};

export default ImageIntroduce;
