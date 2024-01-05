import Image from "next/image";
import { useState } from "react";


export default function ProfileCard({ avatar, profileId, onSelect, onCancel }: { avatar: string, profileId: number, onSelect: (id: number) => void, onCancel: (id: number) => void }) {
    const [showRemouveWarning, setShowRemouveWarning] = useState(false);
    const [showVieweWarning, setShowViewWarning] = useState(false);

    return (
        <div className="rounded-lg hover:shadow-2xl border-2 border-transparent border-solid hover:border-white" >
            <figure className='final-result-item h-80 group relative'>
                <Image className='final-result-avatar rounded-lg h-80 w-full' height={320} width={190} style={{ objectFit: "cover" }} src={avatar} alt="persone" />
                <figcaption className="final-result-caption absolute bottom-2 right-2 left-2 grid grid-cols-2 gap-x-3.5   ">
                    {/* cancel button */}
                    <button onClick={() => {
                        // remouve the profile from the list

                        setShowRemouveWarning(true)

                    }} className=' py-1 px-7 bg-[#dbf0e667] rounded backdrop-blur-[2]  hover:shadow-md hover:bg-[#f0dbdb] text-[#F8F8F8] hover:text-red-500'>
                        <svg className='m-auto' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_755_835" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <rect width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_755_835)">
                                <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" className="fill-current" />
                            </g>
                        </svg>
                    </button>
                    {/* aprouve button */}
                    <button onClick={() => {

                        setShowViewWarning(true)

                    }} className='  py-1 px-7 bg-[#dbf0e667] rounded backdrop-blur-[2] hover:bg-[#dbf0df]  text-[#F8F8F8] hover:text-green-400'>
                        <svg className='m-auto' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_698_3734" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <rect width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_698_3734)">
                                <path d="M9.54961 18.0001L3.84961 12.3001L5.27461 10.8751L9.54961 15.1501L18.7246 5.9751L20.1496 7.4001L9.54961 18.0001Z" className="fill-current" />
                            </g>
                        </svg>
                    </button>
                </figcaption>
            </figure>
            {/* cancel warning */}
            {
                showRemouveWarning && (
                    <div id="default-modal" tabIndex={-1} aria-hidden="true" className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="relative p-4 w-full max-w-lg max-h-full m-auto top-1/4">

                            <div className="relative p-6 bg-white rounded-lg shadow ">
                                <div className="flex items-center justify-between mb-1 ">
                                    <h3 className="text-xl font-semibold text-gray-900 ">
                                        Are you sure ?
                                    </h3>
                                    <button onClick={() => {
                                        setShowRemouveWarning(false)
                                    }} type="button" className=" bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                <p className="text-base ">
                                    Once you remove this profile from the list you won’t get access to him once again
                                </p>
                                <div className="flex flex-col sm:flex-row gap-2  sm:items-center mt-3.5">
                                    <button onClick={() => {
                                        onCancel(profileId);
                                        setShowRemouveWarning(false)
                                    }} data-modal-hide="default-modal" type="button" className="text-white bg-[#F51600] focus:ring-4 font-medium rounded-lg text-sm px-5 py-2 text-center">Yes remove it from the list</button>
                                    <button onClick={() => {
                                        setShowRemouveWarning(false)
                                    }} data-modal-hide="default-modal" type="button" className="text-[#f51600] bg-[#f514003f] hover:bg-[#f5140018] rounded-lg border-gray-200 text-sm font-medium px-5 py-2 hover:text-gray-900 focus:z-10 ">No Keep it</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}


            {
                showVieweWarning && (
                    <div id="default-modal" tabIndex={-1} aria-hidden="true" className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="relative p-4 w-full max-w-lg max-h-full  m-auto top-1/4">

                            <div className="relative p-6 bg-white rounded-lg shadow m-auto">
                                <div className="flex items-center justify-between mb-1 ">
                                    <h3 className="text-xl font-semibold text-gray-900 ">
                                        Are you sure ?
                                    </h3>
                                    <button onClick={() => {
                                        setShowViewWarning(false)
                                    }} type="button" className=" bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                <p className="text-base ">
                                    You can access only one profile and see his details
                                </p>


                                <div className="flex flex-col sm:flex-row gap-2  sm:items-center mt-3.5">
                                    <button onClick={() => {
                                        onSelect(profileId);
                                        setShowViewWarning(false)
                                    }} data-modal-hide="default-modal" type="button" className="text-white bg-[#F51600] focus:ring-4 font-medium rounded-lg text-sm px-5 py-2 text-center">Yes i want see details</button>
                                    <button onClick={() => {
                                        setShowViewWarning(false)
                                    }} data-modal-hide="default-modal" type="button" className=" text-[#f51600] bg-[#f514003f] hover:bg-[#f5140018] rounded-lg border-gray-200 text-sm font-medium px-5 py-2 hover:text-gray-900 focus:z-10 ">No</button>
                                </div>



                            </div>
                        </div>
                    </div>
                )}


        </div>
    )
}