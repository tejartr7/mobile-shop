/* eslint-disable @next/next/no-img-element */

const Brand = () => {
  return (
    <>
      {/* ====== Brands Section Start */}

      <section className="bg-white font-poppins py-5 dark:bg-dark lg:py-[50px]">
        <h1 className="text-4xl flex text-center font-bold justify-center items-center my-4 ">Brands in our Store</h1>
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-2">
            {/* Use -mx-2 to create some spacing between the images */}
            <div className="w-1/2 px-2 flex items-center justify-center lg:w-1/4">
              <SingleImage
                href="/"
                Alt="Brand Image"
                imgSrc="https://www.livemint.com/rf/Image-920x613/LiveMint/Period2/2018/11/16/Photos/Home%20Page/GO%20(77)-kjmB--621x414@LiveMint.png"
                className="w-full h-20 m-4"
              />
            </div>
            <div className="w-1/2 px-2 flex items-center justify-center lg:w-1/4">
              <SingleImage
                href="/"
                Alt="Brand Image"
                imgSrc="https://madaboutkitchen.in/wp-content/uploads/2021/04/Xiaomi-redmi-logo.jpg"
                className="w-full h-30 m-4"
              />
            </div>
            <div className="w-1/2 px-2 flex items-center justify-center lg:w-1/4">
              <SingleImage
                href="/"
                Alt="Brand Image"
                imgSrc="https://1000logos.net/wp-content/uploads/2022/11/OnePlus-Logo.png"
                className="w-full h-35 m-4"
              />
            </div>
            <div className="w-1/2 px-2 flex items-center justify-center lg:w-1/4">
              <SingleImage
                href="/"
                Alt="Brand Image"
                imgSrc="https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo-2.png"
                className="w-full h-25 m-4"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-2">
            {/* Use -mx-2 to create some spacing between the images */}
            <div className="w-1/2 px-2 flex items-center justify-center lg:w-1/4">
              <SingleImage
                href="/"
                Alt="Brand Image"
                imgSrc="https://1000logos.net/wp-content/uploads/2018/10/Oppo-logo.png"
                className="w-full h-25 m-4"
              />
            </div>
            <div className="w-1/2 px-2 flex items-center justify-center lg:w-1/4">
              <SingleImage
                href="/"
                Alt="Brand Image"
                imgSrc="https://1000logos.net/wp-content/uploads/2022/02/Vivo-Logo.png"
                className="w-full h-25 m-4"
              />
            </div>
            <div className="w-1/2 px-2 flex items-center justify-center lg:w-1/4">
              <SingleImage
                href="/"
                Alt="Brand Image"
                imgSrc="https://gizchina.it/wp-content/uploads/2020/06/poco-logo-01.jpg"
                className="w-full h-25 m-4"
              />
            </div>
            <div className="w-1/2 px-2 flex items-center justify-center lg:w-1/4">
              <SingleImage
                href="/"
                Alt="Brand Image"
                imgSrc="https://logowik.com/content/uploads/images/511_motorola.jpg"
                className="w-full h-25 m-4"
              />
            </div>
          </div>
        </div>
        <p className="text-center font-bold">& many more</p>
      </section>
      {/* ====== Brands Section End */}
    </>
  );
};

export default Brand;

const SingleImage = ({ href, imgSrc, Alt,className }: { href: string, imgSrc: string, Alt: string,className:string }) => {
  return (
    <>
      <a
        href={href}
        className="mx-4 flex w-[150px] items-center justify-center  2xl:w-[180px]"
      >
        <img src={imgSrc} alt={Alt} className={className} />
      </a>
    </>
  );
};
