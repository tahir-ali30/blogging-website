import axios from 'axios';
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from 'react';
import { titleFormat } from '../../utils';

const FooterOne = () => {
  const [categories, setCategories] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  if (typeof window !== "undefined") {
    var colorMode = window.localStorage.getItem('color-mode');
  }

  useEffect(() => {
    axios.get('http://localhost:3005/api/v1/category').then(res => setCategories((res.data.data).slice(0, 5)));
    axios.get('http://localhost:3005/api/v1/blogs?status=Published').then(res => setAllPosts(res.data.data))
  },[])

  function renderBlogs(category) {
    const blogs = (allPosts.filter(post => post.cate === category)).slice(0,7);
    return (
      <>
        <div className="inner">
          <ul className="ft-menu-list">
            {blogs.map(blog => (
              <li>
                <Link href={blog.slug} className='truncate'>{blog.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    )
  }
  
  return (
    <div className="axil-footer-area axil-footer-style-1 footer-variation-2">
      <div className="footer-mainmenu">
        <div className="container">
          <div className="row">
            {categories?.map(({ name }) => (
              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                <div className="footer-widget">
                  <h2 className="title">{titleFormat(name)}</h2>
                  {renderBlogs(name)}
                </div>
              </div>
            ))}
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget">
                <h2 className="title">About</h2>
                <div className="inner">
                  <ul className="ft-menu-list">
                    <li>
                      <a href="#">U.N.</a>
                    </li>
                    <li>
                      <a href="#">Conflicts</a>
                    </li>
                    <li>
                      <a href="#">Terrorism</a>
                    </li>
                    <li>
                      <a href="#">Disasters</a>
                    </li>
                    <li>
                      <a href="#">Global Economy</a>
                    </li>
                    <li>
                      <a href="#">Environment</a>
                    </li>
                    <li>
                      <a href="#">Religion</a>
                    </li>
                    <li>
                      <a href="#">Scandals</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Footer Top Area  */}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="logo">
              <Link href="/">
                <a>
                  <Image
                    className="dark-logo"
                    src={colorMode === "Dark" ? "/images/logo/logo-white2.webp" : "/images/logo/logo-black.webp"}
                    alt="Logo Images"
                    height={37}
                    width={141}
                  />
                </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              {/* Start Post List  */}
              <div className="d-flex justify-content-start mt_sm--15 justify-content-md-end align-items-center flex-wrap">
                <h5 className="follow-title mb--0 mr--20">Follow Us</h5>
                <ul className="social-icon color-tertiary md-size justify-content-start">
                  <li>
                    <a href="https://www.facebook.com/" rel="noopener" target="_blank">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* End Post List  */}
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Top Area  */}
      {/* Start Copyright Area  */}
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 col-md-8">
              <div className="copyright-left">
                <ul className="mainmenu justify-content-start">
                  <li>
                    <Link href="/about">
                      <a className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text="Contact Us">Contact Us</span>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text="Privacy Policy">Privacy Policy</span>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text="AdChoices">AdChoices</span>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text="Advertise with Us">
                            Advertise with Us
                          </span>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text="Blogar Store">Blogar Store</span>
                        </span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="copyright-right text-start text-md-end mt_sm--20">
                <p className="b3">
                  All Rights Reserved © {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Copyright Area  */}
    </div>
  );
};

export default FooterOne;