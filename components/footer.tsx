import { Send } from 'lucide-react';
import Image from 'next/image';

import { SocialIcon } from 'react-social-icons';
// h-[1300px] md:h-[444px]
export default function Footer () {
    return(
        <div className=" ">

            <div className="lg:flex justify-evenly pt-20">
                <div className="mx-8 xl:mx-0 space-y-7">           
                        
                        <Image src="/image.webp" width={150} height={150} alt="Logo"></Image>
                    
                        <div className="secondary lg:max-w-[289px] ">
                            Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
                        </div>  

                        <div className=" h-12 w-60 flex space-x-6">
                            <div className="h-8 w-8">
                                <SocialIcon url="https://twitter.com/jaketrent" fgColor="#FFFFFF" style={{ height: 40, width: 40 }} />
                            </div>
                            <div className="h-8 w-8">
                                <SocialIcon url="https://facebook.com/jaketrent" fgColor="#FFFFFF" style={{ height: 40, width: 40 }}/>
                            </div>
                            <div className="h-8 w-8">
                                <SocialIcon url="https://discord.com/jaketrent" fgColor="#FFFFFF" style={{ height: 40, width: 40 }} />
                            </div>
                            <div className=" h-8 w-8">
                                <SocialIcon url="https://telegram.com/jaketrent" fgColor="#FFFFFF" style={{ height: 40, width: 40 }}/>
                            </div>
                        </div>

                                     
                    
                </div>

            {/* Footer colums */}
                <div className="lg:flex lg:space-x-12 xl:space-x-24 grid md:grid-cols-2">
                    <div className="ml-10 pt-14 lg:pt-0 space-y-7 text-lg  ">
                        <p className="font-semibold "> Marketplace </p>

                        <div className="space-y-2">
                            <div className=" text-base">
                                All NFTs
                            </div>

                            <div className=" text-base">
                                Art
                            </div>

                            <div className=" text-base">
                                Music
                            </div>

                            <div className="text-base">
                                Domain
                            </div>
                        </div>




                    </div>

                    <div className="ml-10 pt-14 lg:pt-0 space-y-7 text-lg ">
                        <p className="font-semibold" > Resources </p>

                        <div className="space-y-2">
                            <div className=" text-base">
                                All NFTs
                            </div>

                            <div className=" text-base">
                                Art
                            </div>

                            <div className=" text-base">
                                Music
                            </div>

                            <div className=" text-base">
                                Domain
                            </div>
                        </div>

                    </div>

                    <div className="ml-10 pt-14 lg:pt-0 space-y-7 text-lg ">
                        <p className="font-semibold "> Community </p>

                        <div className="space-y-2">
                            <div className="text-base">
                                All NFTs
                            </div>

                            <div className="text-base">
                                Art
                            </div>

                            <div className="text-base">
                                Music
                            </div>

                            <div className=" text-base">
                                Domain
                            </div>
                        </div>




                    </div>

                </div>



            </div>

            <div className="text-xs flex justify-center lg:text-base border-t border-black w-full py-10 mt-20">
                Designed by Bushra Hussain © Copyright 2023 All rights reserved.
            </div>

   
        </div>
    )
}