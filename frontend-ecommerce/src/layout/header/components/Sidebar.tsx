import SocialIcon from '@/layout/footer/social-icon';
import React from 'react';
import img1 from '../../../../public/assets/img/gallery/gallery1.jpg';
import img2 from '../../../../public/assets/img/gallery/gallery2.jpg';
import img3 from '../../../../public/assets/img/gallery/gallery3.jpg';
import img4 from '../../../../public/assets/img/gallery/gallery4.jpg';
import img5 from '../../../../public/assets/img/gallery/gallery5.jpg';
import img6 from '../../../../public/assets/img/gallery/gallery6.jpg';
import Logo from '../../../../public/assets/img/logo/logo-white.png';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { PhotoProvider, PhotoView } from 'react-photo-view';

interface gallaryTypes {
    id: number;
    image: StaticImageData;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: any) => {
    const gallery_photo_data: gallaryTypes[] = [
        {
            id: 1,
            image: img1
        },
        {
            id: 2,
            image: img2
        },
        {
            id: 3,
            image: img3
        },
        {
            id: 4,
            image: img4
        },
        {
            id: 5,
            image: img5
        },
        {
            id: 6,
            image: img6
        },
    ]
    return (
        <div className={sidebarOpen ? "extra-info info-open" : "extra-info"}>
            <div className="close-icon">
                <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <i className='fas fa-window-close'></i>
                </button>
            </div>
            <div className="logo-side mb-30"> Logo
                <Link href="/">
                    <Image src={Logo} style={{ width: "auto", height: "auto" }} alt="image not found" />
                </Link>
            </div>
            <div className="side-info mb-30">
                <div className="contact-list mb-30">
                    <h4>Office Address</h4>
                    <p>
                        123/A, Miranda City Likaoli Prikano, Dope
                    </p>
                </div>
                <div className="contact-list mb-30">
                    <h4>Phone Number</h4>
                    <Link href="tel:+53684956245">+0989 7876 9865 9</Link>
                    <br />
                    <Link href="tel:+03644956245">+(090) 8765 86543 85</Link>
                </div>
                <div className="contact-list mb-30">
                    <h4>Email Address</h4>
                    <Link href="mailto:howdy@zomata.com" target='_blank'>howdy@zomata.com</Link>
                    <br />
                    <Link href="example.mail@hum.com" target='_blank'>example.mail@hum.com</Link>
                </div>
            </div>
            <div className="instagram">
                <PhotoProvider
                    speed={() => 800}
                    easing={(type) =>
                        type === 2
                            ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                            : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                    }
                >

                    {
                        gallery_photo_data.map((item) => (
                            <Link href="#" key={item.id}>
                                <PhotoView src={item.image.src}>
                                    <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                </PhotoView>
                            </Link>
                        ))
                    }

                </PhotoProvider>
            </div>
            <SocialIcon WrapperClass='social-icon-right mt-20' />
        </div>
    );
};

export default Sidebar;