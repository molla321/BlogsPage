import React from 'react';
import { FaClock, FaUser } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import SideBarr from './SideBarr';

const SingleBlog = () => {
    const data = useLoaderData();

    const {title, image, category, author, authorPic, published_date, reading_time, content} = data[0];
    return (
        <div>
            <div className="py-40 bg-black text-center text-white px-4">
                <h2 className='text-2xl lg:text-7xl leading-3 font-bold mb-5'>Single Blog Page</h2>
            </div>


            {/* blog detailse */}
            <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
                <div className="lg:w-3/4 mx-auto">
                    <div className="">
                        <img src={image} alt="" className='w-full mx-auto rounded' />
                    </div>
                    <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
                    <p><FaUser className='inline-flex items-center mr-2'/>{author} | {published_date}</p>
                    <p className="mb-3 text-gray-600"><FaClock className='inline-flex items-center mr-2'/>{reading_time}</p>

                    <p className="text-base text-gray-600 mb-6">{content}</p>

                    <div className="text-base text-gray-500">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, animi expedita veritatis voluptatibus ea laudantium!</p> <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nulla eos ipsam deserunt possimus cupiditate dolor nostrum dicta, sint animi accusantium fugit voluptatibus officiis modi corrupti minima soluta. Asperiores, nobis?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quo quas deserunt exercitationem quibusdam corporis odit ipsa autem eveniet voluptatem quidem cupiditate tempora reprehenderit praesentium delectus dignissimos, pariatur non iusto.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat accusantium ut itaque quo repellat alias iure. Placeat incidunt minima perferendis possimus qui amet fugit magni, repellendus dolor itaque dicta?</p><br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta veritatis amet aliquam sit, laudantium, sint obcaecati accusantium ex eos at eius pariatur ipsum adipisci explicabo quisquam officiis dignissimos vero molestiae!</p>
                        <br />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa vel rerum accusantium voluptatem. Saepe harum vel delectus quis excepturi a id, ut perferendis. Rem est similique assumenda soluta provident perferendis.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quisquam eligendi natus eius enim, veritatis sed nostrum, commodi repellat reiciendis optio velit recusandae vitae. Ea culpa quos veniam atque voluptatibus.</p> <br />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio veniam, suscipit at modi reiciendis deleniti unde. Optio a, necessitatibus placeat repudiandae magni, vero possimus culpa numquam corrupti ex voluptatibus tempora.</p>
                    </div>
                </div>

                <div className="lg:w-3/4 mx-auto">
                  <SideBarr />
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;