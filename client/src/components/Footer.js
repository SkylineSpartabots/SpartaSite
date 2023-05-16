export default function Footer() {
  return (
    <footer className="text-center lg:text-left bg-gray-200 text-gray-600">
      <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
        <div className="mr-12 hidden lg:block">
          <span>Check us out on Social Media:</span>
        </div>
        <div className="flex justify-center">
          <a
            href="https://www.twitter.com/spartabots"
            target="_blank"
            rel="noreferrer"
            className="mr-6 text-gray-600"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter"
              className="svg-inline--fa fa-twitter w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/spartabots"
            target="_blank"
            rel="noreferrer"
            className="mr-6 text-gray-600"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              className="svg-inline--fa fa-google w-3.5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/spartabots2976"
            target="_blank"
            rel="noreferrer"
            className="mr-6 text-gray-600"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="instagram"
              className="svg-inline--fa fa-instagram w-3.5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="">
            <h6
              className="
                    uppercase
                    font-semibold
                    mb-4
                    flex
                    items-center
                    justify-center
                    md:justify-start
                "
            >
              {/* <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="cubes"
                className="svg-inline--fa fa-cubes w-8 mr-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2049.08 1338.67"
              >
                <defs>
                  <linearGradient
                    id="b"
                    x1="997.34"
                    y1="1080"
                    x2="3046.42"
                    y2="1080"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#ffca5f" />
                    <stop offset="1" stop-color="#fa5fff" />
                  </linearGradient>
                </defs>
                <path
                  d="M1151.24,695.26H997.34l37.95-274H1505.4L1319.89,1740.9H1003.67Zm375.23,630.34,71.67-512.28c27.41-198.17,113.84-402.65,440.61-402.65,409,0,432.16,223.46,406.87,417.41l-73.79,516.49c-27.4,198.17-128.6,404.76-444.82,404.76C1539.11,1749.33,1499.06,1523.76,1526.47,1325.6Zm527,25.3,73.79-531.26c14.75-92.75-4.22-134.92-88.54-134.92S1927,729,1914.37,821.75l-73.79,527c-12.65,94.87,6.32,134.92,86.43,134.92C2002.91,1483.71,2040.85,1443.66,2053.5,1350.9Zm638.75-655.64H2538.36l37.94-274h470.12L2860.9,1740.9H2544.68Z"
                  transform="translate(-997.34 -410.67)"
                  fill="url(#b)"
                />
              </svg> */}
              Spartasite by the Spartabots
            </h6>
            <p>
              The Spartasite is the online home of the Spartabots. Here, we
              share our accomplishments, goals, and values. Team 2976 is always
              reaching for the stars, and we're so excited to share our journey
              with everyone!
            </p>
          </div>
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Learn
            </h6>
            <p className="mb-4">
              <a href="/learn/three" className="text-gray-600">
                Onshape
              </a>
            </p>
            <p className="mb-4">
              <a href="/learn/two" className="text-gray-600">
                Design
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Fabrication
              </a>
            </p>
            <p>
              <a href="#!" className="text-gray-600">
                Management
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <a
                href="https://learn.onshape.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600"
              >
                Onshape Learning Center
              </a>
            </p>
            <p className="mb-4">
              <a
                href="https://www.youtube.com/spartabots"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600"
              >
                Spartabots Youtube
              </a>
            </p>
            <p className="mb-4">
              <a href="/check" className="text-gray-600">
                Check Your Understanding
              </a>
            </p>
            <p>
              <a href="/design" className="text-gray-600">
                Design Calculator
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Contact
            </h6>
            <p className="flex items-center justify-center md:justify-start mb-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="envelope"
                className="svg-inline--fa fa-envelope w-4 mr-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                ></path>
              </svg>
              skyline.spartabots@gmail.com
            </p>
            <p className="flex items-center justify-center md:justify-start mb-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="phone"
                className="svg-inline--fa fa-phone w-4 mr-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                ></path>
              </svg>
              Don't call us please
            </p>
          </div>
        </div>
      </div>
      <div className="text-center p-6 bg-gray-200">
        <span>© 2022 Copyright:</span>
        <a
          className="text-gray-600 font-semibold"
          href="https://www.spartabots.org/"
        >
          {" "}
          Skyline Spartabots // Team 2976
        </a>
      </div>
    </footer>
  );
}
