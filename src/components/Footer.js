import React from 'react';
import FooterItem from './FooterItem';

const Footer = () => {
    return (
        <>
        <a href="#nav-top">
            <div className="text-center cursor-pointer py-4 bg-amazon_blue-light">
                <p className='text-sm text-white'>Back to top</p>
            </div>
        </a>
        <footer className='py-5 bg-amazon_blue text-white'>
            <div className='container mx-auto grid grid-flow-row-dense lg:grid-cols-7'>
                <FooterItem title='Amazon Music' description='Stream millions of songs'/>
                <FooterItem title='Amazon Advertising' description='Find, attract, and
engage customers'/>
                <FooterItem title='Amazon Drive' description='Cloud storage
from Amazon'/>
                <FooterItem title='6pm' description='Score deals
on fashion brands'/>
                <FooterItem title='AbeBooks' description='Books, art
& collectibles'/>
                <FooterItem title='Sell on Amazon' description='Start a Selling Account'/>
                <FooterItem title='Amazon Business' description='Everything For
Your Business'/>

                <FooterItem title='AmazonGlobal' description='Ship Orders
Internationally'/>
                <FooterItem title='Home Services' description='Experienced Pros
Happiness Guarantee'/>
                <FooterItem title='Amazon Ignite' description='Sell your original
Digital Educational
Resources'/>
                <FooterItem title='Book Depository' description='Books With Free
Delivery Worldwide'/>
                <FooterItem title='Box Office Mojo' description='Find Movie
Box Office Data'/>
                <FooterItem title='ComiXology' description='Thousands of
Digital Comics'/>
                <FooterItem title='	DPReview' description='Digital
Photography'/>

                <FooterItem title='	East Dane' description='Designer Mens
Fashion'/>
                <FooterItem title='IMDb' description='Movies, TV
& Celebrities'/>
                <FooterItem title='IMDbPro' description='Get Info Entertainment
Professionals Need'/>
                <FooterItem title='Kindle Direct Publishing' description='Indie Digital & Print Publishing
Made Easy'/>
                <FooterItem title='Prime Video Direct' description='Video Distribution
Made Easy'/>
                <FooterItem title='Shopbop' description='Designer
Fashion Brands'/>
                <FooterItem title='Ring' description='Smart Home
Security Systems'/>

                <FooterItem title='eero WiFi' description='Smart Security
for Every Home'/>
                <FooterItem title='Amazon Ignite' description='Sell your original
Digital Educational
Resources'/>
                <FooterItem title='Book Depository' description='Books With Free
Delivery Worldwide'/>
                <FooterItem title='Box Office Mojo' description='Find Movie
Box Office Data'/>
                <FooterItem title='ComiXology' description='Thousands of
Digital Comics'/>
                <FooterItem title='	DPReview' description='Digital
Photography'/>

                <FooterItem title='	East Dane' description='Designer Mens
Fashion'/>
                <FooterItem title='IMDb' description='Movies, TV
& Celebrities'/>
                <FooterItem title='IMDbPro' description='Get Info Entertainment
Professionals Need'/>
                <FooterItem title='Kindle Direct Publishing' description='Indie Digital & Print Publishing
Made Easy'/>
                <FooterItem title='Prime Video Direct' description='Video Distribution
Made Easy'/>
                <FooterItem title='Shopbop' description='Designer
Fashion Brands'/>
                <FooterItem title='Ring' description='Smart Home
Security Systems'/>

                <FooterItem title='eero WiFi' description='Smart Security
for Every Home'/>
            </div>
            <p className='w-full text-xs text-center mt-5'>Conditions of UsePrivacy NoticeInterest-Based Ads© 1996-2021, Amazon.com, Inc. or its affiliates</p>
        </footer>
        </>
    );
};

export default Footer;