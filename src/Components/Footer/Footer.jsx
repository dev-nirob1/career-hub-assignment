import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-[#191818] text-gray-300 p-10'>
            <div className="grid grid-cols-6 gap-5">
                <aside className='col-span-2 space-y-2 '>
                    <h2 className='text-3xl font-bold'>CareerHub</h2>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                </aside>
                <ul className='space-y-2 font-medium'>
                    <header className="footer-title">Company</header>
                    <li><a className="link link-hover">About Us</a></li>
                    <li><a className="link link-hover">Work</a></li>
                    <li><a className="link link-hover">Latest News</a></li>
                    <li><a className="link link-hover">Careers</a></li>
                </ul>
                <ul className='space-y-2 font-medium'>
                    <header className="footer-title">Product</header>
                    <li><a className="link link-hover">Prototype</a></li>
                    <li><a className="link link-hover">Plans & Pricing</a></li>
                    <li><a className="link link-hover">Customers</a></li>
                    <li><a className="link link-hover">Integrations</a></li>

                </ul>

                <ul className='space-y-2 font-medium'>
                    <header className="footer-title">Support</header>
                    <li><a className="link link-hover">Help Desk</a></li>
                    <li><a className="link link-hover">Sales</a></li>
                    <li><a className="link link-hover">Become a Partner</a></li>
                    <li><a className="link link-hover">Developer</a></li>
                </ul>
                <ul className='space-y-2 font-medium'>
                    <header className="footer-title">Contact</header>
                    <li><a className="link link-hover">524 Broadway , NYC</a></li>
                    <li><a className="link link-hover">+1 777 - 978 - 5570</a></li>
                </ul>

            </div>
            <hr className='my-8'/>
            <div className='flex justify-between items-center'>
                <p>&copy; 2023 CareerHub. All Rights Reserved</p>
                <p>Powered by CareerHub</p>
            </div>
        </footer>
    );
};

export default Footer;