const Footer = () => {
  return (
    <footer className="text-white pb-20 pt-16 relative bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 mb-12">
          <div className="items-start flex-col justify-start flex gap-14">
            <a className="inline-block text-xl font-semibold text-white" href="/">
              Brand
            </a>
            <div className="flex-col flex gap-4">
              <div className="font-medium">Sign up to receive health tips.</div>
              <div className="mt-0 mx-0 mb-3.5">
                <div className="items-center justify-start relative flex w-[90%]">
                  <input className="text-white cursor-text py-2 pl-6 pr-3 w-full h-12 mt-0 mx-0 mb-3 border-2 border-white/[0.13] border-solid rounded-full bg-zinc-900" placeholder="Enter your email" type="email" />
                  <input className="text-zinc-900 bg-white bottom-0 cursor-pointer py-2 px-6 absolute right-0 text-center top-0 inline-block w-24 h-12 rounded-full m-0" type="submit" value="Submit" />
                </div>
                <div className="mx-0 mb-0 text-sm text-white/[0.8]">
                  <p className="mb-3">By submitting your email address you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            <div className="items-start flex-col justify-start flex gap-6">
              <div className="text-sm uppercase text-white/[0.6]">
                <div>Popular</div>
              </div>
              <ul className="items-start flex-col justify-start flex list-none mb-3 gap-6">
                <li className="list-item">GLP-1 Treatments</li>
                <li className="list-item">Ozempic®</li>
                <li className="list-item">Wegovy®</li>
                <li className="list-item">Sermorelin</li>
                <li className="list-item">NAD+</li>
              </ul>
            </div>
            <div className="items-start flex-col justify-start flex gap-6">
              <div className="text-sm uppercase text-white/[0.6]">
                <div>Company</div>
              </div>
              <ul className="items-start flex-col justify-start flex list-none mb-3 gap-6">
                <li className="list-item">About Us</li>
                <li className="list-item">Health Club</li>
                <li className="list-item">Pharmacy</li>
                <li className="list-item">Meal Plans</li>
                <li className="list-item">Community</li>
                <li className="list-item">Our Blog</li>
                <li className="list-item">Contact Us</li>
                <li className="list-item">Careers</li>
              </ul>
            </div>
            <div className="items-start flex-col justify-start flex gap-6">
              <div className="text-sm uppercase text-white/[0.6]">
                <div>Legal</div>
              </div>
              <ul className="items-start flex-col justify-start flex list-none mb-3 gap-6">
                <li className="list-item">Terms & Conditions</li>
                <li className="list-item">Privacy Policy</li>
                <li className="list-item">My Health My Data Policy</li>
                <li className="list-item">Important Safety Information</li>
                <li className="list-item">Your Privacy Choices</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white/[0.3] h-px my-8" />
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <ul className="flex flex-wrap items-center justify-center lg:justify-start list-none gap-4">
            <li className="list-item">
              <a className="items-center justify-center inline-block max-w-full" href="https://www.facebook.com">
                <div className="items-center cursor-pointer justify-center flex">
                  <svg className="w-6 h-6" fill="none" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12.0591C22 6.50256 17.5229 1.99805 12 1.99805C6.47715 1.99805 2 6.50256 2 12.0591C2 17.0808 5.65684 21.2432 10.4375 21.998V14.9674H7.89844V12.0591H10.4375V9.84257C10.4375 7.32101 11.9305 5.92817 14.2146 5.92817C15.3088 5.92817 16.4531 6.12468 16.4531 6.12468V8.60066H15.1922C13.95 8.60066 13.5625 9.37627 13.5625 10.1719V12.0591H16.3359L15.8926 14.9674H13.5625V21.998C18.3432 21.2432 22 17.081 22 12.0591Z" fill="rgb(255, 255, 255)" />
                  </svg>
                </div>
              </a>
            </li>
            <li className="list-item">
              <a className="items-center justify-center inline-block max-w-full" href="https://www.instagram.com">
                <div className="items-center cursor-pointer justify-center flex">
                  <svg className="w-6 h-6" fill="none" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z" fill="rgb(255, 255, 255)" fillRule="evenodd" />
                  </svg>
                </div>
              </a>
            </li>
            <li className="list-item">
              <a className="items-center justify-center inline-block max-w-full" href="https://x.com">
                <div className="items-center cursor-pointer justify-center flex">
                  <svg className="w-6 h-6" fill="none" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.1761 4.00195H19.9362L13.9061 10.7794L21 20.002H15.4456L11.0951 14.4086L6.11723 20.002H3.35544L9.80517 12.7528L3 4.00195H8.69545L12.6279 9.11457L17.1761 4.00195ZM16.2073 18.3774H17.7368L7.86441 5.54123H6.2232L16.2073 18.3774Z" fill="rgb(255, 255, 255)" />
                  </svg>
                </div>
              </a>
            </li>
            <li className="list-item">
              <a className="items-center justify-center inline-block max-w-full" href="https://www.tiktok.com">
                <div className="items-center cursor-pointer justify-center flex">
                  <svg className="w-6 h-6" fill="none" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2615 5.9218C15.5918 5.15694 15.2226 4.17486 15.2227 3.1582H12.1945V15.3102C12.1717 15.968 11.8942 16.5911 11.4206 17.0482C10.947 17.5054 10.3145 17.7606 9.65632 17.7602C8.26472 17.7602 7.10831 16.6234 7.10831 15.2122C7.10831 13.5266 8.73512 12.2624 10.4109 12.7818V9.68504C7.02991 9.23424 4.07031 11.8606 4.07031 15.2122C4.07031 18.4756 6.77511 20.7982 9.64648 20.7982C12.7237 20.7982 15.2227 18.2992 15.2227 15.2122V9.048C16.4506 9.92984 17.925 10.403 19.4367 10.4004V7.3722C19.4367 7.3722 17.5943 7.4604 16.2615 5.9218Z" fill="rgb(255, 255, 255)" />
                  </svg>
                </div>
              </a>
            </li>
            <li className="list-item">
              <a className="items-center justify-center inline-block max-w-full" href="https://www.linkedin.com">
                <div className="items-center cursor-pointer justify-center flex">
                  <svg className="w-6 h-6" fill="none" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M4.5 3C3.67157 3 3 3.67157 3 4.5V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V4.5C21 3.67157 20.3284 3 19.5 3H4.5ZM8.52076 7.00272C8.52639 7.95897 7.81061 8.54819 6.96123 8.54397C6.16107 8.53975 5.46357 7.90272 5.46779 7.00413C5.47201 6.15897 6.13998 5.47975 7.00764 5.49944C7.88795 5.51913 8.52639 6.1646 8.52076 7.00272ZM12.2797 9.76176H9.75971H9.7583V18.3216H12.4217V18.1219C12.4217 17.742 12.4214 17.362 12.4211 16.9819C12.4203 15.9681 12.4194 14.9532 12.4246 13.9397C12.426 13.6936 12.4372 13.4377 12.5005 13.2028C12.7381 12.3253 13.5271 11.7586 14.4074 11.8979C14.9727 11.9864 15.3467 12.3141 15.5042 12.8471C15.6013 13.1803 15.6449 13.5389 15.6491 13.8863C15.6605 14.9339 15.6589 15.9815 15.6573 17.0292C15.6567 17.399 15.6561 17.769 15.6561 18.1388V18.3202H18.328V18.1149C18.328 17.6629 18.3278 17.211 18.3275 16.7591C18.327 15.6296 18.3264 14.5001 18.3294 13.3702C18.3308 12.8597 18.276 12.3563 18.1508 11.8627C17.9638 11.1286 17.5771 10.5211 16.9485 10.0824C16.5027 9.77019 16.0133 9.5691 15.4663 9.5466C15.404 9.54401 15.3412 9.54062 15.2781 9.53721C14.9984 9.52209 14.7141 9.50673 14.4467 9.56066C13.6817 9.71394 13.0096 10.0641 12.5019 10.6814C12.4429 10.7522 12.3852 10.8241 12.2991 10.9314L12.2797 10.9557V9.76176ZM5.68164 18.3244H8.33242V9.76733H5.68164V18.3244Z" fill="rgb(255, 255, 255)" fillRule="evenodd" />
                  </svg>
                </div>
              </a>
            </li>
            <li className="list-item">
              <a className="items-center justify-center inline-block max-w-full" href="https://www.youtube.com">
                <div className="items-center cursor-pointer justify-center flex">
                  <svg className="w-6 h-6" fill="none" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M20.5686 4.77345C21.5163 5.02692 22.2555 5.76903 22.5118 6.71673C23.1821 9.42042 23.1385 14.5321 22.5259 17.278C22.2724 18.2257 21.5303 18.965 20.5826 19.2213C17.9071 19.8831 5.92356 19.8015 3.40294 19.2213C2.45524 18.9678 1.71595 18.2257 1.45966 17.278C0.827391 14.7011 0.871044 9.25144 1.44558 6.73081C1.69905 5.78311 2.44116 5.04382 3.38886 4.78753C6.96561 4.0412 19.2956 4.282 20.5686 4.77345ZM9.86682 8.70227L15.6122 11.9974L9.86682 15.2925V8.70227Z" fill="rgb(255, 255, 255)" fillRule="evenodd" />
                  </svg>
                </div>
              </a>
            </li>
          </ul>
          <div className="flex items-center justify-center lg:justify-end gap-8">
            <img className="cursor-pointer object-cover align-middle inline-block w-20 h-24 lg:w-24 lg:h-28 max-w-full" src="https://static.legitscript.com/seals/18293218.png" alt="LegitScript Certified" />
            <div className="items-center flex-col justify-start text-center flex gap-2">
              <div className="text-white/[0.8] text-sm font-medium">Compounded</div>
              <svg className="inline w-20 h-12" fill="none" height="47" viewBox="0 0 76 47" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3699_313)" fill="none">
                  <path d="M74.7319 1.18359H30.5859V9.86111H74.7319V1.18359Z" fill="none" stroke="#eeeeee" strokeMiterlimit="10" />
                  <path d="M74.7319 9.86328H30.5859V18.5408H74.7319V9.86328Z" fill="none" stroke="#eeeeee" strokeMiterlimit="10" />
                  <path d="M74.7319 18.543H30.5859V27.2205H74.7319V18.543Z" fill="none" stroke="#eeeeee" strokeMiterlimit="10" />
                  <path d="M74.7303 27.2227H2.56641V35.9002H74.7303V27.2227Z" fill="none" stroke="#eeeeee" strokeMiterlimit="10" />
                  <path d="M74.7303 35.8984H2.56641V44.576H74.7303V35.8984Z" fill="none" stroke="#eeeeee" strokeMiterlimit="10" />
                  <path d="M30.5859 1.18359H2.56641V27.2206H30.5859V1.18359Z" fill="none" stroke="#eeeeee" strokeMiterlimit="10" />
                  <circle cx="8.5" cy="6.5" fill="none" r="0.5" stroke="#eeeeee" />
                  <circle cx="8.5" cy="14.5" fill="none" r="0.5" stroke="#eeeeee" />
                  <circle cx="8.5" cy="22.5" fill="none" r="0.5" stroke="#eeeeee" />
                  <circle cx="12.5" cy="10.5" fill="none" r="0.5" stroke="#eeeeee" />
                  <circle cx="12.5" cy="18.5" fill="none" r="0.5" stroke="#eeeeee" />
                  <circle cx="16.5" cy="6.5" fill="none" r="0.5" stroke="#eeeeee" />
                  <circle cx="16.5" cy="14.5" fill="none" r="0.5" stroke="#eeeeee" />
                  <circle cx="16.5" cy="22.5" fill="none" r="0.5" stroke="#eeeeee" />
                  <circle cx="20.5" cy="10.5" fill="none" r="0.5" stroke="#eeeeee" />
                  <circle cx="20.5" cy="18.5" fill="none" r="0.5" stroke="#eeeeee" />
                  <circle cx="24.5" cy="6.5" fill="none" r="0.5" stroke="#eeeeee" />
                  <circle cx="24.5" cy="14.5" fill="none" r="0.5" stroke="#eeeeee" />
                  <circle cx="24.5" cy="22.5" fill="none" r="0.5" stroke="#eeeeee" />
                </g>
                <defs fill="none">
                  <clipPath fill="none" id="clip0_3699_313">
                    <rect className="w-20 h-12" fill="rgb(255, 255, 255)" height="46.7305" transform="translate(0.898438 0.0703125)" />
                  </clipPath>
                </defs>
              </svg>
              <div className="text-white/[0.8] text-sm font-medium">in the U.S.A.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white/[0.1] items-center bottom-0 justify-center left-0 py-2 px-4 absolute right-0 text-center flex text-sm">
        <div>© 2025 Your Company Name. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
