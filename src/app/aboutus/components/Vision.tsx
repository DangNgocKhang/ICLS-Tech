import { assets } from "@/assets/assets";
import Image from "next/image";

const Vision = () => {
  return (
    <div className="px-6 md:px-10">
      <h1 className="text-4xl font-bold text-primary-blue-lighter max-md:max-w-full max-md:text-4xl text-left">
        TẦM NHÌN
      </h1>
      <p className="text-lg leading-8 text-justify  max-md:max-w-full mt-3">
        Tầm nhìn của ICLS Tech là trở thành một hình mẫu tiên phong trong lĩnh
        vực đào tạo công nghệ, tài chính, kinh tế và phân tích dữ liệu cho người
        Việt Nam, tạo nên sự hiện diện đáng tin cậy và uy tín trong cộng đồng
        giáo dục và doanh nghiệp. Chúng tôi hướng đến việc thúc đẩy sự phát
        triển bền vững và thành công của người Việt, từ việc nắm vững các kỹ
        năng công nghệ hàng đầu cho đến việc thúc đẩy sự nâng cao vị thế của họ
        trong môi trường làm việc toàn cầu.
      </p>
      <div className="mt-8 flex flex-col xl:flex-row">
        <div className="m-auto">
          <Image
            src={assets.aboutVision}
            alt="aboutICLS Tech"
            height={453}
            width={643}
            className=""
          />
        </div>
        <div className="flex-1 my-auto xl:px-10">
          <p className="text-lg leading-8 text-justify  max-md:max-w-full mt-3  break-normal">
            Trước thách thức thế giới công nghệ đang mang lại, chúng tôi thấu
            hiểu rằng sự hội nhập vào dòng chảy toàn cầu đòi hỏi sự chắt lọc kỹ
            năng và kiến thức, và tầm nhìn của chúng tôi chính là giúp mọi học
            viên của ICLS Tech có khả năng thích ứng mạnh mẽ và tự tin với mọi
            tình huống trong thế giới công nghệ phức tạp. Chúng tôi tin tưởng
            rằng thông qua việc đồng hành cùng học viên, ICLS Tech sẽ góp phần
            xây dựng một tương lai đầy tri thức và cơ hội, giúp người Việt Nam
            trở thành những người tiên phong, tự tin và thành công trong thế
            giới công nghệ hôm nay và mai sau.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
