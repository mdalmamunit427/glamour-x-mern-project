import img1 from "../../assets/banner.png";

const bannerContent =  <div className="absolute flex justify-start items-center h-full w-full bg-gradient-to-b from-[rgba(0, 0, 0, 0.41)] to-[rgba(0, 0, 0, 0.00)] rounded-xl bg-gray-600/20">
          <div className="md:w-2/5 ml-20 space-y-6 text-white">
            <h1 className="text-6xl font-bold">
              Affordable Clothes For You Everyone
            </h1>
            <p className="md:w-3/4">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-3">Discover More</button>
              <button className="btn btn-outline border-white border text-white">Latest Products</button>
            </div>
          </div>
        </div>;

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        {bannerContent}
        <div className="absolute flex justify-end bottom-5 right-5">
          <a href="#slide4" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        {bannerContent}
        <div className="absolute flex justify-end bottom-5 right-5">
          <a href="#slide1" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        {bannerContent}
        <div className="absolute flex justify-end bottom-5 right-5">
          <a href="#slide2" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        {bannerContent}
        <div className="absolute flex justify-end bottom-5 right-5">
          <a href="#slide3" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
